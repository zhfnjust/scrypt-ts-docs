"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[4141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=a,k=c["".concat(o,".").concat(f)]||c[f]||p[f]||i;return n?r.createElement(k,s(s({ref:t},u),{},{components:n})):r.createElement(k,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={},s=void 0,l={unversionedId:"reference/classes/bsv.Transaction.Signature",id:"reference/classes/bsv.Transaction.Signature",title:"bsv.Transaction.Signature",description:"scrypt-ts / bsv / Transaction / Signature",source:"@site/docs/reference/classes/bsv.Transaction.Signature.md",sourceDirName:"reference/classes",slug:"/reference/classes/bsv.Transaction.Signature",permalink:"/docs/reference/classes/bsv.Transaction.Signature",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Transaction.Output",permalink:"/docs/reference/classes/bsv.Transaction.Output"},next:{title:"bsv.Transaction.UnspentOutput",permalink:"/docs/reference/classes/bsv.Transaction.UnspentOutput"}},o={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"inputIndex",id:"inputindex",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"outputIndex",id:"outputindex",level:3},{value:"Defined in",id:"defined-in-2",level:4},{value:"prevTxId",id:"prevtxid",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"publicKey",id:"publickey",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"signature",id:"signature",level:3},{value:"Defined in",id:"defined-in-5",level:4},{value:"sigtype",id:"sigtype",level:3},{value:"Defined in",id:"defined-in-6",level:4}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv"},"bsv")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Transaction"},"Transaction")," / Signature"),(0,a.kt)("h1",{id:"class-signature"},"Class: Signature"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv"},"bsv"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Transaction"},"Transaction"),".Signature"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"constructors"},"Constructors"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#constructor"},"constructor"))),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#inputindex"},"inputIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#outputindex"},"outputIndex")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#prevtxid"},"prevTxId")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#publickey"},"publicKey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#signature"},"signature")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Transaction.Signature#sigtype"},"sigtype"))),(0,a.kt)("h2",{id:"constructors-1"},"Constructors"),(0,a.kt)("h3",{id:"constructor"},"constructor"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"new Signature"),"(",(0,a.kt)("inlineCode",{parentName:"p"},"arg"),")"),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"arg")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"object")," ","|"," ",(0,a.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.Transaction.Signature"},(0,a.kt)("inlineCode",{parentName:"a"},"Signature")))))),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:399"),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"inputindex"},"inputIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:405"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"outputindex"},"outputIndex"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"outputIndex"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:404"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"prevtxid"},"prevTxId"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"prevTxId"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:403"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"publickey"},"publicKey"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"publicKey"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.PublicKey"},(0,a.kt)("inlineCode",{parentName:"a"},"PublicKey"))),(0,a.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:402"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"signature"},"signature"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"signature"),": ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.crypto.Signature"},(0,a.kt)("inlineCode",{parentName:"a"},"Signature"))),(0,a.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:401"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sigtype"},"sigtype"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sigtype"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:406"))}p.isMDXComponent=!0}}]);