"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[3689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},s="How to Add a Provider",i={unversionedId:"advanced/how-to-add-a-provider",id:"advanced/how-to-add-a-provider",title:"How to Add a Provider",description:"In the contract testing section, we learned about the Provider class in sCrypt. This class serves as an abstraction of a Bitcoin node, allowing your application to communicate with the Bitcoin network.",source:"@site/docs/advanced/how-to-add-a-provider.md",sourceDirName:"advanced",slug:"/advanced/how-to-add-a-provider",permalink:"/docs/advanced/how-to-add-a-provider",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/docs/category/advanced"},next:{title:"How to Add a Signer",permalink:"/docs/advanced/how-to-add-a-signer"}},c={},d=[{value:"Implementation",id:"implementation",level:2},{value:"Base Class <code>Provider</code>",id:"base-class-provider",level:3},{value:"<code>Example: WhatsonchainProvider</code>",id:"example-whatsonchainprovider",level:3},{value:"Using the Provider",id:"using-the-provider",level:2}],l={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-add-a-provider"},"How to Add a Provider"),(0,o.kt)("p",null,"In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/how-to-test-a-contract#provider"},"contract testing section"),", we learned about the Provider class in sCrypt. This class serves as an abstraction of a Bitcoin node, allowing your application to communicate with the Bitcoin network."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sCrypt")," provides the following providers by default:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DummyProvider"),": A mockup provider intended for local testing. It does not connect to the Bitcoin blockchain and thus cannot send transactions.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"DefaultProvider"),": The default provider is the safest and easiest way to begin developing on Bitcoin, and is also robust enough for use in production. It can be used in testnet as well as mainnet.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For a full list of providers, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/classes/Provider#hierarchy"},"here"),"."))),(0,o.kt)("h2",{id:"implementation"},"Implementation"),(0,o.kt)("h3",{id:"base-class-provider"},"Base Class ",(0,o.kt)("inlineCode",{parentName:"h3"},"Provider")),(0,o.kt)("p",null,"To implement your own provider, you must extend the base class ",(0,o.kt)("inlineCode",{parentName:"p"},"Provider"),". Here's the definition of this class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n * A Provider is an abstraction of non-account-based operations on a blockchain and is generally not directly involved in signing transaction or data.\n */\nexport abstract class Provider extends EventEmitter  {\n\n  constructor() {\n    super()\n    this._isProvider = true;\n  }\n\n  /**\n   * check if provider is ready\n   */\n  abstract isConnected(): boolean;\n\n  /**\n   * Implement the connection provider, for example, verify the api key during the connection process.\n   * @returns a connected provider. Throw an exception if the connection fails.\n   */\n  abstract connect(): Promise<this>;\n\n  /**\n   * update provider network\n   * @param network  Network type to be updated\n   */\n  abstract updateNetwork(network: bsv.Networks.Network): Promise<boolean>;\n\n  /**\n   * @returns The network this provider is connected to.\n   */\n  abstract getNetwork(): Promise<bsv.Networks.Network>;\n\n  /**\n   * @returns The fee rate for sending transactions through this provider.\n   */\n  abstract getFeePerKb(): Promise<number>;\n\n  /**\n * Get a best guess of the fee for a transaction.\n * @param tx A transaction object to estimate.\n * @returns The estimated fee in satoshis.\n */\n  async getEstimateFee(tx: bsv.Transaction): Promise<number> {\n    const copy = new bsv.Transaction(tx.uncheckedSerialize());\n    // use a copy bcoz `feePerKb` resets all the signatures for inputs.\n    copy.feePerKb(await this.getFeePerKb());\n    return copy.getEstimateFee();\n  }\n\n  // Executions\n\n  /**\n   * Send a raw transaction hex string.\n   * @param rawTxHex The raw transaction hex string to send.\n   * @returns A promise which resolves to the hash of the transaction that has been sent.\n   */\n  abstract sendRawTransaction(rawTxHex: string): Promise<TxHash>;\n\n  /**\n   * Send a transaction object.\n   * @param tx The transaction object to send.\n   * @returns A promise which resolves to the hash of the transaction that has been sent. \n   * @throws If there is a problem with the `tx` object during serialization.\n   */\n  sendTransaction(tx: bsv.Transaction): Promise<TxHash> {\n    // TODO: fix tx.serialize issue \n    return this.sendRawTransaction(tx.serialize({ disableIsFullySigned: true }));\n  }\n\n  // Queries\n\n  /**\n   * Get a transaction from the network.\n   * @param txHash The hash value of the transaction.\n   * @returns The query result with the transaction information.\n   */\n  abstract getTransaction(txHash: TxHash): Promise<TransactionResponse>\n\n  /**\n   * Get a list of the P2PKH UTXOs.\n   * @param address The address of the returned UTXOs belongs to.\n   * @param options The optional query conditions, see details in `UtxoQueryOptions`. \n   * @returns  A promise which resolves to a list of UTXO for the query options.\n   */\n  abstract listUnspent(address: AddressOption, options?: UtxoQueryOptions): Promise<UTXO[]>;\n\n  /**\n   * Get the balance of BSVs in satoshis for an address.\n   * @param address The query address.\n   * @returns A promise which resolves to the address balance status.\n   */\n  abstract getBalance(address: AddressOption): Promise<{ confirmed: number, unconfirmed: number }>;\n\n  /**\n   * Get a list of UTXO for a certain contract instance.\n   * @param genesisTxHash The hash value of deployment transaction of the contract instance.\n   * @param outputIndex The output index of the deployment transaction of the contract instance.\n   * @returns A promise which resolves to a list of transaction UTXO.\n   */\n  abstract getContractUTXOs(genesisTxHash: TxHash, outputIndex: number): Promise<UTXO[]>;\n\n  // Inspection\n\n  readonly _isProvider: boolean;\n\n  /**\n   * Check if an object is a `Provider`\n   * @param value The target object\n   * @returns Returns `true` if and only if `object` is a Provider.\n   */\n  static isProvider(value: any): value is Provider {\n    return !!(value && value._isProvider);\n  }\n}\n")),(0,o.kt)("p",null,"It is recommended that your provider implements all ",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," methods. For non-",(0,o.kt)("inlineCode",{parentName:"p"},"abstract")," methods, the default implementation is usually sufficient."),(0,o.kt)("h3",{id:"example-whatsonchainprovider"},(0,o.kt)("inlineCode",{parentName:"h3"},"Example: WhatsonchainProvider")),(0,o.kt)("p",null,"Let's walk through the process of implementing our own provider. In this example we'll implement a provider for ",(0,o.kt)("a",{parentName:"p",href:"https://whatsonchain.com"},"WhatsOnChain")," (WoC)."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First let's implement the ",(0,o.kt)("inlineCode",{parentName:"li"},"isConnected()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"connect()")," functions. Because WoC doesn't need to maintan an open connection, not does it require any authentication by default, it's simply marked as connected by default. If your chosen provider does, here's probably the place to implement the connection logic.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"isConnected(): boolean {\n  return true;\n}\n\noverride async connect(): Promise<this> {\n  this.emit(ProviderEvent.Connected, true);\n  return Promise.resolve(this);\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Next, we'll implement the network functions. Here, your providers selected network can be toggled. WoC supports both the Bitcoin mainnet along with testnet, so we don't do further checking:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async updateNetwork(network: bsv.Networks.Network): Promise<boolean> {\n  this._network = network;\n  this.emit(ProviderEvent.NetworkChange, network);\n  return Promise.resolve(true);\n}\n\noverride async getNetwork(): Promise<bsv.Networks.Network> {\n  return Promise.resolve(this._network);\n}\n")),(0,o.kt)("p",null,"If your provider is only meant for the testnet, you could do something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async updateNetwork(network: bsv.Networks.Network): Promise<boolean> {\n  if (network != bsv.Networks.testnet) {\n    throw new Error('Network not supported.')\n  }\n  this._network = network;\n  this.emit(ProviderEvent.NetworkChange, network);\n  return Promise.resolve(true);\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Now let's set the transaction fee rate. In our example, we hard-code the value to be 50 satoshis per Kb:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async getFeePerKb(): Promise<number> {\n  return Promise.resolve(50);\n}\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Let's implement the function that will send the transaction data to our provider:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async sendRawTransaction(rawTxHex: string): Promise<TxHash> {\n  // 1 second per KB\n  const size = Math.max(1, rawTxHex.length / 2 / 1024); //KB\n  const timeout = Math.max(10000, 1000 * size);\n  try {\n    const res = await superagent.post(\n      `${this.apiPrefix}/tx/raw`\n    )\n      .timeout({\n        response: timeout,  // Wait 5 seconds for the server to start sending,\n        deadline: 60000, // but allow 1 minute for the file to finish loading.\n      })\n      .set('Content-Type', 'application/json')\n      .send({ txhex: rawTxHex })\n    return res.body;\n  } catch (error) {\n    if (error.response && error.response.text) {\n      throw new Error(`WhatsonchainProvider ERROR: ${error.response.text}`)\n    }\n    throw new Error(`WhatsonchainProvider ERROR: ${error.message}`)\n  }\n}\n")),(0,o.kt)("p",null,"In the function we use the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/superagent"},(0,o.kt)("inlineCode",{parentName:"a"},"superagent"))," to send requests to WoC's HTTP endpoint. Check out their ",(0,o.kt)("a",{parentName:"p",href:"https://docs.taal.com/core-products/whatsonchain"},"docs")," for a description of the endpoints they provide."),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Now we need to implement some queries. First let's implement the function to get a list of ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.bitcoinsv.io/index.php/UTXO"},"UTXO's")," for a certain address:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async listUnspent(\n    address: AddressOption, \n    options?: UtxoQueryOptions\n    ): Promise<UTXO[]> {\n\n  const res = await superagent.get(`${this.apiPrefix}/address/${address}/unspent`);\n  const utxos: UTXO[] =\n    res.body.map(item => ({\n      txId: item.tx_hash,\n      outputIndex: item.tx_pos,\n      satoshis: item.value,\n      script: bsv.Script.buildPublicKeyHashOut(address).toHex(),\n    }));\n\n  if (options?.minSatoshis && utxos.reduce((s, u) => s + u.satoshis, 0) < options.minSatoshis) {\n    throw new Error(`WhatsonchainProvider ERROR: not enough utxos for the request amount of ${options.minSatoshis} on address ${address.toString()}`);\n  }\n\n  return utxos;\n}\n")),(0,o.kt)("p",null,"Next, we'll make the ",(0,o.kt)("inlineCode",{parentName:"p"},"getBalance")," function parse out the addresses balance from the UTXO's:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async getBalance(\n    address?: AddressOption\n    ): Promise<{ confirmed: number, unconfirmed: number }> {\n\n  return this.listUnspent(address, { minSatoshis: 0 }).then(utxos => {\n    return {\n      confirmed: utxos.reduce((acc, utxo) => {\n        acc += utxo.satoshis;\n        return acc;\n      }, 0),\n      unconfirmed: 0\n    }\n  })\n\n}\n")),(0,o.kt)("p",null,"We also implement the function to query the raw transaction using the transactions ID:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"override async getTransaction(txHash: string): Promise<TransactionResponse> {\n  try {\n    const res = await superagent.get(`${this.apiPrefix}/tx/${txHash}/hex`);\n    return new bsv.Transaction(res.text)\n  } catch (e) {\n    throw new Error(`WhatsonchainProvider ERROR: failed fetching raw transaction data: ${e.message}`);\n  }\n}\n")),(0,o.kt)("p",null,"Lastly, if our provider doesn't support a certain query, we can simply throw an error by default:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'override async getContractUTXOs(genesisTxHash: string, outputIndex?: number): Promise<UTXO[]> {\n    throw new Error("Method #getContractUTXOs not implemented in WhatsonchainProvider.");\n  }\n')),(0,o.kt)("h2",{id:"using-the-provider"},"Using the Provider"),(0,o.kt)("p",null,"Providers are usually used by a ",(0,o.kt)("inlineCode",{parentName:"p"},"Signer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const provider = new WhatsonchainProvider(bsv.Networks.mainnet)\nconst signer = new TestWallet(privateKey, provider)\n\nawait contractInstance.connect(signer);\n")),(0,o.kt)("p",null,"Here, the signer will use our ",(0,o.kt)("inlineCode",{parentName:"p"},"WhatsonchainProvider")," for each Bitcoin network operation it needs. The next section describes signers and how we can implement a custom one."))}p.isMDXComponent=!0}}]);