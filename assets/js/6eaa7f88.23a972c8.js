"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[7154],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},s="How to Replay an Instance to the Latest States",i={unversionedId:"advanced/how-to-replay-instance",id:"advanced/how-to-replay-instance",title:"How to Replay an Instance to the Latest States",description:"Using sCrypt Service and sCrypt client, we can effortlessly create a contract instance reflecting the latest state as follows:",source:"@site/docs/advanced/how-to-replay-instance.md",sourceDirName:"advanced",slug:"/advanced/how-to-replay-instance",permalink:"/advanced/how-to-replay-instance",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Time Lock",permalink:"/advanced/timeLock"},next:{title:"The Official sCrypt 1Sat Ordinals SDK",permalink:"/tokens/"}},c={},l=[{value:"Step 1. Offchain Helper Functions",id:"step-1-offchain-helper-functions",level:2},{value:"Step 2. Create Instance from Deployment Tx",id:"step-2-create-instance-from-deployment-tx",level:2},{value:"Step 3. Replay Instance to Latest States",id:"step-3-replay-instance-to-latest-states",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-replay-an-instance-to-the-latest-states"},"How to Replay an Instance to the Latest States"),(0,r.kt)("p",null,"Using ",(0,r.kt)("a",{parentName:"p",href:"/advanced/how-to-integrate-scrypt-service"},"sCrypt Service")," and ",(0,r.kt)("a",{parentName:"p",href:"/advanced/how-to-integrate-scrypt-service#step-1-initialize-client"},"sCrypt client"),", we can effortlessly create a contract instance reflecting the latest state as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const currentInstance = await Scrypt.contractApi.getLatestInstance(\n    Counter,\n    contractId\n)\n")),(0,r.kt)("p",null,"However, this method is ineffective for smart contracts with states of type ",(0,r.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#hashedmap"},"HashedMap")," or ",(0,r.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#hashedset"},"HashedSet"),". This is because each instance only contains hashed values, not the original ones."),(0,r.kt)("p",null,"In this section, we'll use ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/master/src/contracts/crowdfundReplay.ts"},"contract CrowdfundReplay")," located at ",(0,r.kt)("inlineCode",{parentName:"p"},"src/contracts/crowdfundReplay.ts")," as a reference to explain how to replay these contract instances to their latest states."),(0,r.kt)("p",null,"This crowdfund contract features a HashedMap ",(0,r.kt)("inlineCode",{parentName:"p"},"donators")," that records the donors' public key and their respective donation satoshi amounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type Donators = HashedMap<PubKey, bigint>\n\nexport class CrowdfundReplay extends SmartContract {\n    \n    @prop(true)\n    donators: Donators\n    \n    ...\n}\n")),(0,r.kt)("p",null,"This contract has three public methods:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"donate")," adds an entry to the HashedMap."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"refund")," removes a specific donator from the map."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"collect")," destroys the contract without updating any stateful properties.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export type Donators = HashedMap<PubKey, bigint>\n\nexport class CrowdfundReplay extends SmartContract {\n    ...\n\n    @method()\n    public donate(donator: PubKey, amount: bigint) {\n        ...\n        assert(!this.donators.has(donator), 'donator already exists')\n        this.donators.set(donator, amount)\n        ...\n    }\n\n    @method()\n    public refund(donator: PubKey, amount: bigint, sig: Sig) {\n        ...\n        assert(this.donators.canGet(donator, amount), 'not donated before')\n        assert(this.donators.delete(donator), 'failed to remove donator')\n        ...\n    }\n\n    @method()\n    public collect(sig: Sig) {\n        ...\n    }\n}\n")),(0,r.kt)("p",null,"To replay the contract instance to the latest states, follow these three steps:"),(0,r.kt)("h2",{id:"step-1-offchain-helper-functions"},"Step 1. Offchain Helper Functions"),(0,r.kt)("p",null,"Initially, add helper functions that update stateful properties in a manner ",(0,r.kt)("strong",{parentName:"p"},"identical")," to the public methods."),(0,r.kt)("p",null,"These functions are defined within the ",(0,r.kt)("inlineCode",{parentName:"p"},"offchainUpdates")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class CrowdfundReplay extends SmartContract {\n\n    ...\n\n    offchainUpdates: OffchainUpdates<CrowdfundReplay> = {\n        'donate': (next: CrowdfundReplay, donator: PubKey, amount: bigint) => {\n            next.donators.set(donator, amount)\n        },\n        'refund': (next: CrowdfundReplay, donator: PubKey) => {\n            next.donators.delete(donator)\n        },\n    }\n\n   ...\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The object keys must match the public method names precisely.")),(0,r.kt)("p",null,"In our example, we only need two helper functions since the ",(0,r.kt)("inlineCode",{parentName:"p"},"collect")," method doesn't alter any stateful properties."),(0,r.kt)("h2",{id:"step-2-create-instance-from-deployment-tx"},"Step 2. Create Instance from Deployment Tx"),(0,r.kt)("p",null,"Retrieve the deployment transaction using the contract ID. Subsequently, ",(0,r.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#fromtx"},"recover")," the contract instance from it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// Recover instance from the deployment transaction\nconst tx = await provider.getTx(contractId.txId)\nconst instance = CrowdfundReplay.fromTx(\n    tx,\n    contractId.outputIndex,\n    {\n        donators: new HashedMap<PubKey, bigint>(),\n    }\n)\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": For more details on the workings of the ",(0,r.kt)("inlineCode",{parentName:"p"},"fromTx()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getTransaction()")," functions, refer to the documentation ",(0,r.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#fromtx"},"here"),"."),(0,r.kt)("h2",{id:"step-3-replay-instance-to-latest-states"},"Step 3. Replay Instance to Latest States"),(0,r.kt)("p",null,"Invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"replayToLatest")," function to acquire the latest contract instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { replayToLatest } from 'scrypt-ts'\n\n...\n\nconst latestInstance = await replayToLatest(instance, contractId)\n\nif (latestInstance) {\n    // The latest instance is now ready for use.\n    ...\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),": If the ",(0,r.kt)("inlineCode",{parentName:"p"},"replayToLatest()")," function yields ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", it indicates that there have been no state changes for the contract instance. This scenario arises if the contract hasn't been interacted with since its deployment or if all state modifications have been reverted."),(0,r.kt)("hr",null))}d.isMDXComponent=!0}}]);