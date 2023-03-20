"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[8005],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>o});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),k=s(a),o=r,c=k["".concat(p,".").concat(o)]||k[o]||m[o]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8293:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i=void 0,d={unversionedId:"reference/modules/bsv.Script",id:"reference/modules/bsv.Script",title:"bsv.Script",description:"scrypt-ts / bsv / Script",source:"@site/docs/reference/modules/bsv.Script.md",sourceDirName:"reference/modules",slug:"/reference/modules/bsv.Script",permalink:"/docs/reference/modules/bsv.Script",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bsv.Script.Interpreter",permalink:"/docs/reference/modules/bsv.Script.Interpreter"},next:{title:"bsv.Transaction.Input",permalink:"/docs/reference/modules/bsv.Transaction.Input"}},p={},s=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Namespaces",id:"namespaces",level:3},{value:"Classes",id:"classes",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Variables",id:"variables",level:3},{value:"Functions",id:"functions",level:3},{value:"Variables",id:"variables-1",level:2},{value:"types",id:"types",level:3},{value:"Type declaration",id:"type-declaration",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Functions",id:"functions-1",level:2},{value:"buildMultisigIn",id:"buildmultisigin",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"buildMultisigOut",id:"buildmultisigout",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"buildPublicKeyHashIn",id:"buildpublickeyhashin",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"buildPublicKeyHashOut",id:"buildpublickeyhashout",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"buildPublicKeyIn",id:"buildpublickeyin",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"buildPublicKeyOut",id:"buildpublickeyout",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"buildSafeDataOut",id:"buildsafedataout",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"buildScriptHashOut",id:"buildscripthashout",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"empty",id:"empty",level:3},{value:"Returns",id:"returns-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"fromASM",id:"fromasm",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"fromAddress",id:"fromaddress",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"fromBuffer",id:"frombuffer",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-11",level:4},{value:"Defined in",id:"defined-in-12",level:4},{value:"fromHex",id:"fromhex",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Returns",id:"returns-12",level:4},{value:"Defined in",id:"defined-in-13",level:4},{value:"fromString",id:"fromstring",level:3},{value:"Parameters",id:"parameters-12",level:4},{value:"Returns",id:"returns-13",level:4},{value:"Defined in",id:"defined-in-14",level:4},{value:"toASM",id:"toasm",level:3},{value:"Returns",id:"returns-14",level:4},{value:"Defined in",id:"defined-in-15",level:4},{value:"toBuffer",id:"tobuffer",level:3},{value:"Returns",id:"returns-15",level:4},{value:"Defined in",id:"defined-in-16",level:4},{value:"toHex",id:"tohex",level:3},{value:"Returns",id:"returns-16",level:4},{value:"Defined in",id:"defined-in-17",level:4},{value:"toString",id:"tostring",level:3},{value:"Returns",id:"returns-17",level:4},{value:"Defined in",id:"defined-in-18",level:4}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv"},"bsv")," / Script"),(0,r.kt)("h1",{id:"namespace-script"},"Namespace: Script"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/modules/bsv"},"bsv"),".Script"),(0,r.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,r.kt)("h3",{id:"namespaces"},"Namespaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script.Interpreter"},"Interpreter"))),(0,r.kt)("h3",{id:"classes"},"Classes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/classes/bsv.Script.Interpreter-1"},"Interpreter"))),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/bsv.Script.IOpChunk"},"IOpChunk"))),(0,r.kt)("h3",{id:"variables"},"Variables"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#types"},"types"))),(0,r.kt)("h3",{id:"functions"},"Functions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildmultisigin"},"buildMultisigIn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildmultisigout"},"buildMultisigOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildpublickeyhashin"},"buildPublicKeyHashIn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildpublickeyhashout"},"buildPublicKeyHashOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildpublickeyin"},"buildPublicKeyIn")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildpublickeyout"},"buildPublicKeyOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildsafedataout"},"buildSafeDataOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#buildscripthashout"},"buildScriptHashOut")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#empty"},"empty")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#fromasm"},"fromASM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#fromaddress"},"fromAddress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#frombuffer"},"fromBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#fromhex"},"fromHex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#fromstring"},"fromString")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#toasm"},"toASM")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#tobuffer"},"toBuffer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#tohex"},"toHex")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/reference/modules/bsv.Script#tostring"},"toString"))),(0,r.kt)("h2",{id:"variables-1"},"Variables"),(0,r.kt)("h3",{id:"types"},"types"),(0,r.kt)("p",null,"\u2022 ",(0,r.kt)("inlineCode",{parentName:"p"},"Const")," ",(0,r.kt)("strong",{parentName:"p"},"types"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"Object")),(0,r.kt)("h4",{id:"type-declaration"},"Type declaration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"DATA_OUT")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"defined-in"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:756"),(0,r.kt)("h2",{id:"functions-1"},"Functions"),(0,r.kt)("h3",{id:"buildmultisigin"},"buildMultisigIn"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildMultisigIn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pubkeys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"signatures"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pubkeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"threshold")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signatures")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"returns"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:771"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildmultisigout"},"buildMultisigOut"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildMultisigOut"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"publicKeys"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opts"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-1"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKeys")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")),"[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"threshold")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"opts")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object"))))),(0,r.kt)("h4",{id:"returns-1"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:766"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildpublickeyhashin"},"buildPublicKeyHashIn"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildPublicKeyHashIn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"publicKey"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sigtype"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-2"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.crypto.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sigtype")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-2"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:791"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildpublickeyhashout"},"buildPublicKeyHashOut"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildPublicKeyHashOut"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-3"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey"))," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.Address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address")))))),(0,r.kt)("h4",{id:"returns-3"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:778"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildpublickeyin"},"buildPublicKeyIn"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildPublicKeyIn"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"signature"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"sigtype"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-4"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"signature")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.crypto.Signature"},(0,r.kt)("inlineCode",{parentName:"a"},"Signature")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"sigtype")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"number"))))),(0,r.kt)("h4",{id:"returns-4"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:787"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildpublickeyout"},"buildPublicKeyOut"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildPublicKeyOut"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"pubkey"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-5"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"pubkey")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.PublicKey"},(0,r.kt)("inlineCode",{parentName:"a"},"PublicKey")))))),(0,r.kt)("h4",{id:"returns-5"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:781"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildsafedataout"},"buildSafeDataOut"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildSafeDataOut"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"data"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"encoding?"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-6"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer")," ","|"," (",(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"),")[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"encoding?")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-6"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:782"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"buildscripthashout"},"buildScriptHashOut"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"buildScriptHashOut"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"script"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-7"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"script")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script")))))),(0,r.kt)("h4",{id:"returns-7"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:786"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"empty"},"empty"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"empty"),"(): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"returns-8"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:808"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromasm"},"fromASM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromASM"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-8"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-9"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:798"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromaddress"},"fromAddress"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromAddress"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"address"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-9"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"address")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,r.kt)("a",{parentName:"td",href:"/docs/reference/classes/bsv.Address"},(0,r.kt)("inlineCode",{parentName:"a"},"Address")))))),(0,r.kt)("h4",{id:"returns-10"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-11"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:797"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"frombuffer"},"fromBuffer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromBuffer"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"buf"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-10"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"buf")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Buffer"))))),(0,r.kt)("h4",{id:"returns-11"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-12"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:801"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromhex"},"fromHex"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromHex"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-11"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"hex")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-12"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-13"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:799"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"fromstring"},"fromString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"fromString"),"(",(0,r.kt)("inlineCode",{parentName:"p"},"str"),"): ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"parameters-12"},"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"str")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string"))))),(0,r.kt)("h4",{id:"returns-13"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/reference/classes/bsv.Script-1"},(0,r.kt)("inlineCode",{parentName:"a"},"Script"))),(0,r.kt)("h4",{id:"defined-in-14"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:800"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"toasm"},"toASM"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toASM"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-14"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-15"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:803"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tobuffer"},"toBuffer"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toBuffer"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"returns-15"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Buffer")),(0,r.kt)("h4",{id:"defined-in-16"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:804"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tohex"},"toHex"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toHex"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-16"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-17"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:805"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"tostring"},"toString"),(0,r.kt)("p",null,"\u25b8 ",(0,r.kt)("strong",{parentName:"p"},"toString"),"(): ",(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"returns-17"},"Returns"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"string")),(0,r.kt)("h4",{id:"defined-in-18"},"Defined in"),(0,r.kt)("p",null,"node_modules/bsv/index.d.ts:806"))}m.isMDXComponent=!0}}]);