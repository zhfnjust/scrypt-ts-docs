"use strict";(self.webpackChunkscrypt_docs=self.webpackChunkscrypt_docs||[]).push([[1033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||r;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},230:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:1},s="The BSV submodule",o={unversionedId:"bitcoin-basics/bsv",id:"bitcoin-basics/bsv",title:"The BSV submodule",description:"sCrypt exports a submodule named bsv which is an interface that helps you manage low-level things for the Bitcoin blockchain, such as creating key pairs, building, signing and serializing Bitcoin transactions and more.",source:"@site/docs/bitcoin-basics/bsv.md",sourceDirName:"bitcoin-basics",slug:"/bitcoin-basics/bsv",permalink:"/bitcoin-basics/bsv",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Bitcoin Basics",permalink:"/bitcoin-basics/"},next:{title:"How to Write a Contract",permalink:"/how-to-write-a-contract/"}},l={},c=[{value:"Importing",id:"importing",level:2},{value:"Private Keys",id:"private-keys",level:2},{value:"Public Keys",id:"public-keys",level:2},{value:"Addresses",id:"addresses",level:2},{value:"Hash Functions",id:"hash-functions",level:2},{value:"Constructing Transactions",id:"constructing-transactions",level:2},{value:"Signing",id:"signing",level:3},{value:"OP_RETURN Scripts",id:"op_return-scripts",level:3},{value:"ECIES",id:"ecies",level:2},{value:"Encryption",id:"encryption",level:3},{value:"Decryption",id:"decryption",level:3},{value:"References",id:"references",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-bsv-submodule"},"The BSV submodule"),(0,i.kt)("p",null,"sCrypt exports a submodule named ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," which is an interface that helps you manage low-level things for the Bitcoin blockchain, such as creating key pairs, building, signing and serializing Bitcoin transactions and more."),(0,i.kt)("p",null,"In the context of sCrypt, it is mainly used for managing key pairs and defining custom transaction builders, as demonstrated in ",(0,i.kt)("a",{parentName:"p",href:"/how-to-deploy-and-call-a-contract/how-to-customize-a-contract-tx"},"this section"),"."),(0,i.kt)("p",null,"The goal of this section is to guide you through the basics of using the ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule."),(0,i.kt)("h2",{id:"importing"},"Importing"),(0,i.kt)("p",null,"You can import the ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { bsv } from 'scrypt-ts'\n")),(0,i.kt)("h2",{id:"private-keys"},"Private Keys"),(0,i.kt)("p",null,"A private key object is essentially just a wrapper around a 256-bit integer."),(0,i.kt)("p",null,"You can generate a Bitcoin private key from a random value:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const privKey = bsv.PrivateKey.fromRandom()\n// Same as: const privKey = bsv.PrivateKey.fromRandom(bsv.Network.mainnet)\n")),(0,i.kt)("p",null,'This will generate a private key for the Bitcoin main network. To create a key for the test network (also referred to as "testnet"), do the following instead:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)\n")),(0,i.kt)("p",null,"The main difference between a mainnet and a testnet key is how they get serialized. Check out ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Wallet_Import_Format_(WIF)"},"this page")," which explains this in detail."),(0,i.kt)("p",null,"You can also create key object from serialized keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const privKey = bsv.PrivateKey.fromWIF('cVDFHtcTU1wn92AkvTyDbtVqyUJ1SFQTEEanAWJ288xvA7TEPDcZ')\nconst privKey2 = bsv.PrivateKey.fromString('e3a9863f4c43576cdc316986ba0343826c1e0140b0156263ba6f464260456fe8')\n")),(0,i.kt)("p",null,"You can see the decimal value of the private key the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(privKey.bn.toString())\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Warning"),"\nPrivate keys should be carefully stored and never be publicly revealed. Otherwise it may lead to loss of funds.")),(0,i.kt)("h2",{id:"public-keys"},"Public Keys"),(0,i.kt)("p",null,"A public key is a key that is derived from a private key and can be shared publicly. Mathematically, a public key is a point on the default elliptic curve that Bitcoin uses, named ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Secp256k1"},(0,i.kt)("inlineCode",{parentName:"a"},"SECP256K1")),". It is the curve's base point multiplied by the value of the private key."),(0,i.kt)("p",null,"You can get the public key corresponding to a private key the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)\nconst pubKey = privKey.toPublicKey()\n")),(0,i.kt)("p",null,"Same as with private key you can serialize and deserialize public keys:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const pubKey = bsv.PublicKey.fromHex('03a687b08533e37d5a6ff5c8b54a9869d4def9bdc2a4bf8c3a5b3b34d8934ccd17')\n\nconsole.log(pubKey.toHex())\n// 03a687b08533e37d5a6ff5c8b54a9869d4def9bdc2a4bf8c3a5b3b34d8934ccd17\n")),(0,i.kt)("h2",{id:"addresses"},"Addresses"),(0,i.kt)("p",null,"You can get a Bitcoin address from either the private key or the public key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const privKey = bsv.PrivateKey.fromRandom(bsv.Networks.testnet)\nconst pubKey = privKey.toPublicKey()\n\nconsole.log(privKey.toAddress())\n// mxRjX2uxHHmS4rdSYcmCcp2G91eseb5PpF\nconsole.log(pubKey.toAddress())\n// mxRjX2uxHHmS4rdSYcmCcp2G91eseb5PpF\n")),(0,i.kt)("p",null,"Read ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Bitcoin_address"},"this wiki page")," for more information on how Bitcoin addresses get constructed."),(0,i.kt)("h2",{id:"hash-functions"},"Hash Functions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule offers various hash functions that are commonly used in Bitcoin. You can use them like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const hashString = bsv.crypto.Hash.sha256(Buffer.from('this is the data I want to hash')).toString('hex')\nconsole.log(hashString)\n// f88eec7ecabf88f9a64c4100cac1e0c0c4581100492137d1b656ea626cad63e3\n")),(0,i.kt)("p",null,"The hash functions available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule are:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Hash Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Length"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sha256"),(0,i.kt)("td",{parentName:"tr",align:null},"32 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The SHA256 hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sha256sha256"),(0,i.kt)("td",{parentName:"tr",align:null},"32 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The SHA256 hash of the SHA256 hash. Used for blocks and transactions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sha512"),(0,i.kt)("td",{parentName:"tr",align:null},"64 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The SHA512 hash. Commonly used in applications.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sha1"),(0,i.kt)("td",{parentName:"tr",align:null},"20 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The SHA1 hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ripemd160"),(0,i.kt)("td",{parentName:"tr",align:null},"20 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The RIPEMD160 hash.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sha256ripemd160"),(0,i.kt)("td",{parentName:"tr",align:null},"20 bytes"),(0,i.kt)("td",{parentName:"tr",align:null},"The RIPEMD160 hash of the SHA256 hash. Used in Bitcoin addresses.")))),(0,i.kt)("p",null,"Note however, that these ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/moneybutton/bsv/blob/master/lib/hash.js"},"bsv.js hash functions")," should not be confused with ",(0,i.kt)("a",{parentName:"p",href:"https://scrypt.io/docs/reference/#hashing-functions"},"sCrypt's native hash functions"),". These functions cannot be used in a smart contract method."),(0,i.kt)("h2",{id:"constructing-transactions"},"Constructing Transactions"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule offers a flexible system for constructing Bitcoin transactions. Users are able to define scripts, transaction inputs and outputs, and a whole transaction including its metadata. For a complete description of Bitcoins transaction format, please read ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions"},"this wiki page"),"."),(0,i.kt)("p",null,"As an exercise let's construct a simple ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Bitcoin_Transactions#Pay_to_Public_Key_Hash_.28P2PKH.29"},"P2PKH")," transaction from scratch and sign it."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:"),"\nAs you will notice further in these docs, most of these steps won't be needed in a regular smart contract development workflow as sCrypt already does a lot of heavy lifting for you. This section serves more as a deeper look on what is happening under the hood.")),(0,i.kt)("p",null,"You can create an empty transaction like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"let tx = new bsv.Transaction()\n")),(0,i.kt)("p",null,"Because the transaction will need an input that provides it with some funds, we can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," function to add one that unlocks the specified ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/UTXO"},"UTXO"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tx.from({\n    // TXID that contains the output you want to unlock:\n    txId: 'f50b8c6dedea6a4371d17040a9e8d2ea73d369177737fb9f47177fbda7d4d387',\n    // Index of the UTXO:\n    outputIndex: 0,\n    // Script of the UTXO. In this case it's a regular P2PKH script:\n    script: bsv.Script.fromASM('OP_DUP OP_HASH160 fde69facc20be6eee5ebf5f0ae96444106a0053f OP_EQUALVERIFY OP_CHECKSIG').toHex(),\n    // Value locked in the UTXO in satoshis:\n    satoshis: 99904\n})\n")),(0,i.kt)("p",null,"Now, the transaction needs an output that will pay to the address ",(0,i.kt)("inlineCode",{parentName:"p"},"mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ")," in our example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tx.addOutput(\n    new bsv.Transaction.Output({\n        script: bsv.Script.buildPublicKeyHashOut('mxXPxaRvFE3178Cr6KK7nrQ76gxjvBQ4UQ'),\n        satoshis: 99804,\n    })\n)\n")),(0,i.kt)("p",null,"Notice how the output value is 100 satoshis less than the value of the UTXO we're unlocking. This difference is the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/Transaction_fees"},"transaction fee")," (sometimes also called the miner fee). The transaction fees are picked up by miners when they mine a block, so adding a transaction fee basically acts as an incentive for miners to include your transaction in a block."),(0,i.kt)("p",null,"The amount of transaction fee you should pay depends on the fee rate and the bytes of the transaction. By adding an additional output to the transaction, we can control how much the transaction fee is actually paid. This output is called the change output. By adjusting the amount of change output, we can pay as little transaction fees as possible while meeting the needs of miners."),(0,i.kt)("p",null,"You can directly call the ",(0,i.kt)("inlineCode",{parentName:"p"},"change")," function to add a change output to the transaction without calculating the change amount by yourself. This function is smart enough that it will only add the change output when the difference between all inputs and outputs is more than the required transaction fee."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tx.change('n4fTXc2kaKXHyaxmuH5FTKiJ8Tr4fCPHFy')\n")),(0,i.kt)("p",null,"For the fee rate, you can also change it by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"feePerKb"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tx.feePerKb(50)\n")),(0,i.kt)("h3",{id:"signing"},"Signing"),(0,i.kt)("p",null,"OK, now that we have the transaction constructed, it's time to sign it. First, we need to seal the transaction, so it will be ready to sign. Then we call the ",(0,i.kt)("inlineCode",{parentName:"p"},"sign")," function, which takes the private key that can unlock the UTXO we passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"from")," function. In our example, this is the private key that corresponds to the address ",(0,i.kt)("inlineCode",{parentName:"p"},"n4fTXc2kaKXHyaxmuH5FTKiJ8Tr4fCPHFy"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"tx = tx.seal().sign('cNSb8V7pRt6r5HrPTETq2Li2EWYEjA7EcQ1E8V2aGdd6UzN9EuMw')\n")),(0,i.kt)("p",null,"Viola! That's it. This will add the necessary data to the transaction's input script. That being the signature along with the public key of our signing key."),(0,i.kt)("p",null,"Now our transaction is ready to be posted to the blockchain. You can serialize the transaction the following way:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"console.log(tx.serialize())\n")),(0,i.kt)("p",null,"For broadcasting, you can use any provider you like. For demo purposes you can simply paste the serialized transaction ",(0,i.kt)("a",{parentName:"p",href:"https://test.whatsonchain.com/broadcast"},"here"),"."),(0,i.kt)("h3",{id:"op_return-scripts"},"OP_RETURN Scripts"),(0,i.kt)("p",null,"In case you would like to put some arbitrary data on-chain, without any locking logic, you can use transaction outputs with an ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.bitcoinsv.io/index.php/OP_RETURN"},"OP_RETURN")," script."),(0,i.kt)("p",null,"An example of an OP_RETURN script written in ASM format is this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OP_FALSE OP_RETURN 734372797074\n")),(0,i.kt)("p",null,"In effect, the opcodes ",(0,i.kt)("inlineCode",{parentName:"p"},"OP_FALSE OP_RETURN")," will make the script unspendable. After them we can insert arbitrary chunks of data. The ",(0,i.kt)("inlineCode",{parentName:"p"},"734372797074")," is actually the string ",(0,i.kt)("inlineCode",{parentName:"p"},"sCrypt")," encoded as an ",(0,i.kt)("inlineCode",{parentName:"p"},"utf-8")," hexadecimal string."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(Buffer.from('sCrypt').toString('hex'))\n// 734372797074\n")),(0,i.kt)("p",null,"An OP_RETURN script can also contain more than a single chunk of data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"OP_FALSE OP_RETURN 48656c6c6f 66726f6d 734372797074\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule offers a convenient function to construct such scripts:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const opRetScript: bsv.Script = bsv.Script.buildSafeDataOut(['Hello', 'from', 'sCrypt'])\n")),(0,i.kt)("p",null,"We can add the resulting ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv.Script")," object to an output as we showed ",(0,i.kt)("a",{parentName:"p",href:"#constructing-transactions"},"above"),"."),(0,i.kt)("h2",{id:"ecies"},"ECIES"),(0,i.kt)("p",null,"ECIES (Elliptic Curve Integrated Encryption Scheme) is a hybrid encryption scheme that combines the strengths of public-key cryptography and symmetric encryption. It allows two parties, each having an elliptic curve key pair, to exchange encrypted messages. The ",(0,i.kt)("inlineCode",{parentName:"p"},"bsv")," submodule provides the ",(0,i.kt)("inlineCode",{parentName:"p"},"ECIES")," class to easily implement this encryption scheme in your sCrypt projects."),(0,i.kt)("p",null,"Here's how to use it:"),(0,i.kt)("h3",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"To encrypt a message using ECIES:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, create an instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ECIES")," class."),(0,i.kt)("li",{parentName:"ol"},"Specify the public key of the recipient with the ",(0,i.kt)("inlineCode",{parentName:"li"},"publicKey")," method."),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"encrypt")," method with the message you wish to encrypt.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const msg = 'Hello sCrypt!'\nconst encryption = new bsv.ECIES()\nencryption.publicKey(recipientPublicKey)\nconst ciphertext = encryption.encrypt(msg)\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"recipientPublicKey")," is the recipient's public key."),(0,i.kt)("h3",{id:"decryption"},"Decryption"),(0,i.kt)("p",null,"To decrypt a message:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create another instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ECIES")," class."),(0,i.kt)("li",{parentName:"ol"},"Set the recipient's private key using the ",(0,i.kt)("inlineCode",{parentName:"li"},"privateKey")," method."),(0,i.kt)("li",{parentName:"ol"},"Call the ",(0,i.kt)("inlineCode",{parentName:"li"},"decrypt")," method, passing the ciphertext you wish to decrypt.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"const decryption = new bsv.ECIES()\ndecryption.privateKey(recipientPrivateKey)\nconst msg = decryption.decrypt(ciphertext).toString()\nconsole.log(msg)\n")),(0,i.kt)("p",null,"In this example, ",(0,i.kt)("inlineCode",{parentName:"p"},"recipientPrivateKey")," is the private key of the recipient (the one corresponding to the public key used for encryption)."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take a look at the full ",(0,i.kt)("a",{parentName:"li",href:"../reference/modules/bsv"},(0,i.kt)("inlineCode",{parentName:"a"},"bsv")," submodule reference")," for a full list of what functions it provides."),(0,i.kt)("li",{parentName:"ul"},"As the ",(0,i.kt)("inlineCode",{parentName:"li"},"bsv")," submodule is based on MoneyButton's library implementation, take a look at their ",(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=bkGiCjYBpJE&list=PLwj1dNv7vWsMrjrWeiQEelbKTI3Lrmvqp&index=1"},"video tutorial series"),". Although do keep in mind that some things might be slightly different as it's an old series.")))}u.isMDXComponent=!0}}]);