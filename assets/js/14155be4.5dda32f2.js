"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[1217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),f=i,g=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(g,s(s({ref:t},l),{},{components:n})):r.createElement(g,s({ref:t},l))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},s=void 0,o={unversionedId:"reference/interfaces/SignTransactionOptions",id:"reference/interfaces/SignTransactionOptions",title:"SignTransactionOptions",description:"scrypt-ts / SignTransactionOptions",source:"@site/docs/reference/interfaces/SignTransactionOptions.md",sourceDirName:"reference/interfaces",slug:"/reference/interfaces/SignTransactionOptions",permalink:"/docs/reference/interfaces/SignTransactionOptions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MultiContractTransaction",permalink:"/docs/reference/interfaces/MultiContractTransaction"},next:{title:"SignatureRequest",permalink:"/docs/reference/interfaces/SignatureRequest"}},c={},p=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"address",id:"address",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"sigRequests",id:"sigrequests",level:3},{value:"Defined in",id:"defined-in-1",level:4}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/reference/"},"scrypt-ts")," / SignTransactionOptions"),(0,i.kt)("h1",{id:"interface-signtransactionoptions"},"Interface: SignTransactionOptions"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SignTransactionOptions")," is the options can be provided when signing a transaction."),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/SignTransactionOptions#address"},"address")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/reference/interfaces/SignTransactionOptions#sigrequests"},"sigRequests"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"address"},"address"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"address"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/#addressesoption"},(0,i.kt)("inlineCode",{parentName:"a"},"AddressesOption"))),(0,i.kt)("p",null,"The address(es) whose corresponding private key(s) should be used to sign the tx."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:41"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sigrequests"},"sigRequests"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,i.kt)("strong",{parentName:"p"},"sigRequests"),": ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/interfaces/SignatureRequest"},(0,i.kt)("inlineCode",{parentName:"a"},"SignatureRequest")),"[]"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SignatureRequest")," for the some inputs of the transaction."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"dist/bsv/abstract-signer.d.ts:39"))}d.isMDXComponent=!0}}]);