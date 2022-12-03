---
sidebar_position: 2
---

# How to Write a Contract

A smart contract is a class that extends the `SmartContract` base class. A simple example is shown below.

```ts
import { SmartContract, method, prop, assert } from "scrypt-ts";

class Demo extends SmartContract {
  @prop()
  x: bigint;

  constructor(x: bigint) {
    super(x);
    this.x = x;
  }

  @method
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }

  @method
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
}
```

## Properties

A smart contract can have two kinds of properties:

1. Properties with `@prop` decorator. These properties are **only allowed to have [types](#Types) specified below** and they shall only be initialized in the constructor.

2.  Properties without `@prop` decorator. These properties are normal typescript class properties without any special requirement.


### `@prop(stateful: boolean = false)` decorator 

Use this decorator to mark any property that intends to be stored on chain.

This decorator takes a `boolean` parameter. By default, it is set to `false`, meaning the property cannot be changed after the contract is deployed. If the value is `true`, the property is a so-called `stateful` property and its value can be updated in subsequent contract calls.

## Constructor

A smart contract must have an explicit constructor if it has at least one `@prop`. 

The `super` method must be called in the constructor with all the arguments for `@prop`s in the same orders as they are passed in. For example,

```js
class A extends SmartContract {
  p0: string;
  @prop() p1: bigint;
  @prop() p2: boolean;
  constructor(p0: string, p1: bigint, p2: boolean) {
    super(p1, p2);  // Do not pass in `p0` bcoz it’s not a `@prop`, also note that `p1` & `p2` should be passed in order.
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
}
```

## Methods

Like properties, a smart contract can also have two kinds of methods:

1. Methods without `@method` decorator. These methods are just like normal typescript class methods with no special restraints.

2. Methods with `@method` decorator. These methods can only call **methods also decorated by `@method` or [functions](#Functions) specified below**. Similarly, **only the properties decorated by `@prop` can be accessed**.

### `@method` decorator

Use this decorator to mark any function that intends to be stored on chain.

### Public `@method`s

Each contract has at least one public function. It is denoted with the `public` modifier and does not return any value. It is visible outside the contract and acts as the entry point into the contract (like main in C and Java).

A public function can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in [assert()](#`assert`). An example is shown below.

```js
  @method
  public unlock(x: bigint) {
    assert(this.add(this.x, 1n) === x);
  }
```

### Non-Public `@method`s

Without a `public` modifier, a `@method` is an internal function and can only be called within the contract class. 

It can return any valid types described later. The return type must be explicitly declared. e.g.,

```js
  @method
  add(x0: bigint, x1:bigint) : bigint {
    return x0 + x1;
  }
```


Note: Recursion is disallowed. Both **Non-Public Function** and **Public Function** cannot call itself in its body, either directly or indirectly.


## Types

The types used in `@prop` and `@method` are restricted to these kinds:

### Basic Types

The most basic types allowed are: `boolean` / `string` / `bigint`, along with their wrapper types `Boolean` / `String` / `Bigint`.

#### `string` Type

In a smart contract context (i.e., in `@method`s or `@prop`s), a `string` type represents a byte array in hex format. It must be able be represented by the regular expression: `/^([0-9a-fA-F]{2})*$/`.

Literal `string` is not allowed to be used directly without being wrapped in these functions below:

* `hexToString(input: string)`: return the raw value of `input` as a byte array while validating it as hex bytes.
* `utf8ToString(input: string)`: return a value in hex bytes format representing the utf8 encoding of `input`.

For example:

```js
let s0 = utf8ToString('hello world');  // valid, s0 === "68656c6c6f20776f726c64"

let s1 = hexToString('01ab23ef');       // valid, s1 === '01ab23ef'

let invalid_str = "hello world";  // invalid, string literal without wrapper function

let invalid_str2 = hexToString('012'); // invalid, odd number of hex characters
```

Also there are only a few methods of `string` can be used in `@method`s:

* `String.==` / `String.===`: compare two strings, like `str1 == str2` or `str1 === str2`.

* `String.+`: concat two strings, like `str1 + str2`.

* `String.slice(indexStart, indexEnd?)`: return a substring like `str.slice(0, 2)`. Since `String` is a byte array, `indexStart` and `indexEnd` must be even numbers.

#### `number` Type

By default, type `number` is not allowed in `@prop`s and `@method`s because it may cause precision issues when representing a floating point number. There are a few exceptions:

* [A compile-time constant](#compile-time-constant)

```ts
const N: number = 2;
let arr: FixedArray<bigint, N> = [1n, 2n];
```

* An array index

```ts
let idx : number = 3;
let item = arr[idx];
```

* An induction variable in `for` statement

```ts
for(let i: number =0; i < 5; i++) …
```

### User-defined Types

Users can be define customized types using `type` or `interface`, made of basic types. For example,

```ts
type ST = {
  a: bigint;
  b: boolean;
}

interface ST1 {
  x: ST;
  y: string;
}
```

### Array Types

The common array types in Typescript like `T[]` or `Array<T>` are not allowed to be used in `@prop`s and `@method`s. 

An array **must** be declared as type of `FixedArray<T, LENGTH>`, whose `LENGTH` must be a [CTC](#compile-time-constant) value described later, like:

```ts
let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n];

const N = 2;
let aab: FixedArray<bigint, N> = [1n, 2n];

// 2-dimensional array
let abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]];
```

### Domain Types

There are several domain types, specific to the Bitcoin context, used to further improve type safety.

* [PubKey](../reference/classes/PubKey.md) - a public key

* [PrivKey](../reference/classes/PrivKey.md) - a private key

* [Sig](../reference/classes/Sig.md) - a signature type in DER format, including signature hash

* [Ripemd160](../reference/classes/Ripemd160.md) - a RIPEMD-160 hash

* [PubKeyHash](../reference/classes/PubKeyHash.md) - an alias for Ripemd160`, usually representing a bitcoin address.

* [Sha1](../reference/classes/Sha1.md) - a SHA-1 hash

* [Sha256](../reference/classes/Sha256.md) - a SHA-256 hash

* [SigHashType](../reference/classes/SigHashType.md) - a sighash

* [SigHashPreimage](../reference/classes/SigHashPreimage.md) - a sighash preimage

* [OpCodeType](../reference/classes/OpCodeType.md) - an OpCode

### `SmartContract` subclasses Types

They can be imported as dependencies and use as libraries.

## Variable declarations

Variables can be declared in `@method`s by keywords `const` / `var` / `let`, like in normal Typescript.

```ts
let a : bigint = 1n;
var b: boolean = false;
const N: number = 3;
```

### Compile-time Constant

A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. There are three kinds:

* A number literal like:

```ts
3;
```

* A `const` variable:

```ts
const N = 3;
```

* A `readonly` property:

```ts
class X {
  static readonly N = 3;
}
```

Only numeric literal can be used to initialize CTC. Expressions are not allowed.

```ts
const N = 3; // valid
const N = 3 + 3; // invalid
class X {
  static readonly N = 3; // valid
  static readonly N = 3 + 3; // invalid
}
```


They can be used at places where a CTC is required, including:

* Array length in declaration

```ts
FixedArray<bigint, 3>
FixedArray<bigint, N>
FixedArray<bigint, X.N>
```

* Loop count in `for` statement

```ts
for(let i=0; i< 3; i++)
for(let i=0; i< N; i++)
for(let i=0; i< X.N; i++)
```

## Statements

There are some other constraints on statements that could be used within the `@method`s, besides previously mentioned.

### `for` statement

Bitcoin Script does not provide looping constructs natively for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside `@method`, you must use the following format:

```ts
for(let $i = 0; $i < $maxLoopCount; $i++) {
  ...
}
```

Note that the initial value `0` and the `<` operator and `++` in the incremental update cannot be changed.

`break` and `continue` are currently not allowed.

* `$maxLoopCount` must be a [CTC](#compile-time-constant).

* `$i` can be whatever you name the induction/iteration variable.

Notice that `break` and `continue` expression can not be used in the `for` statement in `@method`s right now.
### `return` statement

Due to the lack of native return semantics support in Bitcoin Script, a function currently must end with a `return` statement and it is the only valid place for a `return` statement. This requirement may be relaxed in the future. 

```ts
@method m(x: bigint): bigint {
   if (x > 2n) return x; // invalid
   return x + 1n;  // valid
}
```

This is usually not a problem since it can be circumvented as follows:
```ts
@method
abs(a: bigint): bigint {
    if (a > 0) {
        return a;
    } else {
        return -a;
    }
}
```
can be rewritten as
```ts
@method
abs(a: bigint): bigint {
    let ret : bigint = 0;

    if (a > 0) {
        ret = a;
    } else {
        ret = -a;
    }
    return ret;
}
```

## Functions

### Built-in Functions
#### `assert`

The most commonly used built-in function is `assert(cond: boolean)`. It throws an  error if `cond` is false. A contract call is successful if and only if all arugments passed to the `assert` functions are true.

### Whitelisted Functions
Be default, all Javascript/Typescript built-in functions/global variables are not allowed in `@method`s, except the following kinds.

#### `console.log`

`console.log` can be used for debugging purposes.
```ts
@method
add(x0: bigint, x1:bigint) : bigint {
  console.log(x0);
  return x0 + x1;
}
```
