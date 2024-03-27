"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3217],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9250:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"Prerequisite",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/installation",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Bitcoin Basics",permalink:"/bitcoin-basics/"}},p={},s=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"The sCrypt CLI Tool",id:"the-scrypt-cli-tool",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("inlineCode",{parentName:"li"},"Node.js")," (require version ",(0,a.kt)("inlineCode",{parentName:"li"},">=16"),") and ",(0,a.kt)("inlineCode",{parentName:"li"},"NPM")," on your machine by following the instructions over ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download"},"here"),".")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"Git"),".")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"On Mac computers with Apple silicon like M1/M2, make sure ",(0,a.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/102527"},"Rosetta")," is installed. If not, it can be installed with the following command.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"softwareupdate --install-rosetta --agree-to-license\n")),(0,a.kt)("h2",{id:"the-scrypt-cli-tool"},"The sCrypt CLI Tool"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scrypt-cli"},"sCrypt CLI tool")," is used to easily create, compile and publish ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," projects. The CLI provides best practice project scaffolding including dependencies such as sCrypt, a test framework (",(0,a.kt)("a",{parentName:"p",href:"https://mochajs.org"},"Mocha"),"), code auto-formatting (",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io"},"Prettier"),"), linting (",(0,a.kt)("a",{parentName:"p",href:"https://eslint.org"},"ES Lint"),"), & more."),(0,a.kt)("p",null,"We can run the CLI tool directly with ",(0,a.kt)("inlineCode",{parentName:"p"},"npx")," and try it out by creating a demo project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npx scrypt-cli project demo\n")),(0,a.kt)("p",null,"Or you can install it globally to your machine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g scrypt-cli\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can also simply fork ",(0,a.kt)("a",{parentName:"p",href:"https://replit.com/@msinkec/scryptTS-demo"},"the demo contract Repl")," and play with the code in your browser.")))}u.isMDXComponent=!0}}]);