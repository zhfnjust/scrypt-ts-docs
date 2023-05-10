"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[9615],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),s=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:e},u),{},{components:n})):a.createElement(h,i({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8589:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2},i="How to Customize a Contract Tx",l={unversionedId:"how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx",id:"how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx",title:"How to Customize a Contract Tx",description:"Deployment Tx",source:"@site/docs/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx.md",sourceDirName:"how-to-deploy-and-call-a-contract",slug:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx",permalink:"/docs/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"How to Deploy & Call a Contract",permalink:"/docs/how-to-deploy-and-call-a-contract/"},next:{title:"Deploy Using CLI",permalink:"/docs/how-to-deploy-and-call-a-contract/deploy-cli"}},c={},s=[{value:"Deployment Tx",id:"deployment-tx",level:2},{value:"Default",id:"default",level:3},{value:"Customize",id:"customize",level:3},{value:"Call Tx",id:"call-tx",level:2},{value:"Default",id:"default-1",level:3},{value:"Customize",id:"customize-1",level:3},{value:"Notes",id:"notes",level:2}],u={toc:s};function p(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-customize-a-contract-tx"},"How to Customize a Contract Tx"),(0,o.kt)("h2",{id:"deployment-tx"},"Deployment Tx"),(0,o.kt)("h3",{id:"default"},"Default"),(0,o.kt)("p",null,"For contract deployment, the default tx builder creates a transaction with the following structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inputs:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[0\u2026]",": One or more ",(0,o.kt)("a",{parentName:"li",href:"https://learnmeabitcoin.com/technical/p2pkh"},"P2PKH")," inputs for paying transaction fees."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outputs:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[0]",": The output containing the contract."),(0,o.kt)("li",{parentName:"ul"},"[1]",": A P2PKH change output if needed.")))),(0,o.kt)("p",null,"Numbers in [] represent index, starting from 0."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lucid.app/publicSegments/view/5242c7cb-d30d-4a92-826c-4d6290e2af04/image.png",alt:null})),(0,o.kt)("h3",{id:"customize"},"Customize"),(0,o.kt)("p",null,"You can customize a contract's deployment tx builder by overriding its ",(0,o.kt)("a",{parentName:"p",href:"../how-to-write-a-contract/built-ins#builddeploytransaction"},"buildDeployTransaction")," method. An example is shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"class DemoContract extends SmartContract {\n  // ...\n\n  // customize the deployment tx by overriding `SmartContract.buildDeployTransaction` method\n  override async buildDeployTransaction(utxos: UTXO[], amount: number, changeAddress?: bsv.Address | string): Promise<bsv.Transaction> {\n    const deployTx = new bsv.Transaction()\n      // add p2pkh inputs for paying tx fees\n      .from(utxos)\n      // add contract output\n      .addOutput(new bsv.Transaction.Output({\n        script: this.lockingScript,\n        satoshis: amount,\n      }))\n      // add OP_RETURN output\n      .addData('Hello World')\n\n    if (changeAddress) {\n      deployTx.change(changeAddress);\n      if (this._provider) {\n        deployTx.feePerKb(await this.provider.getFeePerKb())\n      }\n    }\n\n    return deployTx;\n  }\n}\n")),(0,o.kt)("p",null,"You may visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/f63c37038a03bc51267e816d9441969d3e1d2ece/src/contracts/auction.ts#L100-L127"},"full code")," for more details."),(0,o.kt)("h2",{id:"call-tx"},"Call Tx"),(0,o.kt)("h3",{id:"default-1"},"Default"),(0,o.kt)("p",null,"For contract calls, the default tx builder creates a transaction with the following structure:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Inputs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[0]",": The input that spends the contract UTXO."),(0,o.kt)("li",{parentName:"ul"},"[1\u2026]",": Zero or more P2PKH inputs for paying transaction fees."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Outputs"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"[0\u2026N-1]",": One or more outputs, each containing a new contract instance (UTXO) if the contract is ",(0,o.kt)("a",{parentName:"li",href:"../how-to-write-a-contract/stateful-contract"},"stateful"),"."),(0,o.kt)("li",{parentName:"ul"},"[N]",": A P2PKH change output if needed.")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://lucid.app/publicSegments/view/9dfde0f0-7275-48da-9411-057e895b5fb3/image.png",alt:null})),(0,o.kt)("h3",{id:"customize-1"},"Customize"),(0,o.kt)("p",null,"You can customize a tx builder for a public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of your contract by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"bindTxBuilder"),". The first parameter is the public method name, and the second parameter is the customized tx builder."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// bind a customized tx builder for the public method `MyContract.unlock`\ninstance.bindTxBuilder("unlock", (current: T, options: MethodCallOptions<T>, ...args: any) => { \n  // the tx is NOT signed\n  const unsignedTx: bsv.Transaction = new bsv.Transaction()\n    // add contract input\n    .addInput(current.buildContractInput(options.fromUTXO))\n    // add a p2pkh output\n    .addOutput(new bsv.Transaction.Output({\n        script: bsv.Script.fromHex(Utils.buildPublicKeyHashScript(args[0])),\n        satoshis: args[1]\n    }))\n    // add change output\n    .change(options.changeAddress)\n\n  return Promise.resolve({\n    tx: unsignedTx,\n    atInputIndex: 0, // the contract input\'s index\n    nexts: []\n  })         \n})\n')),(0,o.kt)("p",null,"Note that the parameters of your customized tx builder consist of the following parts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"current")," is the actual instance of the smart contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," is of type ",(0,o.kt)("a",{parentName:"li",href:"/docs/how-to-test-a-contract#methodcalloptions"},(0,o.kt)("inlineCode",{parentName:"a"},"MethodCallOptions")),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"...args: any")," is an argument list the same as the bound pubic ",(0,o.kt)("inlineCode",{parentName:"li"},"@method"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"instance.bindTxBuilder('bid', Auction.buildTxForBid)\n\nclass Auction extends SmartContract {\n  // ...\n\n  @method(SigHash.ALL)\n  public bid(bidder: PubKeyHash, bid: bigint) {\n    // ...\n  }\n\n  static buildTxForBid(\n    current: Auction,\n    options: MethodCallOptions<Auction>,\n    // the following arguments are the same as the bound public `@method`\n    bidder: PubKeyHash,\n    bid: bigint\n  ): Promise<ContractTransaction> {\n    // ...\n  }\n}\n")),(0,o.kt)("p",null,"You may visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/blob/f63c37038a03bc51267e816d9441969d3e1d2ece/src/contracts/auction.ts#L130-L172"},"full code")," for more details."),(0,o.kt)("h2",{id:"notes"},"Notes"),(0,o.kt)("p",null,"Please be aware that each of these tx builders should only create an ",(0,o.kt)("strong",{parentName:"p"},"unsigned")," transaction. If required, the transaction gets signed automatically in a later step prior to broadcasting."),(0,o.kt)("p",null,"Also, your customized tx must satisfy all of the called ",(0,o.kt)("inlineCode",{parentName:"p"},"@method"),"'s assertions."))}p.isMDXComponent=!0}}]);