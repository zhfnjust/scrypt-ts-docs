"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[7653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},r="How to Deploy & Call a Contract",l={unversionedId:"how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract",id:"how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract",title:"How to Deploy & Call a Contract",description:"Core Concepts",source:"@site/docs/how-to-deploy-and-call-a-contract/how-to-deploy-and-call-a-contract.md",sourceDirName:"how-to-deploy-and-call-a-contract",slug:"/how-to-deploy-and-call-a-contract/",permalink:"/how-to-deploy-and-call-a-contract/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Built-in functions",permalink:"/how-to-write-a-contract/built-ins"},next:{title:"How to Customize a Contract Tx",permalink:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"}},c={},s=[{value:"Core Concepts",id:"core-concepts",level:2},{value:"Compile and Load Contract",id:"compile-and-load-contract",level:3},{value:"Contract Instance",id:"contract-instance",level:3},{value:"Provider",id:"provider",level:3},{value:"Signer",id:"signer",level:3},{value:"TestWallet",id:"testwallet",level:4},{value:"Tx Builders",id:"tx-builders",level:3},{value:"Contract Deployment Transaction",id:"contract-deployment-transaction",level:4},{value:"Contract Call Transaction",id:"contract-call-transaction",level:4},{value:"Prepare a Signer and Provider",id:"prepare-a-signer-and-provider",level:2},{value:"Contract Deployment",id:"contract-deployment",level:2},{value:"Contract Call",id:"contract-call",level:2},{value:"MethodCallOptions",id:"methodcalloptions",level:4},{value:"next",id:"next",level:4},{value:"Create a smart contract instance from a transaction",id:"create-a-smart-contract-instance-from-a-transaction",level:3},{value:"Method with Signatures",id:"method-with-signatures",level:3},{value:"Example",id:"example",level:2},{value:"Running the code",id:"running-the-code",level:3},{value:"Customize Transactions",id:"customize-transactions",level:3}],p={toc:s};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-deploy--call-a-contract"},"How to Deploy & Call a Contract"),(0,o.kt)("h2",{id:"core-concepts"},"Core Concepts"),(0,o.kt)("p",null,"After you've finished writing a contract, you can deploy and call it. But first, you should learn how a smart contract interacts with the blockchain. In this section, we will go over some fundamental concepts in detail."),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(9861).Z,width:"1961",height:"1998"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.moonbeam.network/tutorials/eth-api/how-to-build-a-dapp"},"Credit: moonbeam")),(0,o.kt)("h3",{id:"compile-and-load-contract"},"Compile and Load Contract"),(0,o.kt)("p",null,"First, compile the contract using the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"npx scrypt-cli compile\n")),(0,o.kt)("p",null,"This will create an artifact json file of your contract in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/artifacts")," folder."),(0,o.kt)("p",null,"Next, call ",(0,o.kt)("a",{parentName:"p",href:"/how-to-write-a-contract/built-ins#loadartifact"},"loadArtifact")," to load the json file, so you have a smart contract class ready to be instantiated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import artifact from '../artifacts/mycontract.json'\n\nawait MyContract.loadArtifact(artifact)\n")),(0,o.kt)("h3",{id:"contract-instance"},"Contract Instance"),(0,o.kt)("p",null,"As explained in the ",(0,o.kt)("a",{parentName:"p",href:"/"},"Overview section"),", an ",(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt")," contract is based on the Bitcoin UTXO model. A ",(0,o.kt)("strong",{parentName:"p"},"constract instance")," is an abstraction that represents a specific contract deployed on-chain, so you can use it to interact with the contract like a normal TypeScript object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// construct a new instance of `MyContract`\nlet instance = new MyContract(...initArgs);\n")),(0,o.kt)("h3",{id:"provider"},"Provider"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider")," is an abstraction of a standard Bitcoin node that provides connection to the Bitcoin network, for read and write access to the blockchain."),(0,o.kt)("p",null,"sCrypt already has a few built-in providers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DummyProvider"),": A mockup provider just for local tests. It does not connect to the Bitcoin blockchain and thus cannot send transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DefaultProvider"),":  The default provider is the safest, easiest way to begin developing on Bitcoin, and it is also robust enough for use in production. It can be used in testnet as well as mainnet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See a list of ",(0,o.kt)("a",{parentName:"p",href:"/reference/classes/Provider#hierarchy"},"available providers"),"."))),(0,o.kt)("p",null,"You can initialize these providers like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let dummyProvider = new DummyProvider();\n\n// mainnet\nlet provider = new DefaultProvider();\n\n// testnet\nlet provider = new DefaultProvider(bsv.Networks.testnet);\n")),(0,o.kt)("h3",{id:"signer"},"Signer"),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," is an abstraction of private keys, which can be used to sign messages and transactions. A simple signer would be a single private key, while a complex signer is a wallet."),(0,o.kt)("h4",{id:"testwallet"},"TestWallet"),(0,o.kt)("p",null,"For testing purposes only, we have a built-in wallet called ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet"),". It can be created like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const signer = new TestWallet(privateKey, provider);\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"privateKey")," can be a single private key or an array of private keys that the wallet can use to sign transactions. The ability of the wallet to send transactions is assigned to ",(0,o.kt)("inlineCode",{parentName:"p"},"provider"),". In other words, a ",(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet")," serves as both a signer and a provider."),(0,o.kt)("h3",{id:"tx-builders"},"Tx Builders"),(0,o.kt)("p",null,"To deploy or interact with contracts, we must build transactions and broadcast them to Bitcoin.\nWe have some built-in tx builders for the most common way to interact with contracts, so usually you don't have to implement them. If the default tx builder does not meet your specific requirements, such as having extra inputs or outputs in your tx, you can ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},"customize it"),"."),(0,o.kt)("h4",{id:"contract-deployment-transaction"},"Contract Deployment Transaction"),(0,o.kt)("p",null,"A Bitcoin transaction is required when deploying a contract to the blockchain. The transaction should have an output, whose script is compiled from the contract. This output is known as a contract UTXO and the contract instance comes ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," this UTXO."),(0,o.kt)("p",null,"An instance's ",(0,o.kt)("inlineCode",{parentName:"p"},"from")," can be accessed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// the tx that contains the instance\ninstance.from.tx\n// the index of the tx output that contains the instance\ninstance.from.outputIndex\n")),(0,o.kt)("h4",{id:"contract-call-transaction"},"Contract Call Transaction"),(0,o.kt)("p",null,"When you call a public method of a contract instance in a UTXO, a call transaction is needed. The transaction has an input that references to the UTXO and contains the script consisting of the method's arguments. We regard the contract instance goes ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," this transaction input."),(0,o.kt)("p",null,"An instance's ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," can be accessed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// the tx that spends the instance\ninstance.to.tx\n// the index of the tx input that spends the UTXO the instance is in\ninstance.to.inputIndex\n")),(0,o.kt)("p",null,"This section could be summarized as the diagram below:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(5529).Z,width:"761",height:"326"})),(0,o.kt)("h2",{id:"prepare-a-signer-and-provider"},"Prepare a Signer and Provider"),(0,o.kt)("p",null,"A signer and a provider must be connected to a contract instance before deployment and call. When we are ready to deploy the contract to the testnet/mainnet, we need a real provider like ",(0,o.kt)("a",{parentName:"p",href:"#provider"},"DefaultProvider"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const network = bsv.Networks.testnet; // or bsv.Networks.mainnet\nconst signer = new TestWallet(privateKey, new DefaultProvider(network));\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"privateKey")," must have enough coins. Learn how to fund it on a testnet using a ",(0,o.kt)("a",{parentName:"p",href:"./faucet"},"faucet"),"."),(0,o.kt)("p",null,"Then, connect it to your contract instance like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"await instance.connect(signer);\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"TestWallet")," is just a ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer")," provided by sCrypt for testing. In a real production environment (mainnet), you should use ",(0,o.kt)("inlineCode",{parentName:"p"},"PandaSigner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SensiletSigner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"DotwalletSigner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"TAALSigner"),".\nSee ",(0,o.kt)("a",{parentName:"p",href:"/how-to-integrate-a-frontend/"},"here")," how to use them.")),(0,o.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,o.kt)("p",null,"To deploy a smart contract, call its ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," method, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// construct a new instance of `MyContract`\nlet instance = new MyContract(...initArgs);\n\n// connect the signer to the instance\nawait instance.connect(signer);\n\n// the contract UTXO\u2019s satoshis\nconst initBalance = 1234;\n\n// build and send tx for deployment\nconst deployTx = await instance.deploy(initBalance);\nconsole.log(`Smart contract successfully deployed with txid ${deployTx.id}`);\n")),(0,o.kt)("h2",{id:"contract-call"},"Contract Call"),(0,o.kt)("p",null,"To facilitate calling a contract's public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method"),", we have injected a runtime object named ",(0,o.kt)("inlineCode",{parentName:"p"},"methods")," in your contract class. For each public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of your contract (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.foo"),"), a function with the same name and signature (including list of parameters and return type, i.e., void) is added into ",(0,o.kt)("inlineCode",{parentName:"p"},"methods")," (e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"contract.methods.foo"),"). In addition, there is an ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," appended as the last paramter."),(0,o.kt)("p",null,"Assume you have a contract like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Class MyContract extends SmartContract {\n  ...\n  @method()\n  public foo(arg1, arg2) {...}\n}\n")),(0,o.kt)("p",null,"You can check it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"let instance = new MyContract();\nconsole.log(typeof instance.methods.foo) // output `function`\n")),(0,o.kt)("p",null,"This function is designed to invoke the corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," of the same name on chain, meaning: calling it will spend the previous contract UTXO in a new transaction. You can call it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// Note: `instance.methods.foo` should be passed in all arguments and in the same order that `instance.foo` would take.\n\n// Additionally, it can accept an optional "options" argument to control the behavior of the function.\n\nconst { tx, atInputIndex } = await instance.methods.foo(arg1, arg2, options);\n')),(0,o.kt)("p",null,"What actually happens during the call is the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Build an unsigned transaction by calling the tx builder, which can be a default or a customized one introduced in ",(0,o.kt)("a",{parentName:"li",href:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},"this section"),", for a public ",(0,o.kt)("inlineCode",{parentName:"li"},"@method"),"."),(0,o.kt)("li",{parentName:"ol"},"Use the instance's signer to sign the transaction. Note that ",(0,o.kt)("inlineCode",{parentName:"li"},"instance.foo")," could be invoked during this process in order to get a valid unlocking script for the input."),(0,o.kt)("li",{parentName:"ol"},"Use the instance's connected ",(0,o.kt)("inlineCode",{parentName:"li"},"provider")," to send the transaction.")),(0,o.kt)("h4",{id:"methodcalloptions"},"MethodCallOptions"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"options")," argument is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodCallOptions"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * A option type to call a contract public `@method` function.\n * Used to specify the behavior of signers and transaction builders.\n * For example, specifying a transaction builder to use a specific change address or specifying a signer to use a specific public key to sign.\n */\nexport interface MethodCallOptions<T> {\n  /**\n   * The private key(s) associated with these address(es) or public key(s)\n   * must be used to sign the contract input,\n   * and the callback function will receive the results of the signatures as an argument named `sigResponses`\n   * */\n  readonly pubKeyOrAddrToSign?: PublicKeysOrAddressesOption | SignaturesOption;\n  /** The subsequent contract instance(s) produced in the outputs of the method calling tx in a stateful contract */\n  readonly next?: StatefulNext<T>[] | StatefulNext<T>,\n  /** The `lockTime` of the method calling tx */\n  readonly lockTime?: number;\n  /** The `sequence` of the input spending previous contract UTXO in the method calling tx */\n  readonly sequence?: number;\n  /** The P2PKH change output address */\n  readonly changeAddress?: AddressOption;\n  /** verify the input script before send transaction */\n  readonly verify?: boolean;\n  /** Whether to call multiple contracts at the same time in one transaction */\n  readonly multiContractCall?: true;\n  /** Pass the `ContractTransaction` of the previous call as an argument to the next call, only used if `multiContractCall = true`.  */\n  readonly partialContractTx?: ContractTransaction;\n}\n")),(0,o.kt)("p",null,"The major differences between here and ",(0,o.kt)("a",{parentName:"p",href:"/how-to-test-a-contract#run-tests"},"local tests")," are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"the contract needs to be deployed first"),(0,o.kt)("li",{parentName:"ol"},"the contract instance is connected to a real provider, which broadcasts transactions to the blockchain.")),(0,o.kt)("h4",{id:"next"},"next"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"next")," property within the ",(0,o.kt)("inlineCode",{parentName:"p"},"MethodCallOptions")," interface in sCrypt is used to specify the subsequent contract instance(s) produced in the outputs of the method calling transaction in a stateful contract. This property allows for the chaining of stateful contract calls within a single transaction."),(0,o.kt)("p",null,"The transaction builder uses the passed instance(s) to construct outputs of the contract call transaction."),(0,o.kt)("p",null,"When writing a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/scryptTS-docs/pull/how-to-customize-a-contract-tx.md#call-tx"},"custom transaction builder")," we can access the instance like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"static unlockTxBuilder(\n      current: Demo,\n      options: MethodCallOptions<Demo>,\n      ...\n  ): Promise<ContractTransaction> {\n      const next = options.next as StatefulNext<Demo>\n\n      ...\n}\n")),(0,o.kt)("h3",{id:"create-a-smart-contract-instance-from-a-transaction"},"Create a smart contract instance from a transaction"),(0,o.kt)("p",null,"To interact with a deployed smart contract (i.e., calling its public methods), we need its contract instance corresponding to its latest state on chain, stateful or not. When testing on testnet, we usually put a contract's deployment and its calling (note there could be multiple calls if the contract is stateful) in the same process for convenience, so that we don't need to manage the internal state of the instance manually, because it's always consistent with the transactions on chain."),(0,o.kt)("p",null,"In a production context, a contract's deployment and its call, and its different calls in the case of a stateful contract, may well be in separate processes. For example, the deployment party is different from the calling party, or multiple parties call it. If so, we need to create a contract instance from an on-chain transaction that represents its latest state, before we can call its method."),(0,o.kt)("p",null,"Typically, we only know the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/TXID"},"TXID")," of the transaction containing the instance. We can create an instance in two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using TXID, we retrieve the full transaction by calling ",(0,o.kt)("a",{parentName:"li",href:"/reference/classes/Provider#gettransaction"},"getTransaction")," of the ",(0,o.kt)("a",{parentName:"li",href:"/reference/classes/Signer#connectedprovider"},"connected provider")," of the signer."),(0,o.kt)("li",{parentName:"ol"},"We can create an contract instance from a transaction's by calling ",(0,o.kt)("a",{parentName:"li",href:"/how-to-write-a-contract/built-ins#fromtx"},"fromTx()"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 1) fetch a transaction from txid\nconst tx = await signer.connectedProvider.getTransaction(txId)\n// 2) create instance from transaction\nconst instance = Counter.fromTx(tx, atOutputIndex)\n\n// from now on, `instance` is in sync with the on-chain transaction\n// and we can use it to interact with the contract\n")),(0,o.kt)("p",null,"A complete example can be found ",(0,o.kt)("a",{parentName:"p",href:"./call-deployed"},"here"),"."),(0,o.kt)("h3",{id:"method-with-signatures"},"Method with Signatures"),(0,o.kt)("p",null,"A contract public ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," often needs a signature argument for authentication. Take this ",(0,o.kt)("a",{parentName:"p",href:"https://learnmeabitcoin.com/technical/p2pkh"},"Pay To PubKey Hash (P2PKH)")," contract for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export class P2PKH extends SmartContract {\n    @prop()\n    readonly address: Addr\n\n    constructor(address: Addr) {\n        super(..arguments)\n        this.address = address\n    }\n\n    @method()\n    public unlock(sig: Sig, pubkey: PubKey) {\n        // make sure the `pubkey` is the one locked with its address in the constructor\n        assert(pubKey2Addr(pubkey) == this.address, 'address check failed')\n\n       // make sure the `sig` is signed by the private key corresponding to the `pubkey`\n        assert(this.checkSig(sig, pubkey), 'signature check failed')\n    }\n}\n")),(0,o.kt)("p",null,"We can call the ",(0,o.kt)("inlineCode",{parentName:"p"},"unlock")," method like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// call\nconst { tx: callTx } = await p2pkh.methods.unlock(\n    // the first argument `sig` is replaced by a callback function which will return the needed signature\n    (sigResps) => findSig(sigResps, publicKey),\n\n    // the second argument is still the value of `pubkey`\n    PubKey(toHex(publicKey)),\n\n    // method call options\n    {\n        // A request for signer to sign with the private key corresponding to a public key\n        pubKeyOrAddrToSign: publicKey\n    } as MethodCallOptions<P2PKH>\n);\n\nconsole.log('contract called: ', callTx.id);\n")),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"p2pkh.method.unlock")," is called, the option contains ",(0,o.kt)("inlineCode",{parentName:"p"},"pubKeyOrAddrToSign"),", requesting a signature against ",(0,o.kt)("inlineCode",{parentName:"p"},"publicKey"),"."),(0,o.kt)("p",null,"The first argument is a signature, which can be obtained in a callback function. The function takes a list of signatures requested in ",(0,o.kt)("inlineCode",{parentName:"p"},"pubKeyOrAddrToSign")," and find the one signature to the right public key/address."),(0,o.kt)("p",null,"In general, if your ",(0,o.kt)("inlineCode",{parentName:"p"},"@method")," needs ",(0,o.kt)("inlineCode",{parentName:"p"},"Sig"),"-typed arguments, you could obtain them as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Ensure that the ",(0,o.kt)("inlineCode",{parentName:"li"},"pubKeyOrAddrToSign")," contains all public keys/addresses corresponding to these ",(0,o.kt)("inlineCode",{parentName:"li"},"Sig"),"s;"),(0,o.kt)("li",{parentName:"ol"},"Replace each ",(0,o.kt)("inlineCode",{parentName:"li"},"Sig")," argument with a callback function that filters to the right ",(0,o.kt)("inlineCode",{parentName:"li"},"Sig")," from the full list of signature in ",(0,o.kt)("inlineCode",{parentName:"li"},"sigResps"),".")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Here is the complete sample code for the deployment and call of a P2PKH contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { privateKey } from '../../utils/privateKey';\n\n// load contract\nawait P2PKH.loadArtifact()\n\n// public key of the `privateKey`\nconst publicKey = privateKey.publicKey\n\n// setup signer\nconst signer = new TestWallet(privateKey, new DefaultProvider());\n\n// initialize an instance with `pkh`\nlet p2pkh = new P2PKH(Addr(publicKey.toAddress().toByteString()))\n\n// connect the signer\nawait p2pkh.connect(signer);\n\n// deploy the contract, with 1 satoshi locked in\nconst deployTx = await p2pkh.deploy(1);\nconsole.log('contract deployed: ', deployTx.id);\n\n// call\nconst { tx: callTx } = await p2pkh.methods.unlock(\n    (sigResps) => findSig(sigResps, publicKey),\n    PubKey(toHex(publicKey)),\n    {\n        pubKeyOrAddrToSign: publicKey\n    } as MethodCallOptions<P2PKH>\n);\n\nconsole.log('contract called: ', callTx.id);\n")),(0,o.kt)("p",null,"More examples can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sCrypt-Inc/boilerplate/tree/master/tests/"},"here"),"."),(0,o.kt)("h3",{id:"running-the-code"},"Running the code"),(0,o.kt)("p",null,"The deployment and call code is wrapped into a simple NPM command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm run testnet\n")),(0,o.kt)("p",null,"Make sure you fund your address before running this command.\nAfter a successful run you should see something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"P2PKH contract deployed:  f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3\nP2PKH contract called:  dc53da3e80aadcdefdedbeb6367bb8552e381e92b226ab1dc3dc9b3325d8a8ee\n")),(0,o.kt)("p",null,"These are the TXIDs of the transaction which deployed the smart contract and then the one which called its method. You can see the transactions using a ",(0,o.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/tx/f3f372aa25f159efa93db8c51a4eabbb15935358417ffbe91bfb78f4f0b1d2a3"},"block explorer"),"."),(0,o.kt)("h3",{id:"customize-transactions"},"Customize Transactions"),(0,o.kt)("p",null,"Deploying and calling a contract builds transactions with a certain format, which suffices for many cases. In cases where the tx format does not work for you and you need to customize it, please proceed to the ",(0,o.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},"next section"),"."))}d.isMDXComponent=!0},9861:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/call-47823395ac2b9f1f646216757e1e3134.png"},5529:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/contract_tx-0fa71f4c422b61213b4fd38744df2650.svg"}}]);