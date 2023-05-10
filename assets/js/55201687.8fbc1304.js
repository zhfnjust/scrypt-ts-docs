"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[5994],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},o=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),f=l(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,p(p({ref:t},o),{},{components:r})):n.createElement(m,p({ref:t},o))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,p=new Array(i);p[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var l=2;l<i;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={},p=void 0,c={unversionedId:"reference/interfaces/bsv.Script.Interpreter.InterpretState",id:"reference/interfaces/bsv.Script.Interpreter.InterpretState",title:"bsv.Script.Interpreter.InterpretState",description:"scrypt-ts / bsv / Script / Interpreter / InterpretState",source:"@site/docs/reference/interfaces/bsv.Script.Interpreter.InterpretState.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/bsv.Script.Interpreter.InterpretState",permalink:"/docs/reference/interfaces/bsv.Script.Interpreter.InterpretState",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Script.IOpChunk",permalink:"/docs/reference/interfaces/bsv.Script.IOpChunk"},next:{title:"bsv.Transaction.IUnspentOutput",permalink:"/docs/reference/interfaces/bsv.Transaction.IUnspentOutput"}},s={},l=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"altstack",id:"altstack",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"mainstack",id:"mainstack",level:3},{value:"Defined in",id:"defined-in-1",level:4},{value:"step",id:"step",level:3},{value:"Defined in",id:"defined-in-2",level:4}],o={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv"},"bsv")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Script"},"Script")," / ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Script.Interpreter"},"Interpreter")," / InterpretState"),(0,a.kt)("h1",{id:"interface-interpretstate"},"Interface: InterpretState"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Script"},"Script"),".",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv.Script.Interpreter"},"Interpreter"),".InterpretState"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/bsv.Script.Interpreter.InterpretState#altstack"},"altstack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/bsv.Script.Interpreter.InterpretState#mainstack"},"mainstack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/bsv.Script.Interpreter.InterpretState#step"},"step"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"altstack"},"altstack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"altstack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:1264"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"mainstack"},"mainstack"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"mainstack"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:1263"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"step"},"step"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"step"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"any")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"node_modules/bsv/index.d.ts:1262"))}d.isMDXComponent=!0}}]);