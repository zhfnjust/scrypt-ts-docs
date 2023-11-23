"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3690],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:11},o="How to Build an Oracle Service",s={unversionedId:"advanced/how-to-build-an-oracle-service",id:"advanced/how-to-build-an-oracle-service",title:"How to Build an Oracle Service",description:"As described in this tutorial, a blockchain oracle is a third-party service or agent that provides external data to a blockchain network. It is a bridge between the blockchain and the external world, enabling smart contracts to access, verify, and incorporate data from outside the blockchain. Specifically, the oracle service provides external data along with a Rabin signature of the data, and the smart contract uses this data and verifies the signature before using it.",source:"@site/docs/advanced/how-to-build-an-oracle-service.md",sourceDirName:"advanced",slug:"/advanced/how-to-build-an-oracle-service",permalink:"/advanced/how-to-build-an-oracle-service",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"How to Replay a Contract Instance to the Latest State",permalink:"/advanced/how-to-replay-instance"},next:{title:"The Official sCrypt 1Sat Ordinals SDK",permalink:"/tokens/"}},c={},l=[{value:"Rabin signature",id:"rabin-signature",level:2},{value:"1. Scaffold the project",id:"1-scaffold-the-project",level:2},{value:"2. Generate signatures",id:"2-generate-signatures",level:2},{value:"3. Add APIs",id:"3-add-apis",level:2},{value:"Add a timestamp API",id:"add-a-timestamp-api",level:3},{value:"API Marker",id:"api-marker",level:4},{value:"Add a coin price API",id:"add-a-coin-price-api",level:3},{value:"Add more APIs",id:"add-more-apis",level:3},{value:"4. Use oralce data in a smart contract",id:"4-use-oralce-data-in-a-smart-contract",level:2}],d={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-build-an-oracle-service"},"How to Build an Oracle Service"),(0,r.kt)("p",null,"As described in ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/oracle"},"this tutorial"),", a blockchain oracle is a third-party service or agent that provides external data to a blockchain network. It is a bridge between the blockchain and the external world, enabling smart contracts to access, verify, and incorporate data from outside the blockchain. Specifically, the oracle service provides external data along with a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rabin_signature_algorithm"},"Rabin signature")," of the data, and the smart contract uses this data and verifies the signature before using it."),(0,r.kt)("h2",{id:"rabin-signature"},"Rabin signature"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Rabin_signature_algorithm"},"Rabin signature")," is an alternative digital signature algorithm (",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Digital_Signature_Algorithm"},"DSA"),") to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm"},"ECDSA")," used in Bitcoin. It has a beautiful ",(0,r.kt)("strong",{parentName:"p"},"asymmetry")," that ",(0,r.kt)("strong",{parentName:"p"},"signature generation is computationally expensive, but signature verification is cheap"),". Therefore, we choose to use Rabin signature to ensure the integrity of the external data provided by the oracle. When an oracle provides data, it will sign the data with its public key off chain. When the data is used by smart contracts, its signature is verified on chain, which is cheap. We do not use the builtin ",(0,r.kt)("inlineCode",{parentName:"p"},"checkSig")," ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/OP_CHECKSIG"},"opcode")," here because it can only check signature against the transaction data, not arbitrary data."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(3958).Z,width:"2161",height:"853"})),(0,r.kt)("p",null,"In this section, we will introduce how to build your own oracle service. For the backend framework, we use ",(0,r.kt)("a",{parentName:"p",href:"https://nestjs.com/"},"NestJS")," to illustrate, but you are free to use any familiar framework to build the service. For the Rabin signature part, we have already implemented a library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/rabin"},(0,r.kt)("inlineCode",{parentName:"a"},"rabinsig")),", which can be imported and used directly."),(0,r.kt)("p",null,"The full complete code of this demo can be found in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/oracle-demo"},"GitHub repo"),"."),(0,r.kt)("h2",{id:"1-scaffold-the-project"},"1. Scaffold the project"),(0,r.kt)("p",null,"Run the following command to create a ",(0,r.kt)("inlineCode",{parentName:"p"},"NestJS")," project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx @nestjs/cli new oracle-demo\n")),(0,r.kt)("p",null,"Then install dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd oracle-demo\nnpm install\nnpm install rabinsig\n")),(0,r.kt)("h2",{id:"2-generate-signatures"},"2. Generate signatures"),(0,r.kt)("p",null,"An oracle may provide multiple pieces of data, each requiring a signature. We implement a common service, so that it can be reused and called in different places."),(0,r.kt)("p",null,"The class ",(0,r.kt)("inlineCode",{parentName:"p"},"SigService")," will load and initialize a private key from ENVs. We add a method ",(0,r.kt)("inlineCode",{parentName:"p"},"sign")," in this class, which takes one parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"dataBuffer")," representing the binary data to be signed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Rabin, serialize } from 'rabinsig';\n\nexport class SigService {\n  private rabin = new Rabin();\n  // load and init Rabin private key from ENVs\n  ...\n  sign(dataBuffer: Buffer) {\n    const dataHex = dataBuffer.toString('hex');\n    const sig = this.rabin.sign(dataHex, this.privKey);\n    return { data: dataHex, signature: serialize(sig) };\n  }\n}\n")),(0,r.kt)("h2",{id:"3-add-apis"},"3. Add APIs"),(0,r.kt)("h3",{id:"add-a-timestamp-api"},"Add a timestamp API"),(0,r.kt)("p",null,"Too see how it works, we implement a simple timestamp API. We first get the current timestamp, then convert it to a 4 bytes ",(0,r.kt)("em",{parentName:"p"},"Buffer")," in little-endian, and sign the structured data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export function getTimestamp() {\n  return Math.trunc(Date.now() / 1000);\n}\n\n@Get('/timestamp')\ngetTimestamp() {\n  const timestamp = getTimestamp();\n  const data = Buffer.concat([\n    toBufferLE(V1Controller.MARKER.TIMESTAMP, 1), // api marker, 1 byte\n    toBufferLE(timestamp, 4), // timestamp, 4 bytes LE\n  ]);\n  const sigResponse = this.rabinService.sign(data);\n  return { timestamp, ...sigResponse };\n}\n")),(0,r.kt)("p",null,"The response of this API is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "timestamp":1700596603,\n  "data":"017b0b5d65",\n  "signature":{\n    "s":"4fe8bbcdf26...",\n    "padding":"0000"\n  }\n}\n')),(0,r.kt)("p",null,"For the smart contract, it is only necessary to focus on two parts: ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),". It should only use and trust ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," when the ",(0,r.kt)("inlineCode",{parentName:"p"},"signature")," verification passes."),(0,r.kt)("h4",{id:"api-marker"},"API Marker"),(0,r.kt)("p",null,"Note that the first byte in ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," is an identification marker, which not only indicates how the signed data is serialized, but also has a more important role in distinguishing data from different interfaces."),(0,r.kt)("p",null,"Without this marker, the smart contract cannot distinguish which interface the passed data actually comes from. When oracle has two interfaces that return signed data of the same length, the attacker can pass the data returned from another interfaces to the contract, potentially causing issues. Therefore, different APIs should use different marker values."),(0,r.kt)("h3",{id:"add-a-coin-price-api"},"Add a coin price API"),(0,r.kt)("p",null,"Here we use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.okx.com/docs-v5/en"},"OKX API")," to obtain a currency's price."),(0,r.kt)("p",null,"First, wrap the OKX API. Note how the method handles the value of price. Because it is inconvenient for the smart contract to handle ",(0,r.kt)("em",{parentName:"p"},"float")," numbers, a variable ",(0,r.kt)("inlineCode",{parentName:"p"},"decimal")," is introduced to convert the price value into an integer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * @param tradingPair e.g. `BSV-USDT`, `BTC-USDC`, etc\n * @param decimal decimal of the returned price\n * @returns an integer representing the price of the trading pair, e.g. return 1234 with decimal 2 means 12.34\n */\nasync getOkxPrice(tradingPair: string, decimal: number) {\n  return axios\n    .get(`https://www.okx.com/api/v5/market/ticker?instId=${tradingPair}`)\n    .then((r) => Math.trunc(r.data.data[0].last * 10 ** decimal));\n}\n")),(0,r.kt)("p",null,"Then implement the oracle API following the order of ",(0,r.kt)("strong",{parentName:"p"},"obtaining data, serializing it, and signing it"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"@Get('price/:base/:query')\nasync getPrice(@Param('base') base: string, @Param('query') query: string) {\n  // obtain data\n  const tradingPair = `${query.toUpperCase()}-${base.toUpperCase()}`;\n  const decimal = 4;\n  const price = await this.v1Service.getOkxPrice(tradingPair, decimal);\n  // serialize data\n  const timestamp = getTimestamp();\n  const data = Buffer.concat([\n    toBufferLE(V1Controller.MARKER.PRICE, 1), // api marker, 1 byte\n    toBufferLE(timestamp, 4), // timestamp, 4 bytes LE\n    toBufferLE(price, 8), // price, 8 bytes LE\n    toBufferLE(decimal, 1), // decimal, 1 byte\n    Buffer.from(tradingPair), // trading pair\n  ]);\n  // sign data\n  const sigResponse = this.rabinService.sign(data);\n  return { timestamp, tradingPair, price, decimal, ...sigResponse };\n}\n")),(0,r.kt)("h3",{id:"add-more-apis"},"Add more APIs"),(0,r.kt)("p",null,"According to the previous introduction, you can add more APIs to your oracle as needed, such as obtaining BSV chain info, etc., which will not be covered here."),(0,r.kt)("h2",{id:"4-use-oralce-data-in-a-smart-contract"},"4. Use oralce data in a smart contract"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/tutorials/oracle"},"this tutorial"),", we introduce how to verify and use oracle data in smart contracts."),(0,r.kt)("p",null,"To verify signatures in smart contracts, we need to install the ",(0,r.kt)("inlineCode",{parentName:"p"},"scrypt-ts-lib")," library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install scrypt-ts-lib\n")),(0,r.kt)("p",null,"Then add the contract under folder ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contracts"),". Here we also use the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/oracle-demo/blob/master/src/contracts/priceBet.ts"},"PriceBet")," contract. You can refer to file ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/oracle-demo/blob/master/src/contracts/priceBet.ts"},"priceBet.e2e-spec.ts")," for a complete test code."))}p.isMDXComponent=!0},3958:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/oracle-102135b9af7fecc9cac5f2c4980c5683.png"}}]);