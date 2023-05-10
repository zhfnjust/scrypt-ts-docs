"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3217],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={sidebar_position:2},a="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Prerequisite",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/overview"},next:{title:"Bitcoin Basics",permalink:"/docs/bitcoin-basics/"}},p={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"The sCrypt CLI Tool",id:"the-scrypt-cli-tool",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"Node.js")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NPM")," on your machine by following the instructions over ",(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"here"),".")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Require ",(0,o.kt)("inlineCode",{parentName:"p"},"Node.js")," version ",(0,o.kt)("inlineCode",{parentName:"p"},">=16"),".")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git"),".")),(0,o.kt)("h2",{id:"the-scrypt-cli-tool"},"The sCrypt CLI Tool"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-cli"},"sCrypt CLI tool")," is used to easily create, compile and publish ",(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt")," projects. The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework (",(0,o.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha"),"), code auto-formatting (",(0,o.kt)("a",{parentName:"p",href:"https://prettier.io"},"Prettier"),"), linting (",(0,o.kt)("a",{parentName:"p",href:"https://eslint.org"},"ES Lint"),"), & more."),(0,o.kt)("p",null,"Install it and try it out by creating a demo project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g scrypt-cli\nscrypt project demo\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You can also simply fork ",(0,o.kt)("a",{parentName:"p",href:"https://replit.com/@msinkec/scryptTS-demo"},"the demo contract Repl")," and play with the code in your browser.")))}u.isMDXComponent=!0}}]);