"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[2969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=i,k=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},o="How to Write a Contract",l={unversionedId:"how-to-write-a-contract/how-to-write-a-contract",id:"how-to-write-a-contract/how-to-write-a-contract",title:"How to Write a Contract",description:"A smart contract is a class that extends the SmartContract base class. A simple example is shown below.",source:"@site/docs/how-to-write-a-contract/how-to-write-a-contract.md",sourceDirName:"how-to-write-a-contract",slug:"/how-to-write-a-contract/",permalink:"/docs/how-to-write-a-contract/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"ScriptContext",permalink:"/docs/how-to-write-a-contract/scriptcontext"}},p={},s=[{value:"Properties",id:"properties",level:2},{value:"<code>@prop(stateful: boolean = false)</code> decorator",id:"propstateful-boolean--false-decorator",level:3},{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"<code>@method</code> decorator",id:"method-decorator",level:3},{value:"Public <code>@method</code>s",id:"public-methods",level:3},{value:"Non-public <code>@method</code>s",id:"non-public-methods",level:3},{value:"Data Types",id:"data-types",level:2},{value:"Basic Types",id:"basic-types",level:3},{value:"boolean",id:"boolean",level:4},{value:"<code>bigint</code>",id:"bigint",level:4},{value:"<code>ByteString</code>",id:"bytestring",level:4},{value:"<code>number</code>",id:"number",level:4},{value:"User-defined Types",id:"user-defined-types",level:3},{value:"Fixed Size Array",id:"fixed-size-array",level:3},{value:"Domain Types",id:"domain-types",level:3},{value:"Statements",id:"statements",level:2},{value:"Variable declarations",id:"variable-declarations",level:3},{value:"<code>for</code>",id:"for",level:3},{value:"<code>return</code>",id:"return",level:3},{value:"Compile-time Constant",id:"compile-time-constant",level:2},{value:"Functions",id:"functions",level:2},{value:"Built-in Functions",id:"built-in-functions",level:3},{value:"Whitelisted Functions",id:"whitelisted-functions",level:3},{value:"<code>console.log</code>",id:"consolelog",level:4},{value:"Operators",id:"operators",level:2},{value:"ScriptContext",id:"scriptcontext",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-write-a-contract"},"How to Write a Contract"),(0,i.kt)("p",null,"A smart contract is a class that extends the ",(0,i.kt)("inlineCode",{parentName:"p"},"SmartContract")," base class. A simple example is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { SmartContract, method, prop, assert } from \"scrypt-ts\"\n\nclass Demo extends SmartContract {\n  @prop()\n  readonly x: bigint\n\n  constructor(x: bigint) {\n    super(...arguments)\n    this.x = x\n  }\n\n  @method()\n  public unlock(x: bigint) {\n    assert(this.add(this.x, 1n) == x, 'incorrect sum')\n  }\n\n  @method()\n  add(x0: bigint, x1:bigint) : bigint {\n    return x0 + x1\n  }\n}\n")),(0,i.kt)("p",null,"Class members decorated with ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," will end up on the blockchain and thus must be a strict subset of TypeScript. Everywhere decorated with them can be regarded in the on-chain context. Members docorated with neither are regular TypeScript and are kept off chain. The significant benefit of ",(0,i.kt)("inlineCode",{parentName:"p"},"sCrypt")," is that both on-chain and off-chain code are written in the same language: TypeScript."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@msinkec/sCrypt"},"the sCrypt template Repl")," and play with the code in your browser!")),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("p",null,"A smart contract can have two kinds of properties:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," decorator: these properties are ",(0,i.kt)("strong",{parentName:"p"},"only allowed to have ",(0,i.kt)("a",{parentName:"strong",href:"#data-types"},"types")," specified below")," and they shall only be initialized in the constructor.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Without ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," decorator: these properties are regular TypeScript properties without any special requirement, meaning they can use any types. Accessing these properties is prohibited in methods decorated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," decorator."))),(0,i.kt)("h3",{id:"propstateful-boolean--false-decorator"},(0,i.kt)("inlineCode",{parentName:"h3"},"@prop(stateful: boolean = false)")," decorator"),(0,i.kt)("p",null,"Use this decorator to mark any property that intends to be stored on chain."),(0,i.kt)("p",null,"This decorator takes a ",(0,i.kt)("inlineCode",{parentName:"p"},"boolean")," parameter. By default, it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", meaning the property cannot be changed after the contract is deployed. If the value is ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", the property is a so-called ",(0,i.kt)("a",{parentName:"p",href:"./stateful-contract"},"stateful")," property and its value can be updated in subsequent contract calls."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// good, `a` is stored on chain, and it's readonly after the contract is deployed\n@prop()\nreadonly a: bigint\n\n// valid, but not good enough, `b` cannot be changed after the contract is deployed\n@prop()\na: bigint\n\n// good, `b` is stored on chain, and its value can be updated in subsequent contract calls\n@prop(true)\nb: bigint\n\n// invalid, `b` is a stateful property that cannot be readonly\n@prop(true)\nreadonly b: bigint\n\n// good\n@prop()\nstatic c: bigint = 1n\n\n// invalid, static property must be initialized when declared\n@prop()\nstatic c: bigint\n\n// invalid, stateful property cannot be static\n@prop(true)\nstatic c: bigint = 1n\n\n// good, `UINT_MAX` is a compile-time constant, and no need to typed explicitly\nstatic readonly UINT_MAX = 0xffffffffn\n\n// valid, but not good enough, `@prop()` is not necessary for the CTC\n@prop()\nstatic readonly UINT_MAX = 0xffffffffn\n\n// invalid\n@prop(true)\nstatic readonly UINT_MAX = 0xffffffffn\n")),(0,i.kt)("h2",{id:"constructor"},"Constructor"),(0,i.kt)("p",null,"A smart contract must have an explicit constructor if it has at least one ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," that is not ",(0,i.kt)("inlineCode",{parentName:"p"},"static"),"."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," method ",(0,i.kt)("strong",{parentName:"p"},"must")," be called in the constructor and all the arguments of the constructor should be passed to ",(0,i.kt)("inlineCode",{parentName:"p"},"super"),"\nin the same order as they are passed into the constructor. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class A extends SmartContract {\n  readonly p0: bigint\n  \n  @prop()\n  readonly p1: bigint\n  \n  @prop()\n  readonly p2: boolean\n  \n  constructor(p0: bigint, p1: bigint, p2: boolean) {\n    super(...arguments)  // same as super(p0, p1, p2)\n    this.p0 = p0\n    this.p1 = p1\n    this.p2 = p2\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments"},(0,i.kt)("inlineCode",{parentName:"a"},"arguments"))," is an array containing the values of the arguments passed to that function. ",(0,i.kt)("inlineCode",{parentName:"p"},"...")," is the ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax"},"spread syntax"),"."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,"Like properties, a smart contract can also have two kinds of methods:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"With ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," decorator: these methods can only call ",(0,i.kt)("strong",{parentName:"p"},"methods also decorated by ",(0,i.kt)("inlineCode",{parentName:"strong"},"@method")," or ",(0,i.kt)("a",{parentName:"strong",href:"#functions"},"functions")," specified below"),". Also, ",(0,i.kt)("strong",{parentName:"p"},"only the properties decorated by ",(0,i.kt)("inlineCode",{parentName:"strong"},"@prop")," can be accessed"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Without ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," decorator: these methods are just  regular TypeScript class methods."))),(0,i.kt)("h3",{id:"method-decorator"},(0,i.kt)("inlineCode",{parentName:"h3"},"@method")," decorator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use this decorator to mark any method that intends to run on chain."),(0,i.kt)("li",{parentName:"ol"},"It takes a ",(0,i.kt)("a",{parentName:"li",href:"/docs/how-to-write-a-contract/scriptcontext#sighash-type"},"sighash flag")," as an parameter.")),(0,i.kt)("h3",{id:"public-methods"},"Public ",(0,i.kt)("inlineCode",{parentName:"h3"},"@method"),"s"),(0,i.kt)("p",null,"Each contract ",(0,i.kt)("strong",{parentName:"p"},"must")," have at least one public ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),". It is denoted with the ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," modifier and does not return any value. It is visible outside the contract and acts as the main method into the contract (like ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," in C and Java)."),(0,i.kt)("p",null,"A public ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," can be called from an external transaction. The call succeeds if it runs to completion without violating any conditions in ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-to-write-a-contract/built-ins#assert"},"assert()"),". An example is shown below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'@method()\npublic unlock(x: bigint) {\n  // only succeeds if x is 1\n  assert(this.add(this.x, 1n) == x, "unequal")\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The last function call of a public ",(0,i.kt)("inlineCode",{parentName:"p"},"@methed")," method ",(0,i.kt)("strong",{parentName:"p"},"must")," be an ",(0,i.kt)("inlineCode",{parentName:"p"},"assert()")," function call, unless it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"console.log()")," call.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class PublicMethodDemo extends SmartContract {\n  @method()\n  public foo() {\n    // invalid, the last statement of public method should be an `assert` function call\n  }\n\n  @method()\n  public bar() {\n    assert(true);\n    return 1n;  // invalid either, that is to say, public method cannot return any value\n  }\n\n  @method()\n  public foobar() {\n      console.log();\n      // valid, `console.log` calling will be ignored when verifying the last `assert` statement\n      assert(true);\n      console.log();\n      console.log();\n  }\n}\n")),(0,i.kt)("h3",{id:"non-public-methods"},"Non-public ",(0,i.kt)("inlineCode",{parentName:"h3"},"@method"),"s"),(0,i.kt)("p",null,"Without a ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," modifier, a ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," is internal and cannot be directly called from an external transaction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nadd(x0: bigint, x1:bigint) : bigint {\n  return x0 + x1\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Recursion is disallowed"),". A ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),", public and not, cannot call itself, either directly in its own body or indirectly calls another method that transitively calls itself.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class MethodsDemo extends SmartContract {\n  @prop()\n  readonly x: bigint;\n  @prop()\n  readonly y: bigint;\n\n  constructor(x: bigint, y: bigint) {\n    super(x, y);\n    this.x = x;\n    this.y = y;\n  }\n    \n  // good, non-public static method without access `@prop` properties\n  @method()\n  static sum(a: bigint, b: bigint): bigint {\n    return a + b;\n  }\n\n  // good, non-public method\n  @method()\n  xyDiff(): bigint {\n    return this.x - this.y\n  }\n    \n  // good, public method\n  @method()\n  public add(z: bigint) {\n    // good, call `sum` with the class name\n    assert(z == MethodsDemo.sum(this.x, this.y), 'add check failed');\n  }\n  \n  // good, another public method\n  @method()\n  public sub(z: bigint) {\n    // good, call `xyDiff` with the class instance\n    assert(z == this.xyDiff(), 'sub check failed');\n  }\n  \n  // valid but bad, public static method\n  @method()\n  public static alwaysPass() {\n    assert(true)\n  }\n}\n")),(0,i.kt)("h2",{id:"data-types"},"Data Types"),(0,i.kt)("p",null,"Types used in ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"@method")," are restricted to these kinds:"),(0,i.kt)("h3",{id:"basic-types"},"Basic Types"),(0,i.kt)("h4",{id:"boolean"},"boolean"),(0,i.kt)("p",null,"A simple value ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let isDone: boolean = false\n")),(0,i.kt)("h4",{id:"bigint"},(0,i.kt)("inlineCode",{parentName:"h4"},"bigint")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"bigint")," can represent arbitrarily large integers. A  ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"},"bigint literal")," is a number with suffix ",(0,i.kt)("inlineCode",{parentName:"p"},"n"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'11n\n0x33FEn\nconst previouslyMaxSafeInteger = 9007199254740991n\nconst alsoHuge = BigInt(9007199254740991)\n// 9007199254740991n\nconst hugeHex: bigint = BigInt("0x1fffffffffffff")\n// 9007199254740991n\n')),(0,i.kt)("h4",{id:"bytestring"},(0,i.kt)("inlineCode",{parentName:"h4"},"ByteString")),(0,i.kt)("p",null,"In a smart contract context (i.e., in ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s or ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop"),"s), a ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," represents a byte array."),(0,i.kt)("p",null,"A literal ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," can be converted in to a ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," using function ",(0,i.kt)("inlineCode",{parentName:"p"},"toByteString(literal: string, isUtf8: boolean = false): ByteString"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If not passing ",(0,i.kt)("inlineCode",{parentName:"li"},"isUtf8")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"isUtf8")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", then ",(0,i.kt)("inlineCode",{parentName:"li"},"literal")," should be in the format of hex literal, which can be represented by the regular expression: ",(0,i.kt)("inlineCode",{parentName:"li"},"/^([0-9a-fA-F]{2})*$/")),(0,i.kt)("li",{parentName:"ul"},"Otherwise, ",(0,i.kt)("inlineCode",{parentName:"li"},"literal")," should be in the format of utf8 literal, i.e. ",(0,i.kt)("inlineCode",{parentName:"li"},"hello world"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When ",(0,i.kt)("inlineCode",{parentName:"p"},"toByteString")," is called, it ",(0,i.kt)("strong",{parentName:"p"},"ONLY")," accepts string literals for its first argument, and boolean literals for its second argument.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"toByteString('hello', 1 === 1) // invalid, not passing boolean literal to the 2nd parameter\n\nlet a = true\ntoByteString('world', a) // invalid, not passing boolean literal to the 2nd parameter\n\nlet b = toByteString('hello world', true) // valid\n\ntoByteString(b, true) // invalid, not passing string literal to the 1st parameter\n\ntoByteString('0011') // valid, `0011` is a valid hex literal\ntoByteString('0011', false) // valid\n\ntoByteString('001') // invalid, `001` is not a valid hex literal\ntoByteString('hello', false) // invalid, `hello` is not a valid hex literal\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," has the following operators and methods:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"==")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"==="),": compare")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"+"),": concatenate")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"ByteString.slice(start: number, end?: number)"),": return a substring from ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," to, but not including, ",(0,i.kt)("inlineCode",{parentName:"p"},"end"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," is not specified, the substring continues to the last byte. Since ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," is a byte array and each byte consists of two hex characters, ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end")," must be even."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const str0 = toByteString('01ab23ef68')\nconst str1 = toByteString('656c6c6f20776f726c64')\n\n// comparison\nstr0 == str1\nstr0 === str1\n// false\n\n// concatenation\nstr0 + str1\n// '01ab23ef68656c6c6f20776f726c64'\n\n// slice\nstr1.slice(2, 6)\n// `6c6c`, not '6c6f2077', since each byte has two hex characters\n")),(0,i.kt)("h4",{id:"number"},(0,i.kt)("inlineCode",{parentName:"h4"},"number")),(0,i.kt)("p",null,"Type ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," is not allowed in ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s, except in the following cases. We can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Number()")," function to convert ",(0,i.kt)("inlineCode",{parentName:"p"},"bigint")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Array index")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let arr: FixedArray<bigint, 3> = [1n, 3n, 3n]\nlet idx: bigint = 2n\nlet item = arr[Number(idx)]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loop variable")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"for (let i: number = 0 i < 10 i++) {\n  let j: bigint = BigInt(i) // convert number to bigint\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Calling ",(0,i.kt)("inlineCode",{parentName:"li"},"slice(start: number, end?: number)")," function on a ",(0,i.kt)("inlineCode",{parentName:"li"},"ByteString"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'let b: ByteString = toByteString("001122")\nlet end: bigint = 4n\nb.slice(0, Number(end))\n// "0011"\n')),(0,i.kt)("p",null,"It can also be used in defining ",(0,i.kt)("a",{parentName:"p",href:"#compile-time-constant"},"compile-time constants"),"."),(0,i.kt)("h3",{id:"user-defined-types"},"User-defined Types"),(0,i.kt)("p",null,"Users can be define customized types using ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"interface"),", made of basic types. For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'type ST = {\n  a: bigint\n  b: boolean\n}\n\ninterface ST1 {\n  x: ST\n  y: ByteString\n}\n\ntype Point = {\n  x: number\n  y: number\n}\n \n// Exactly the same as the earlier example\nfunction printCoord(pt: Point) {\n  console.log("The coordinate\'s x value is " + pt.x)\n  console.log("The coordinate\'s y value is " + pt.y)\n}\n\ninterface Point2 {\n  x: number\n  y: number\n}\n \nfunction printCoord(pt: Point2) {\n  console.log("The coordinate\'s x value is " + pt.x)\n  console.log("The coordinate\'s y value is " + pt.y)\n}\n\n')),(0,i.kt)("h3",{id:"fixed-size-array"},"Fixed Size Array"),(0,i.kt)("p",null,"All arrays ",(0,i.kt)("strong",{parentName:"p"},"must")," be of fixed size and be declared as type of ",(0,i.kt)("inlineCode",{parentName:"p"},"FixedArray<T, SIZE>"),", whose ",(0,i.kt)("inlineCode",{parentName:"p"},"SIZE")," must be a ",(0,i.kt)("a",{parentName:"p",href:"#compile-time-constant"},"CTC")," described later.\nThe common TypeScript arrays declared as ",(0,i.kt)("inlineCode",{parentName:"p"},"T[]")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Array<T>")," are not allowed in ",(0,i.kt)("inlineCode",{parentName:"p"},"@prop"),"s and ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s, as they are of dynamic size."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let aaa: FixedArray<bigint, 3> = [1n, 3n, 3n]\n\nconst N = 2\nlet aab: FixedArray<bigint, N> = [1n, 2n]\n\n// 2-dimensional array\nlet abb: FixedArray<FixedArray<bigint, 2>, 3> = [[1n, 3n], [1n, 3n], [1n, 3n]]\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In sCrypt, all parameters are ",(0,i.kt)("em",{parentName:"p"},"pass by value"),", whereas, in JavaScript objects and arrays are ",(0,i.kt)("em",{parentName:"p"},"pass by reference"),", which means extra care must be taken when updating the values of these variables. For example:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import {assert, method, prop, SmartContract, FixedArray} from "scrypt-ts";\nclass DemoContract extends SmartContract {\n\n    @prop(true)\n    readonly a: FixedArray<bigint, 3>;\n    \n    @prop(true)\n    readonly b: FixedArray<bigint, 3>; \n\n    constructor(a: FixedArray<bigint, 3>, b: FixedArray<bigint, 3>) {\n        super(...arguments);\n        this.a = a;\n        this.b = b;\n    }\n\n    @method()\n    public unlock() {\n        assert(true);\n    }\n}\n\nconst arrayA: FixedArray<bigint, 3> = [1n, 2n, 3n]\nconst arrayB: FixedArray<bigint, 3> = [1n, 2n, 3n]\n// invalid, you cannot pass an array or user-defined type to two different function parameters.\nconst instance = new DemoContract(arrayA, arrayA);\n// valid\nconst instance = new DemoContract(arrayA, arrayB);\n// Attention! `instance.a` has been changed.\narrayA[0] = 0n\n'))),(0,i.kt)("h3",{id:"domain-types"},"Domain Types"),(0,i.kt)("p",null,"There are several domain types, specific to the Bitcoin context, used to further improve type safety. They are all subtypes of ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString"),". That is, they can be used where a ",(0,i.kt)("inlineCode",{parentName:"p"},"ByteString")," is expected, but not vice versa."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PubKey")," - a public key")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Sig")," - a signature type in ",(0,i.kt)("a",{parentName:"p",href:"https://academy.bit2me.com/en/que-son-firmas-estrictas-der"},"DER format"),", including sighash flags at the end")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Ripemd160")," - a RIPEMD-160 hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"PubKeyHash")," - an alias for ",(0,i.kt)("inlineCode",{parentName:"p"},"Ripemd160"),", usually representing a bitcoin address.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Sha1")," - a SHA-1 hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"Sha256")," - a SHA-256 hash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SigHashType")," - a sighash")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"SigHashPreimage")," - a sighash preimage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"OpCodeType")," - a Script ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Opcodes_used_in_Bitcoin_Script"},"opcode")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\npublic unlock(sig: Sig, pubkey: PubKey) {\n    // hash160() takes a ByteString as input, but can accept pubkey here, which if of type PubKey\n    assert(hash160(pubkey) == this.pubKeyHash)\n    assert(this.checkSig(sig, pubkey), 'signature check failed')\n}\n")),(0,i.kt)("h2",{id:"statements"},"Statements"),(0,i.kt)("p",null,"There are some constraints on these following statements within ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s, except ",(0,i.kt)("a",{parentName:"p",href:"#Variable-declarations"},"variable declarations"),"."),(0,i.kt)("h3",{id:"variable-declarations"},"Variable declarations"),(0,i.kt)("p",null,"Variables can be declared in ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s by keywords ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," / ",(0,i.kt)("inlineCode",{parentName:"p"},"let"),", like in normal TypeScript."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'let a : bigint = 1n\nvar b: boolean = false\nconst byte: ByteString = toByteString("ff")\n')),(0,i.kt)("h3",{id:"for"},(0,i.kt)("inlineCode",{parentName:"h3"},"for")),(0,i.kt)("p",null,"Bitcoin does not allow unbounded loops for security reasons, to prevent DoS attacks. All loops must be bounded at compile time. So if you want to loop inside ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),", you must strictly use the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"for(let $i = 0n; $i < $maxLoopCount; $i++) {\n  ...\n}\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"the initial value must be ",(0,i.kt)("inlineCode",{parentName:"li"},"0"),", the operator ",(0,i.kt)("inlineCode",{parentName:"li"},"<")," (no ",(0,i.kt)("inlineCode",{parentName:"li"},"<="),"), and increment ",(0,i.kt)("inlineCode",{parentName:"li"},"$i++")," (no pre-increment ",(0,i.kt)("inlineCode",{parentName:"li"},"++$i"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$maxLoopCount")," must be a ",(0,i.kt)("a",{parentName:"li",href:"#compile-time-constant"},"CTC"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$i")," can be arbitrary name, e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"i"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"j"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"k"),". It can be both a ",(0,i.kt)("inlineCode",{parentName:"li"},"number")," or a ",(0,i.kt)("inlineCode",{parentName:"li"},"bigint")," type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"break")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"continue")," are currently not allowed, but can be emulated like"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// emulate break\nlet done = false;\nfor (let i = 0n; i < 3; i++) {\n    if (!done) {\n        x = x * 2n\n        if (x >= 8n) {\n            done = true\n        }\n    }\n}\n")),(0,i.kt)("h3",{id:"return"},(0,i.kt)("inlineCode",{parentName:"h3"},"return")),(0,i.kt)("p",null,"Due to the lack of native return semantics support in Bitcoin Script, a function currently must end with a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement and it is the only valid place for a ",(0,i.kt)("inlineCode",{parentName:"p"},"return")," statement. This requirement may be relaxed in the future. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method() m(x: bigint): bigint {\n   if (x > 2n) return x  // invalid\n   return x + 1n         // valid\n}\n")),(0,i.kt)("p",null,"This is usually not a problem since it can be circumvented as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nabs(a: bigint): bigint {\n    if (a > 0) {\n        return a\n    } else {\n        return -a\n    }\n}\n")),(0,i.kt)("p",null,"can be rewritten as"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nabs(a: bigint): bigint {\n    let ret : bigint = 0\n\n    if (a > 0) {\n        ret = a\n    } else {\n        ret = -a\n    }\n    return ret\n}\n")),(0,i.kt)("h2",{id:"compile-time-constant"},"Compile-time Constant"),(0,i.kt)("p",null,"A compile-time constant, CTC for short, is a special variable whose value can be determined at compile time. A CTC must be defined in one of the following ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A number literal like:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"const")," variable, whose value must be a numeric literal. Expressions cannot be used for now.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const N1 = 3 // valid\nconst N2: number = 3 // invalid, no explicit type `number` allowed\nconst N3 = 3 + 3 // invalid, no expression allowed\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," ",(0,i.kt)("inlineCode",{parentName:"li"},"readonly")," property:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"class X {\n  static readonly M1 = 3 // valid\n  static readonly M2: number = 3 // invalid\n  static readonly M3 = 3 + 3 // invalid\n}\n")),(0,i.kt)("p",null,"A CTC is required in these cases."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Array size")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let arr1: FixedArray<bigint, 3> = [1n, 2n, 3n]\n// `typeof` is needed since FixedArray takes a type as the array size, not a value\nlet arr1: FixedArray<bigint, typeof N1> = [1n, 2n, 3n]\nlet arr2: FixedArray<bigint, typeof X.M1> = [1n, 2n, 3n]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Loop count in ",(0,i.kt)("inlineCode",{parentName:"li"},"for")," statement")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"for(let i=0; i< 3; i++) {}\nfor(let i=0; i< N1; i++) {}\nfor(let i=0; i< X.M1; i++) {}\n")),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"built-in-functions"},"Built-in Functions"),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-to-write-a-contract/built-ins"},"Built-ins")," for a full list of functions and libraries built into ",(0,i.kt)("inlineCode",{parentName:"p"},"scryptTS"),"."),(0,i.kt)("h3",{id:"whitelisted-functions"},"Whitelisted Functions"),(0,i.kt)("p",null,"Be default, all Javascript/TypeScript built-in functions and global variables are not allowed in ",(0,i.kt)("inlineCode",{parentName:"p"},"@method"),"s, except the following kinds."),(0,i.kt)("h4",{id:"consolelog"},(0,i.kt)("inlineCode",{parentName:"h4"},"console.log")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"console.log")," can be used for debugging purposes."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nadd(x0: bigint, x1:bigint) : bigint {\n  console.log(x0)\n  return x0 + x1\n}\n")),(0,i.kt)("h2",{id:"operators"},"Operators"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"sCrypt")," is a subset of TypeScript. Only the following operators can be used directly."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Operator"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"+")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Addition")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"-")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Subtraction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"*")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Multiplication")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"/")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Division")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"%")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Remainder")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"++")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"--")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Decrement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"==")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"!=")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Not equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"===")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"==")," in ",(0,i.kt)("strong",{parentName:"td"},"sCrypt"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"!==")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Same as ",(0,i.kt)("inlineCode",{parentName:"td"},"!=")," in ",(0,i.kt)("strong",{parentName:"td"},"sCrypt"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},">")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Greater than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},">=")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Greater than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Less than")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"<=")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Less than or equal to")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"&&")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Logical AND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("code",null,"|","|")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Logical OR")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"!")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Logical NOT")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"cond ? expr1 : expr2 ")),(0,i.kt)("td",{parentName:"tr",align:"center"},"ternary")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"**")," is not supported currently.")),(0,i.kt)("h2",{id:"scriptcontext"},"ScriptContext"),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/how-to-write-a-contract/scriptcontext"},"ScriptContext"),"."))}c.isMDXComponent=!0}}]);