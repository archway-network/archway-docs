"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[4052],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1314:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:10},s="Install a Wallet",c={unversionedId:"wallet",id:"wallet",isDocsHomePage:!1,title:"Install a Wallet",description:"This quick guid shows you how to setup a wallet and manage your tokens with it. One of the widely used wallets for Cosmos based coins is Keplr which is similar to MetaMask.",source:"@site/docs/wallet.md",sourceDirName:".",slug:"/wallet",permalink:"/docs/wallet",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/wallet.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Participate in Staking",permalink:"/docs/staking"}},p=[{value:"Install Keplr",id:"install-keplr",children:[]},{value:"Open Keplr",id:"open-keplr",children:[]},{value:"Create account",id:"create-account",children:[]},{value:"Confirm mnemonic phrase",id:"confirm-mnemonic-phrase",children:[]},{value:"Register",id:"register",children:[]},{value:"Working with Keplr",id:"working-with-keplr",children:[{value:"Our wallet address",id:"our-wallet-address",children:[]},{value:"Make a Deposit",id:"make-a-deposit",children:[]},{value:"Other Cosmos tokens",id:"other-cosmos-tokens",children:[]},{value:"Account management",id:"account-management",children:[]}]}],u={toc:p};function d(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"install-a-wallet"},"Install a Wallet"),(0,a.kt)("p",null,"This quick guid shows you how to setup a wallet and manage your tokens with it. One of the widely used wallets for Cosmos based coins is ",(0,a.kt)("inlineCode",{parentName:"p"},"Keplr")," which is similar to ",(0,a.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),"."),(0,a.kt)("p",null,"Let's install it."),(0,a.kt)("h2",{id:"install-keplr"},"Install Keplr"),(0,a.kt)("p",null,"Open you ",(0,a.kt)("em",{parentName:"p"},"Google Chrome")," browser and head over to this website: ",(0,a.kt)("a",{parentName:"p",href:"https://wallet.keplr.app/"},"https://wallet.keplr.app/")," "),(0,a.kt)("p",null,"If you have not already installed Keplr, it shows you a message box saying that you should click on it and install it."),(0,a.kt)("p",null,"Once you click on the message box, it redirects you to the chrome web store page to install the Keplr extension.\nClick on ",(0,a.kt)("inlineCode",{parentName:"p"},"Add to Chrome")," and install the extension."),(0,a.kt)("p",null,"When the extension is installed, you should see the Keplr icon on your browser corner. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8745).Z})),(0,a.kt)("h2",{id:"open-keplr"},"Open Keplr"),(0,a.kt)("p",null,"Click on the Keplr icon; then, you will see a screen like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1710).Z})),(0,a.kt)("h2",{id:"create-account"},"Create account"),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Create new account")," to see the following form:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1375).Z})),(0,a.kt)("p",null,"Here you can see a ",(0,a.kt)("inlineCode",{parentName:"p"},"Mnemonic Seed")," phrase that is generated specifically for your account which is used to recover your account in case you loose your extension or forget your password."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Attention"),": Make sure to write it down, print it or make several copies of it and keep them in a safe place."),(0,a.kt)("p",null,"You can select either 12 or 24 words; both are good, but 24 is only more secure."),(0,a.kt)("p",null,"Fill in an account name, write your password and click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Next")," button."),(0,a.kt)("h2",{id:"confirm-mnemonic-phrase"},"Confirm mnemonic phrase"),(0,a.kt)("p",null,"Once the following screen appears, you need to select the mnemonic phrase exactly as the same order of what we just saw in the previous screen."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2311).Z})),(0,a.kt)("h2",{id:"register"},"Register"),(0,a.kt)("p",null,"When all the words are put in the right order, click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Register")," button and we are all set."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5509).Z})),(0,a.kt)("h2",{id:"working-with-keplr"},"Working with Keplr"),(0,a.kt)("p",null,"When we click on the Keplr icon, since we have an account this time, this window is shown."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2771).Z})),(0,a.kt)("p",null,"In this window we can see our total balance in the middle and we are able to do multiple actions with our account."),(0,a.kt)("h3",{id:"our-wallet-address"},"Our wallet address"),(0,a.kt)("p",null,"If we hover the mouse pointer on the text starting with ",(0,a.kt)("inlineCode",{parentName:"p"},"cosmos"),", we can see and copy our so called wallet address. We need to share this address with the people who wants to transfer some tokens to our account."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7483).Z})),(0,a.kt)("h3",{id:"make-a-deposit"},"Make a Deposit"),(0,a.kt)("p",null,"If you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Deposit")," button, the wallet address is shown in a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/QR_code"},"QR Code")," format. If a person wants to transfer some crypto to your wallet, they can simply scan this QR code."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8713).Z})),(0,a.kt)("h3",{id:"other-cosmos-tokens"},"Other Cosmos tokens"),(0,a.kt)("p",null,"If you click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Cosmos")," dropdown on top of the window, you can switch to other Cosmos based cryptos."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5441).Z})),(0,a.kt)("h3",{id:"account-management"},"Account management"),(0,a.kt)("p",null,"If you click on the account icon on top right corner, you will see this screen.\nHere you can manage your account and even see the mnemonic phrase in case you have not saved it yet."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3735).Z})))}d.isMDXComponent=!0},8745:function(e,t,n){t.Z=n.p+"assets/images/keplr01-ef999e2dc2f31a26b1315756b5283690.png"},1710:function(e,t,n){t.Z=n.p+"assets/images/keplr02-2762d766c571a3b8e30c9ca99e5733d6.png"},1375:function(e,t,n){t.Z=n.p+"assets/images/keplr03-ebedd98f461108e507f73f004698a1b5.png"},2311:function(e,t,n){t.Z=n.p+"assets/images/keplr04-fe0a08c2999403679f8934fdd1af63ea.png"},5509:function(e,t,n){t.Z=n.p+"assets/images/keplr05-8c3d74dc9a29f2d99ee0c308c2d88d04.png"},2771:function(e,t,n){t.Z=n.p+"assets/images/keplr06-e0d534efd7b02ec6e1814f54d50f71fd.png"},7483:function(e,t,n){t.Z=n.p+"assets/images/keplr07-6b6fc40eb81ed3469d9a4cc171d2ba6e.png"},8713:function(e,t,n){t.Z=n.p+"assets/images/keplr08-8956d637b5aa4041e08deda9c42a6698.png"},5441:function(e,t,n){t.Z=n.p+"assets/images/keplr09-1a188fd9d29b786cf23d36ef1eab693a.png"},3735:function(e,t,n){t.Z=n.p+"assets/images/keplr10-21f29b5db85ac92dc393e7cb8f7e4371.png"}}]);