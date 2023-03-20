"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[6938],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,k=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},l=void 0,o={unversionedId:"reference/interfaces/MethodCallOptions",id:"reference/interfaces/MethodCallOptions",title:"MethodCallOptions",description:"scrypt-ts / MethodCallOptions",source:"@site/docs/reference/interfaces/MethodCallOptions.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/MethodCallOptions",permalink:"/docs/reference/interfaces/MethodCallOptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ContractTransaction",permalink:"/docs/reference/interfaces/ContractTransaction"},next:{title:"MethodCallTxBuilder",permalink:"/docs/reference/interfaces/MethodCallTxBuilder"}},p={},c=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"changeAddress",id:"changeaddress",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"fromUTXO",id:"fromutxo",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"lockTime",id:"locktime",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"multiContractCall",id:"multicontractcall",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"next",id:"next",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"partialContractTransaction",id:"partialcontracttransaction",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"pubKeyOrAddrToSign",id:"pubkeyoraddrtosign",level:3},{value:"Defined in",id:"defined-in-6",level:4},{value:"sequence",id:"sequence",level:3},{value:"Defined in",id:"defined-in-7",level:4},{value:"verify",id:"verify",level:3},{value:"Defined in",id:"defined-in-8",level:4}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / MethodCallOptions"),(0,r.kt)("h1",{id:"interface-methodcalloptionst"},"Interface: MethodCallOptions<T",">"),(0,r.kt)("p",null,"A option type to call a contract public ",(0,r.kt)("inlineCode",{parentName:"p"},"@method")," function.\nUsed to specify the behavior of signers and transaction builders.\nFor example, specifying a transaction builder to use a specific change address or specifying a signer to use a specific public key to sign."),(0,r.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"T"))))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#changeaddress"},"changeAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#fromutxo"},"fromUTXO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#locktime"},"lockTime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#multicontractcall"},"multiContractCall")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#next"},"next")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#partialcontracttransaction"},"partialContractTransaction")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#pubkeyoraddrtosign"},"pubKeyOrAddrToSign")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#sequence"},"sequence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/MethodCallOptions#verify"},"verify"))),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"changeaddress"},"changeAddress"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"changeAddress"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address"))),(0,r.kt)("p",null,"The P2PKH change output address"),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:36"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromutxo"},"fromUTXO"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"fromUTXO"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/interfaces/bsv.Transaction.IUnspentOutput"},(0,r.kt)("inlineCode",{parentName:"a"},"IUnspentOutput"))),(0,r.kt)("p",null,"The previous contract UTXO to spend in the method calling tx"),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:34"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"locktime"},"lockTime"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"lockTime"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lockTime")," of the method calling tx"),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:30"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"multicontractcall"},"multiContractCall"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"multiContractCall"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"Whether to call multiple contracts at the same time in one transaction"),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:40"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"next"},"next"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"next"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/interfaces/StatefulNext"},(0,r.kt)("inlineCode",{parentName:"a"},"StatefulNext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">"," ","|"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/interfaces/StatefulNext"},(0,r.kt)("inlineCode",{parentName:"a"},"StatefulNext")),"<",(0,r.kt)("inlineCode",{parentName:"p"},"T"),">","[]"),(0,r.kt)("p",null,"The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract"),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:28"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"partialcontracttransaction"},"partialContractTransaction"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"partialContractTransaction"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/interfaces/ContractTransaction"},(0,r.kt)("inlineCode",{parentName:"a"},"ContractTransaction"))),(0,r.kt)("p",null,"Pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractTransaction")," of the previous call as an argument to the next call, only used if ",(0,r.kt)("inlineCode",{parentName:"p"},"multiContractCall = true"),"."),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:42"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"pubkeyoraddrtosign"},"pubKeyOrAddrToSign"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"pubKeyOrAddrToSign"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#publickeysoraddressesoption"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKeysOrAddressesOption"))),(0,r.kt)("p",null,"The private key(s) associated with these address(es) or public key(s)\nmust be used to sign the contract input,\nand the callback function will receive the results of the signatures as an argument named ",(0,r.kt)("inlineCode",{parentName:"p"},"sigResponses")),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:26"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sequence"},"sequence"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"sequence"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"number")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"sequence")," of the input spending previous contract UTXO in the method calling tx"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:32"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"verify"},"verify"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"verify"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean")),(0,r.kt)("p",null,"verify the input script before send transaction"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/types/contract-call.d.ts:38"))}s.isMDXComponent=!0}}]);