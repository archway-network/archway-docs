"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[870],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(c,".").concat(u)]||m[u]||l[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3816:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:3},c="Minting and sending tokens",p={unversionedId:"create/guides/nft-project/interact",id:"create/guides/nft-project/interact",isDocsHomePage:!1,title:"Minting and sending tokens",description:"Now that we've got our smart contract deployed we can transact with it to mint tokens that can be hodl'd or sent to other Archway addresses.",source:"@site/docs/create/guides/nft-project/interact.md",sourceDirName:"create/guides/nft-project",slug:"/create/guides/nft-project/interact",permalink:"/docs/create/guides/nft-project/interact",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/create/guides/nft-project/interact.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"mainSidebar",previous:{title:"Deploying the token contract",permalink:"/docs/create/guides/nft-project/deploy"},next:{title:"Building the NFT dApp",permalink:"/docs/create/guides/nft-project/dapp"}},d=[{value:"Minting tokens",id:"minting-tokens",children:[]},{value:"Sending tokens",id:"sending-tokens",children:[]}],l={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"minting-and-sending-tokens"},"Minting and sending tokens"),(0,o.kt)("p",null,"Now that we've got our smart contract deployed we can transact with it to mint tokens that can be ",(0,o.kt)("a",{parentName:"p",href:"https://academy.binance.com/en/glossary/hodl"},"hodl'd")," or sent to other Archway addresses."),(0,o.kt)("h2",{id:"minting-tokens"},"Minting tokens"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/v0.9.3/contracts/cw721-base/src/msg.rs#L60-L72"},"MintMsg")," is a message type from the ",(0,o.kt)("inlineCode",{parentName:"p"},"cw721_base")," package imported by our project's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/archway-network/archway-templates/blob/main/cw721/on-chain-metadata/Cargo.toml"},"Cargo.toml"),". It's used by our contract's execution handler to set state for an NFT with metadata corresponding to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/v0.9.3/contracts/cw721-base/src/state.rs#L91-L105"},"TokenInfo model")," we looked at previously."),(0,o.kt)("p",null,"To mint an NFT, we need to send a transaction to the smart contract with our ",(0,o.kt)("inlineCode",{parentName:"p"},"MintMsg")," parameters in JSON format. For adding any custom traits, since we're using the on-chain metadata NFT template, arbitrary metadata values can be added using the ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions")," attribute of ",(0,o.kt)("inlineCode",{parentName:"p"},"MintMsg"),"."),(0,o.kt)("p",null,"This is the JSON string we will use to mint our test NFT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mint": {\n    "token_id": "1",\n    "owner": "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq",\n    "extension": {\n      "name": "Archway NFT #1",\n      "description": "Building With NFTs",\n      "image": "ipfs://QmZdPdZzZum2jQ7jg1ekfeE3LSz1avAaa42G6mfimw9TEn",\n      "attributes": [\n        {\n          "trait_type": "tutorial",\n          "value": "https://docs.archway.io/docs/create/guides/nft-project/start"\n        }\n      ]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"To execute our mint transaction we add the JSON arguments using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--args")," flag of ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," command of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@archwayhq/cli"},"Archway Developer CLI"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway tx --args \'{"mint":{"token_id":"1","owner":"archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq","extension":{"name":"Archway NFT #1","description":"Building With NFTs","image":"ipfs://QmZdPdZzZum2jQ7jg1ekfeE3LSz1avAaa42G6mfimw9TEn","attributes":[{"trait_type":"tutorial","value":"https://docs.archway.io/docs/create/guides/nft-project/start"}]}}}\'\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Using most Archway commands, including ",(0,o.kt)("inlineCode",{parentName:"p"},"tx")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"query"),", requires your terminal path to be at the root, or inside, of a folder created with the Archway Developer CLI"))),(0,o.kt)("p",null,"To confirm the NFT is now correctly stored on-chain, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"query")," command, specifying the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," declared in the minting transaction:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway query contract-state smart --args \'{"nft_info":{"token_id":"1"}}\'\n# Show output here\n')),(0,o.kt)("p",null,"The behaviour of the ",(0,o.kt)("inlineCode",{parentName:"p"},"nft_info")," entrypoint is defined ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/v0.9.3/contracts/cw721-base/src/query.rs#L33-L39"},"here")," if you want to read the response model in detail."),(0,o.kt)("h2",{id:"sending-tokens"},"Sending tokens"),(0,o.kt)("p",null,"To transfer a token, we have to send a message of the type ",(0,o.kt)("inlineCode",{parentName:"p"},"TransferNft"),", which we achieve by sending a transaction to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CosmWasm/cw-nfts/blob/v0.9.3/contracts/cw721-base/src/execute.rs#L124-L139"},"transfer_nft")," entrypoint exposed by the contract. The params we send to the entrypoint are: the recipient address; and the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," to be sent to the receiver."),(0,o.kt)("p",null,"In JSON format, our transaction arguments look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "transfer_nft": { \n    "recipient": "archway1y00hm50lffnxt5m0kuy9afk83gyuye684zwcr5", \n    "token_id": "1" \n  }\n}\n')),(0,o.kt)("p",null,"Using the ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@archwayhq/cli"},"Developer CLI"),", we broadcast the transaction and include the above parameters like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway tx --args \'{"transfer_nft":{"recipient":"archway1y00hm50lffnxt5m0kuy9afk83gyuye684zwcr5","token_id":"1"}}\'\n')),(0,o.kt)("p",null,"Once the transaction confirms ownership of the token will be changed from the address declared as owner at minting (",(0,o.kt)("inlineCode",{parentName:"p"},"archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq")," in this guides's example), to the new receiver address (",(0,o.kt)("inlineCode",{parentName:"p"},"archway1y00hm50lffnxt5m0kuy9afk83gyuye684zwcr5")," in this guides's example). To verify that's the case, we can query the contract again to see who owns the ",(0,o.kt)("inlineCode",{parentName:"p"},"token_id")," with the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"'1'"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'archway query contract-state smart --args \'{"nft_info":{"token_id":"1"}}\'\n# Show output here\n')),(0,o.kt)("p",null,"Now that the contract is up and running, read on to learn how to build a dApp around the minting and transfer functionality we just tested."))}m.isMDXComponent=!0}}]);