"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[8203],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=d(a),u=r,h=k["".concat(s,".").concat(u)]||k[u]||o[u]||i;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>o,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const i={},l=void 0,p={unversionedId:"reference/classes/SigHash",id:"reference/classes/SigHash",title:"SigHash",description:"scrypt-ts / SigHash",source:"@site/docs/reference/classes/SigHash.md",sourceDirName:"reference/classes",slug:"/reference/classes/SigHash",permalink:"/docs/reference/classes/SigHash",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SensiletSigner",permalink:"/docs/reference/classes/SensiletSigner"},next:{title:"Signer",permalink:"/docs/reference/classes/Signer"}},s={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Properties",id:"properties-1",level:2},{value:"ALL",id:"all",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"ANYONECANPAY_ALL",id:"anyonecanpay_all",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"ANYONECANPAY_NONE",id:"anyonecanpay_none",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"ANYONECANPAY_SINGLE",id:"anyonecanpay_single",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"NONE",id:"none",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"SINGLE",id:"single",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"Methods",id:"methods-1",level:2},{value:"hashOutputs",id:"hashoutputs",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"hashPrevouts",id:"hashprevouts",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"hashSequence",id:"hashsequence",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"nLocktime",id:"nlocktime",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"nLocktimeRaw",id:"nlocktimeraw",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"nSequence",id:"nsequence",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"nSequenceRaw",id:"nsequenceraw",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"nVersion",id:"nversion",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"outpoint",id:"outpoint",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"scriptCode",id:"scriptcode",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"sigHashType",id:"sighashtype",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"value",id:"value",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"valueRaw",id:"valueraw",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-18",level:4}],m={toc:d};function o(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / SigHash"),(0,r.kt)("h1",{id:"class-sighash"},"Class: SigHash"),(0,r.kt)("p",null,"A library to access various fields in the ","[preimage][https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md]","(",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md"},"https://github.com/bitcoin-sv/bitcoin-sv/blob/master/doc/abc/replay-protected-sighash.md"),").\nFor example, we usually use ",(0,r.kt)("inlineCode",{parentName:"p"},"SigHash.scriptCode(preimage: SigHashPreimage)")," to access the scriptCode of the preimage,\nand use ",(0,r.kt)("inlineCode",{parentName:"p"},"SigHash.value(preimage: SigHashPreimage)")," to access the value field of the preimage, which is the value of the number of bitcoins spent in this contract."),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"constructors"},"Constructors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#constructor"},"constructor"))),(0,r.kt)("h3",{id:"properties"},"Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#all"},"ALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#anyonecanpay_all"},"ANYONECANPAY","_","ALL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#anyonecanpay_none"},"ANYONECANPAY","_","NONE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#anyonecanpay_single"},"ANYONECANPAY","_","SINGLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#none"},"NONE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#single"},"SINGLE"))),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#hashoutputs"},"hashOutputs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#hashprevouts"},"hashPrevouts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#hashsequence"},"hashSequence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#nlocktime"},"nLocktime")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#nlocktimeraw"},"nLocktimeRaw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#nsequence"},"nSequence")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#nsequenceraw"},"nSequenceRaw")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#nversion"},"nVersion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#outpoint"},"outpoint")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#scriptcode"},"scriptCode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#sighashtype"},"sigHashType")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#value"},"value")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/SigHash#valueraw"},"valueRaw"))),(0,r.kt)("h2",{id:"constructors-1"},"Constructors"),(0,r.kt)("h3",{id:"constructor"},"constructor"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("strong",{parentName:"p"},"new SigHash"),"()"),(0,r.kt)("h2",{id:"properties-1"},"Properties"),(0,r.kt)("h3",{id:"all"},"ALL"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ALL"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:961"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"anyonecanpay_all"},"ANYONECANPAY","_","ALL"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ANYONECANPAY","_","ALL"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:964"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"anyonecanpay_none"},"ANYONECANPAY","_","NONE"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ANYONECANPAY","_","NONE"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:965"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"anyonecanpay_single"},"ANYONECANPAY","_","SINGLE"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"ANYONECANPAY","_","SINGLE"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:966"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"none"},"NONE"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"NONE"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:962"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"single"},"SINGLE"),(0,r.kt)("p",null,"\u25aa ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,r.kt)("strong",{parentName:"p"},"SINGLE"),": ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:963"),(0,r.kt)("h2",{id:"methods-1"},"Methods"),(0,r.kt)("h3",{id:"hashoutputs"},"hashOutputs"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"hashOutputs"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get hashOutputs of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return hashOutputs ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 32-byte hash"),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1026"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hashprevouts"},"hashPrevouts"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"hashPrevouts"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get hashPrevouts of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return hashPrevouts ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 32-byte little endian"),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:978"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"hashsequence"},"hashSequence"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"hashSequence"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get hashSequence of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return hashSequence ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 32-byte little endian"),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:984"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nlocktime"},"nLocktime"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"nLocktime"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"get nLocktime of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"return nLocktime"),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1038"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nlocktimeraw"},"nLocktimeRaw"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"nLocktimeRaw"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get nLocktime of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return nLocktime ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 4-byte little endian"),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1032"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nsequence"},"nSequence"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"nSequence"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"nSequence of the input from the preimage"),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"return nSequence"),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1020"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nsequenceraw"},"nSequenceRaw"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"nSequenceRaw"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"nSequence of the input from the preimage"),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return nSequence ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 4-byte little endian"),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1014"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"nversion"},"nVersion"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"nVersion"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get version of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return version ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 4-byte little endian"),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:972"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"outpoint"},"outpoint"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"outpoint"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get outpoint of the transaction from the preimage"),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return outpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 32-byte hash + 4-byte little endian"),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:990"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"scriptcode"},"scriptCode"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"scriptCode"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get scriptCode of the transaction from the preimage. scriptCode is just scriptPubKey if there is no CODESEPARATOR in the latter"),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return scriptCode ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:996"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"sighashtype"},"sigHashType"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"sigHashType"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("p",null,"sighash type of the signature from the preimage"),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#sighashtype"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashType"))),(0,r.kt)("p",null,"return sighash type"),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1044"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"value"},"value"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"value"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"get value of the output spent by this input from the preimage"),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"bigint")),(0,r.kt)("p",null,"return value"),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1008"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"valueraw"},"valueRaw"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,r.kt)("strong",{parentName:"p"},"valueRaw"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"preimage"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"get value of the output spent by this input from the preimage"),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"preimage")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/#sighashpreimage"},(0,r.kt)("inlineCode",{parentName:"a"},"SigHashPreimage"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"the preimage")))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/#bytestring"},(0,r.kt)("inlineCode",{parentName:"a"},"ByteString"))),(0,r.kt)("p",null,"return value ",(0,r.kt)("inlineCode",{parentName:"p"},"ByteString")," in 8-byte little endian"),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,"dist/smart-contract/builtins/functions.d.ts:1002"))}o.isMDXComponent=!0}}]);