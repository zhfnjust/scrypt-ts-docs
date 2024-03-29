"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[1013],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),c=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=c(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:e},p),{},{components:n})):a.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2989:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:5},o="Tutorial 5: Ordinals Oracle",l={unversionedId:"tokens/tutorials/ordi-oracle",id:"tokens/tutorials/ordi-oracle",title:"Tutorial 5: Ordinals Oracle",description:"Overview",source:"@site/docs/tokens/tutorials/ordi-oracle.md",sourceDirName:"tokens/tutorials",slug:"/tokens/tutorials/ordi-oracle",permalink:"/tokens/tutorials/ordi-oracle",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Tutorial 4: Ordinal Lock",permalink:"/tokens/tutorials/ordinal-lock"},next:{title:"Tutorials",permalink:"/category/tutorials-1"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"WitnessOnChain API",id:"witnessonchain-api",level:2},{value:"Use in a Contract",id:"use-in-a-contract",level:2},{value:"Methods",id:"methods",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c};function u(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-5-ordinals-oracle"},"Tutorial 5: Ordinals Oracle"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Bitcoin smart contracts can decide whether satoshis in a UTXO are valid, but cannot directly determine whether the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.1satordinals.com/"},"1SatOrdinals")," tokens in a UTXO are valid. By inspecting a UTXO, a contract can know how many satoshis in it since they are validated by miners on chain. However, the contract cannot be sure how many Ordinals tokens are in it or if it contains a said NFT, since they are validated by an external indexer off chain outside of miners. In many practical applications, verifying the Ordinals tokens carried in certain transaction inputs is necessary, such as token swap and token sale. ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/oracle"},"Oracles")," must be introduced to provide additional verification for the authenticity and integrity of the Ordinals tokens required when calling a contract."),(0,r.kt)("p",null,"This tutorial will introduce how to use the ",(0,r.kt)("a",{parentName:"p",href:"https://api.witnessonchain.com"},"WitnessOnChain")," oracle to validate transaction inputs referencing UTXOs containing Ordinals NFTs and BSV20 tokens."),(0,r.kt)("h2",{id:"witnessonchain-api"},"WitnessOnChain API"),(0,r.kt)("p",null,"WitnessOnChain provides an ",(0,r.kt)("a",{parentName:"p",href:"https://api.witnessonchain.com/#/v1/V1Controller_getInscription"},"API")," to get inscription details from an outpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://api.witnessonchain.com/v1/inscription/bsv/{network}/outpoint/{txid}/{vout}\n")),(0,r.kt)("p",null,"The structure of the signed message in response is as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Bytes"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"marker"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"api marker, always be 4n")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"timestamp, little-endian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"network"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"network type, 1n for mainnet, 0n for testnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"outpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"txid + output index, both in little-endian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fungible"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"token type, 1n for BSV20, 0n for NFT")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"amt"),(0,r.kt)("td",{parentName:"tr",align:null},"bigint"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"token amount, little endian")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"ByteString"),(0,r.kt)("td",{parentName:"tr",align:null},">=66"),(0,r.kt)("td",{parentName:"tr",align:null},"inscription id")))),(0,r.kt)("p",null,"According to this, we can define a customized type ",(0,r.kt)("inlineCode",{parentName:"p"},"Msg")," and a helper parser function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Msg = {\n    marker: bigint // 1 byte, api marker\n    timestamp: bigint // 4 bytes LE\n    network: bigint // 1 byte, 1 for mainnet, 0 for testnet\n    outpoint: ByteString // 36 bytes, txid 32 bytes LE + vout 4 bytes LE\n    fungible: bigint // 1 byte, token type, 1 for BSV20, 0 for NFT\n    amt: bigint // 8 bytes LE\n    id: ByteString\n}\n\n@method()\nstatic parseMsg(msg: ByteString): Msg {\n    return {\n        marker: Utils.fromLEUnsigned(slice(msg, 0n, 1n)),\n        timestamp: Utils.fromLEUnsigned(slice(msg, 1n, 5n)),\n        network: Utils.fromLEUnsigned(slice(msg, 5n, 6n)),\n        outpoint: slice(msg, 6n, 42n),\n        fungible: Utils.fromLEUnsigned(slice(msg, 42n, 43n)),\n        amt: Utils.fromLEUnsigned(slice(msg, 43n, 51n)),\n        id: slice(msg, 51n),\n    }\n}\n")),(0,r.kt)("h2",{id:"use-in-a-contract"},"Use in a Contract"),(0,r.kt)("p",null,"In this example, we implement a demo contract, which can only be successfully called when the second input (that is input #1) of the spending transaction contains a specific amount of a certain BSV20 token."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6356).Z,width:"1430",height:"842"})),(0,r.kt)("p",null,"To verify the oracle signed message, we should add oracle's public key to the contract. To record the specific BSV20 token and amount, we also need to add another two properties to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export class OracleDemoBsv20 extends OrdinalNFT {\n    @prop()\n    oraclePubKey: RabinPubKey\n\n    @prop()\n    inscriptionId: ByteString\n    @prop()\n    amt: bigint\n    \n    ...\n}\n")),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("p",null,"The public method ",(0,r.kt)("inlineCode",{parentName:"p"},"unlock")," requires three parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"msg"),", oracle's signed message,"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sig"),", oracle's signature"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tokenInputIndex"),", to mark which input is the token input")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@method()\npublic unlock(msg: ByteString, sig: RabinSig, tokenInputIndex: bigint) {\n    // retrieve token outpoint from prevouts\n    const outpoint = slice(this.prevouts, tokenInputIndex * 36n, (tokenInputIndex + 1n) * 36n)\n    // verify oracle signature\n    assert(\n        WitnessOnChainVerifier.verifySig(msg, sig, this.oraclePubKey),\n        'Oracle sig verify failed.'\n    )\n    // decode oracle data\n    const message = OracleDemoBsv20.parseMsg(msg)\n    // validate data\n    assert(message.marker == 4n, 'incorrect oracle message type')\n    assert(message.network == 0n, 'incorrect network')\n    assert(message.outpoint == outpoint, 'incorrect token outpoint')\n    assert(message.fungible == 1n, 'incorrect token type')\n    assert(message.amt >= this.amt, 'incorrect token amount')\n    assert(message.id == this.inscriptionId, 'incorrect inscription id')\n\n    // do other validations ...\n}\n")),(0,r.kt)("p",null,"We first retrieve the token outpoint from ",(0,r.kt)("inlineCode",{parentName:"p"},"this.prevouts"),". We parse the message signed by the oracle and verify it against the outpoint. Now we can use the token information confidently in the remaining contract code, like amount and id."),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Congratulations! You have successfully completed a tutorial about how to validate 1SatOrdinals inputs with Oracle."),(0,r.kt)("p",null,"The full example ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/oracleDemoBsv20.ts"},"contract")," and its corresponding ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/tests/oracleDemoBsv20.test.ts"},"test")," can be found in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate"},"boilerplate repo"),"."))}u.isMDXComponent=!0},6356:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/oracle-demo-bsv20-unlocking-tx-2889bb28aaf23f8580189a75d3aa0c65.png"}}]);