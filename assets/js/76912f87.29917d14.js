"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[5041],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=p(n),u=a,y=f["".concat(l,".").concat(u)]||f[u]||d[u]||r;return n?o.createElement(y,c(c({ref:t},s),{},{components:n})):o.createElement(y,c({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3856:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},c="Deploy and Verify Using CLI",i={unversionedId:"how-to-deploy-and-call-a-contract/deploy-verify-cli",id:"how-to-deploy-and-call-a-contract/deploy-verify-cli",title:"Deploy and Verify Using CLI",description:"Deploy",source:"@site/docs/how-to-deploy-and-call-a-contract/deploy-verify-cli.md",sourceDirName:"how-to-deploy-and-call-a-contract",slug:"/how-to-deploy-and-call-a-contract/deploy-verify-cli",permalink:"/docs/how-to-deploy-and-call-a-contract/deploy-verify-cli",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to Customize a Contract Tx",permalink:"/docs/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},next:{title:"How to Debug a Contract",permalink:"/docs/how-to-debug-a-contract"}},l={},p=[{value:"Deploy",id:"deploy",level:2},{value:"Verify",id:"verify",level:2}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-and-verify-using-cli"},"Deploy and Verify Using CLI"),(0,a.kt)("h2",{id:"deploy"},"Deploy"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command allows you to deploy an instance of a smart contract to the blockchain. You can simply run the following command in the root of an ",(0,a.kt)("inlineCode",{parentName:"p"},"sCrypt")," project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt deploy\n")),(0,a.kt)("p",null,"or"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt d\n")),(0,a.kt)("p",null,"By default, the CLI tool will run a script named ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.ts")," located in the root of the project. You can also specify a different deployment script using the ",(0,a.kt)("inlineCode",{parentName:"p"},"--file")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"-f")," option."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt d -f myCustomDeploy.ts\n")),(0,a.kt)("p",null,"If the project was created using sCrypt CLI, it will already have a ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.ts")," file present (except for ",(0,a.kt)("a",{parentName:"p",href:"/docs/how-to-publish-a-contract"},"library")," projects). If not, the ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy")," command will generate a sample ",(0,a.kt)("inlineCode",{parentName:"p"},"deploy.ts")," file."),(0,a.kt)("p",null,"Here's an example of such a deployment file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { Demoproject } from './src/contracts/demoproject'\nimport { bsv, TestWallet, DefaultProvider, sha256, toByteString, } from 'scrypt-ts'\n\nimport * as dotenv from 'dotenv'\n\n// Load the .env file\ndotenv.config()\n\n// Read the private key from the .env file.\n// The default private key inside the .env file is meant to be used for the Bitcoin testnet.\n// See https://scrypt.io/docs/bitcoin-basics/bsv/#private-keys\nconst privateKey = bsv.PrivateKey.fromWIF(process.env.PRIVATE_KEY)\n\n// Prepare signer. \n// See https://scrypt.io/docs/how-to-deploy-and-call-a-contract/#prepare-a-signer-and-provider\nconst signer = new TestWallet(privateKey, new DefaultProvider())\n\nasync function main() {\n    // Compile the smart contract.\n    await Demoproject.compile()\n\n    // The amount of satoshis locked in the smart contract:\n    const amount = 100\n\n    // Instantiate the smart contract and pass constructor parameters.\n    const instance = new Demoproject(\n        sha256(toByteString('hello world', true))\n    )\n\n    // Connect to a signer.\n    await instance.connect(signer)\n\n    // Contract deployment.\n    const deployTx = await instance.deploy(amount)\n    console.log('Demoproject contract deployed: ', deployTx.id)\n}\n\nmain()\n")),(0,a.kt)("p",null,"Upon a successful execution you should see an output like the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Demoproject contract deployed:  15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd\n")),(0,a.kt)("p",null,"You can take a look at the deployed smart contract using the ",(0,a.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/15b8055cfaf9554035f8d3b866f038a04e40b45e28109f1becfe4d0af9f743cd"},"WhatsOnChain block explorer"),".\nIn our example, the first output contains the compiled smart contract code.\nIt is indexed using the hash (double SHA-256) of the script: ",(0,a.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def"},"eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def")),(0,a.kt)("h2",{id:"verify"},"Verify"),(0,a.kt)("p",null,"You can verify the deployed smart contracts script using the ",(0,a.kt)("inlineCode",{parentName:"p"},"verify")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify <scriptHash> <contractPath>\n")),(0,a.kt)("p",null,"The first positional argument is the script hash of the deployed contract and the second one is the path to the file which contains the sCrypt smart contract. Note, that the file must also include all the code it depends on, i.e. third party libraries."),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"network")," option, you can specify on which network the contract is deployed. This defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"test"),", indicating the Bitcoin testnet:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify --network main <scriptHash> <contractPath>\n")),(0,a.kt)("p",null,"You can also specify the version of sCrypt used during verification. By default, the command will use the version specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify -V 0.2.0-beta.9 <scriptHash> <contractPath>\n")),(0,a.kt)("p",null,"Let's verify the contract we have deployed above. Simply run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scrypt verify eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def src/contracts/demoproject.ts\n")),(0,a.kt)("p",null,"Upon execution, the designated contract code undergoes verification on sCrypt's servers. If successful, the outcome will be ",(0,a.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/script/eb2f10b8f1bd12527f07a5d05b40f06137cbebe4e9ecfb6a4e0fd8a3437e1def"},"displayed on WoC"),', under the "sCrypt" tab.'))}d.isMDXComponent=!0}}]);