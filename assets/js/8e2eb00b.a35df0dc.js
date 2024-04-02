"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6297],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),u=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=u(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),h=u(n),d=o,m=h["".concat(c,".").concat(d)]||h[d]||p[d]||r;return n?a.createElement(m,s(s({ref:e},l),{},{components:n})):a.createElement(m,s({ref:e},l))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4343:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:3},s="Stateful Contracts",i={unversionedId:"how-to-write-a-contract/stateful-contract",id:"how-to-write-a-contract/stateful-contract",title:"Stateful Contracts",description:"Overview",source:"@site/docs/how-to-write-a-contract/stateful-contract.md",sourceDirName:"how-to-write-a-contract",slug:"/how-to-write-a-contract/stateful-contract",permalink:"/how-to-write-a-contract/stateful-contract",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"ScriptContext",permalink:"/how-to-write-a-contract/scriptcontext"},next:{title:"Built-in functions",permalink:"/how-to-write-a-contract/built-ins"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Managing state across bitcoin transactions",id:"managing-state-across-bitcoin-transactions",level:3},{value:"Create a Stateful Contract",id:"create-a-stateful-contract",level:2},{value:"Stateful properties",id:"stateful-properties",level:3},{value:"Update states",id:"update-states",level:3},{value:"Stateless vs Stateful Contracts",id:"stateless-vs-stateful-contracts",level:2}],l={toc:u};function p(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stateful-contracts"},"Stateful Contracts"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"In Bitcoin's UTXO model, a smart contract is one-off and ",(0,o.kt)("strong",{parentName:"p"},"stateless")," by default, since the UTXO containing the contract is destroyed after being spent. Being stateless allows it to scale, similar to ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/5836881/stateless-protocol-and-stateful-protocol"},"HTTP")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.geeksforgeeks.org/restful-statelessness/"},"REST APIs"),".\nA smart contract can simulate state by requiring\nthe output of the spending transaction containing the same contract but with the updated state, enabled by ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/scriptcontext"},"ScriptContext"),".\nThis is similar to making HTTP seem stateful by using cookies."),(0,o.kt)("h3",{id:"managing-state-across-bitcoin-transactions"},"Managing state across bitcoin transactions"),(0,o.kt)("p",null,"So far, all the contracts we\u2019ve gone through have been stateless. But often, you may want a contract to have some concept of \u201cmemory\u201d so that it may remember information about its previous interactions. That is, we need contracts that are ",(0,o.kt)("strong",{parentName:"p"},"stateful"),"."),(0,o.kt)("p",null,"To achieve that, we divide a smart contract in the locking script of an output into two parts: 1. code and 2. state, as shown below."),(0,o.kt)("p",null,"The code part contains the business logic of a contract that encodes rules for state transition and ",(0,o.kt)("strong",{parentName:"p"},"must not change"),".\nA state transition occurs when a transaction spends the output containing the old state and creates a new output containing the new state, while keeping the contract code intact.\nSince the new output contains the same contract code, its spending transaction must also retain the same code, otherwise it will fail. This chain of transactions can go on and on and thus a state is maintained along the chain, recursively.\n",(0,o.kt)("img",{src:n(4700).Z,width:"2704",height:"774"})),(0,o.kt)("h2",{id:"create-a-stateful-contract"},"Create a Stateful Contract"),(0,o.kt)("p",null,"We can create a stateful contract using the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project --state counter\n")),(0,o.kt)("p",null,"Note the ",(0,o.kt)("inlineCode",{parentName:"p"},"state")," option is turned on."),(0,o.kt)("p",null,"This creates a project containing a sample stateful contract named ",(0,o.kt)("inlineCode",{parentName:"p"},"Counter"),". This basic contract maintains a single state: how many times it has been called since deployment."),(0,o.kt)("p",null,"Let's take a look at the contract source file ",(0,o.kt)("inlineCode",{parentName:"p"},"/src/contracts/counter.ts"),"."),(0,o.kt)("h3",{id:"stateful-properties"},"Stateful properties"),(0,o.kt)("p",null,"As shown ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/#properties"},"before"),", a ",(0,o.kt)("inlineCode",{parentName:"p"},"@prop(true)")," decorator is used to make a property part of the contract stateful, meaning it can be mutated when the contract gets called."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@prop(true)\ncount: bigint\n")),(0,o.kt)("h3",{id:"update-states"},"Update states"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"incrementOnChain()")," method does two things:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Call ",(0,o.kt)("inlineCode",{parentName:"li"},"increment")," to update the state:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\nincrement(): void {\n    this.count++\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Validate the new state goes into the next UTXO containing the same contract, i.e., the state is maintained.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// make sure balance in the contract does not change\nconst amount: bigint = this.ctx.utxo.value\n// outputs containing the latest state and an optional change output\nconst outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()\n// verify unlocking tx has the same outputs\nassert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')\n")),(0,o.kt)("p",null,"The built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"this.buildStateOutput()")," creates an output containing the latest state. It takes an input: the number of satoshis in the output. We keep the satoshis unchanged in the example. The built-in function ",(0,o.kt)("inlineCode",{parentName:"p"},"this.buildChangeOutput()")," creates a P2PKH change output when necessary. It will calculate the change amount automatically, and use the signer's address by default."),(0,o.kt)("p",null,"If all outputs we create in the contract hashes to ",(0,o.kt)("inlineCode",{parentName:"p"},"hashOutputs")," in ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/scriptcontext"},"ScriptContext"),", we can be sure they are the outputs of the current transaction. Therefore, the updated state is propagated."),(0,o.kt)("p",null,"The complete stateful contract is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class Counter extends SmartContract {\n  // stateful\n  @prop(true)\n  count: bigint\n\n  constructor(count: bigint) {\n    super(...arguments)\n    this.count = count\n  }\n\n  @method()\n  public incrementOnChain() {\n    // Increment counter.\n    this.increment()\n\n    // Ensure next output will contain this contracts code with\n    // the updated count property.\n    // And make sure balance in the contract does not change\n    const amount: bigint = this.ctx.utxo.value\n    // outputs containing the latest state and an optional change output\n    const outputs: ByteString = this.buildStateOutput(amount) + this.buildChangeOutput()\n    // verify unlocking tx has the same outputs\n    assert(this.ctx.hashOutputs == hash256(outputs), 'hashOutputs mismatch')\n  }\n\n  @method()\n  increment(): void {\n    this.count++\n  }\n}\n")),(0,o.kt)("h2",{id:"stateless-vs-stateful-contracts"},"Stateless vs Stateful Contracts"),(0,o.kt)("p",null,"The choice between stateless and stateful smart contracts depends on the needs of your blockchain application."),(0,o.kt)("p",null,"If your app needs to store persistent data on chain, a stateful smart contract is appropriate. For example, with an ",(0,o.kt)("a",{parentName:"p",href:"/tutorials/auction"},"auction app"),", you want to store the highest bidder so far and how much she bids, in case you need to return the fund to her when a higher bid arrives."),(0,o.kt)("p",null,"If your app merely validates spending conditions without retaining data, a stateless smart contract is desirable. An example is a simple transfer using signature and public key in a ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/#method-with-signatures"},"P2PKH contract"),"."))}p.isMDXComponent=!0},4700:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/state-840abd7f63813067e9985495a8b59f65.jpg"}}]);