"use strict";(self.webpackChunkarchway_docs=self.webpackChunkarchway_docs||[]).push([[5696],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return h}});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(m,r(r({ref:n},d),{},{components:t})):a.createElement(m,r({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},928:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(7462),o=t(3366),i=(t(7294),t(3905)),r=["components"],l={sidebar_position:3},s="Running a Local Testnet",c={unversionedId:"node/running-a-local-testnet",id:"node/running-a-local-testnet",isDocsHomePage:!1,title:"Running a Local Testnet",description:"To have a working network we need at least one validator node. So, let's create a validator node.",source:"@site/docs/node/running-a-local-testnet.md",sourceDirName:"node",slug:"/node/running-a-local-testnet",permalink:"/docs/node/running-a-local-testnet",editUrl:"https://github.com/archway-network/archway-docs/edit/main/docs/node/running-a-local-testnet.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Node Configuration",permalink:"/docs/node/configure"},next:{title:"Joining a Network",permalink:"/docs/node/join-a-network"}},d=[{value:"Initialize the validator node",id:"initialize-the-validator-node",children:[]},{value:"Initialize the second node",id:"initialize-the-second-node",children:[]},{value:"Fix port conflicts",id:"fix-port-conflicts",children:[{value:"Open the <code>./node2/config/app.toml</code> file and look for",id:"open-the-node2configapptoml-file-and-look-for",children:[]},{value:"Open the <code>./node2/config/config.toml</code> file and look for",id:"open-the-node2configconfigtoml-file-and-look-for",children:[]}]},{value:"Copy the genesis file",id:"copy-the-genesis-file",children:[]},{value:"Find addresses of the seeds",id:"find-addresses-of-the-seeds",children:[]},{value:"Join the network",id:"join-the-network",children:[]},{value:"Using <code>Gex</code> to visualize the network status",id:"using-gex-to-visualize-the-network-status",children:[]}],p={toc:d};function u(e){var n=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"running-a-local-testnet"},"Running a Local Testnet"),(0,i.kt)("p",null,"To have a working network we need at least one validator node. So, let's create a validator node."),(0,i.kt)("h2",{id:"initialize-the-validator-node"},"Initialize the validator node"),(0,i.kt)("p",null,"Let's first crate a directory to keep all nodes data in it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir testnet\ncd testnet\n")),(0,i.kt)("p",null,"Create a directory for the main node (the first node)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p node-main\n")),(0,i.kt)("p",null,"Initiate the node with the chain name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd init node-main --chain-id my-chain --home ./node-main\n")),(0,i.kt)("p",null,"Create a key to hold your account."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd keys add node-main-account\n")),(0,i.kt)("p",null,"Add that key into the genesis.app_state.accounts array in the genesis file."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," this command lets you set the number of coins. Make sure this account has some coins\nwith the genesis.app_state.staking.params.bond_denom denom, the default is staking."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd add-genesis-account $(archwayd keys show node-main-account -a) 1000000000stake,1000000000validatortoken --home ./node-main\n")),(0,i.kt)("p",null,"We need to generate a transaction creating the validator."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd gentx node-main-account 1000000000stake --chain-id my-chain --home ./node-main\n\narchwayd collect-gentxs --home ./node-main\n")),(0,i.kt)("p",null,"Now let's start the validator node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd start --home ./node-main\n")),(0,i.kt)("h2",{id:"initialize-the-second-node"},"Initialize the second node"),(0,i.kt)("p",null,"Create a directory for the second node "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p node2\n")),(0,i.kt)("p",null,"Initiate the node with the chain name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd init node2 --chain-id my-chain --home ./node2\n")),(0,i.kt)("h2",{id:"fix-port-conflicts"},"Fix port conflicts"),(0,i.kt)("p",null,"Since, in this guide, we run both nodes on the same machine, there will be some port conflicts.\nLet's fix them before starting the node."),(0,i.kt)("h3",{id:"open-the-node2configapptoml-file-and-look-for"},"Open the ",(0,i.kt)("inlineCode",{parentName:"h3"},"./node2/config/app.toml")," file and look for"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\naddress = "0.0.0.0:9090"\n')),(0,i.kt)("p",null,"Then change the port to something else like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[grpc]\naddress = "0.0.0.0:9092"\n')),(0,i.kt)("h3",{id:"open-the-node2configconfigtoml-file-and-look-for"},"Open the ",(0,i.kt)("inlineCode",{parentName:"h3"},"./node2/config/config.toml")," file and look for"),(0,i.kt)("p",null,"Find "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[rpc]\n...\nladdr = "tcp://127.0.0.1:26657"\n')),(0,i.kt)("p",null,"and change it to: ",(0,i.kt)("inlineCode",{parentName:"p"},'laddr = "tcp://127.0.0.1:10002"')),(0,i.kt)("p",null,"Then find"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'pprof_laddr = "localhost:6060"\n')),(0,i.kt)("p",null,"And change it to: ",(0,i.kt)("inlineCode",{parentName:"p"},'pprof_laddr = "localhost:6062"')),(0,i.kt)("p",null,"And the last thing we need to change is the listen port for p2p connections.\nFind "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml"},'[p2p]\n\n# Address to listen for incoming connections\nladdr = "tcp://0.0.0.0:26656"\n')),(0,i.kt)("p",null,"And change it to: ",(0,i.kt)("inlineCode",{parentName:"p"},'laddr = "tcp://0.0.0.0:20002"')),(0,i.kt)("h2",{id:"copy-the-genesis-file"},"Copy the genesis file"),(0,i.kt)("p",null,"In order to join the local test network, we need to use the same genesis file of that network.\nSo let's copy it from the main node and replace it on our genesis file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cp ./node-main/config/genesis.json ./node2/config/\n")),(0,i.kt)("h2",{id:"find-addresses-of-the-seeds"},"Find addresses of the seeds"),(0,i.kt)("p",null,"To join a p2p network we need the addresses of nodes that we are willing to connect to.\nSo let's find the address of the ",(0,i.kt)("inlineCode",{parentName:"p"},"main-node")," via running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd status\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Please note that this command shows the status of the running node on default port. If we want to get the status of a specific node, we need to give it the IP address and the port it is listening to. For example: ",(0,i.kt)("inlineCode",{parentName:"p"},"archwayd status -n tcp://localhost:10002")," for ",(0,i.kt)("inlineCode",{parentName:"p"},"node2")," that we just configured."),(0,i.kt)("p",null,"This command gives an output like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "NodeInfo": {\n    "protocol_version": {\n      "p2p": "8",\n      "block": "11",\n      "app": "0"\n    },\n    "id": "a118197af3c66781faa0299633cc59a1622d27e3",\n    "listen_addr": "tcp://0.0.0.0:26656",\n    "network": "chain-main",\n    "version": "",\n    "channels": "40202122233038606100",\n    "moniker": "node3",\n    "other": {\n      "tx_index": "on",\n      "rpc_address": "tcp://127.0.0.1:10003"\n    }\n  },\n  "SyncInfo": {\n    ...\n  },\n  "ValidatorInfo": {\n    ...\n  }\n}\n')),(0,i.kt)("p",null,"All we need is"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," which in our example is ",(0,i.kt)("inlineCode",{parentName:"li"},"a118197af3c66781faa0299633cc59a1622d27e3")," "),(0,i.kt)("li",{parentName:"ul"},"The host name and its listening port (",(0,i.kt)("inlineCode",{parentName:"li"},"listen_addr"),") which here is: ",(0,i.kt)("inlineCode",{parentName:"li"},"tcp://0.0.0.0:26656"))),(0,i.kt)("h2",{id:"join-the-network"},"Join the network"),(0,i.kt)("p",null,"Since we are running it on our local machine, the Ip address is ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," which refers to ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," we can use either ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". For me even ",(0,i.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," worked!"),(0,i.kt)("p",null,"Now let's run the following command to join the network:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"archwayd --home ./node2 start --p2p.seeds a118197af3c66781faa0299633cc59a1622d27e3@localhost:26656\n")),(0,i.kt)("h2",{id:"using-gex-to-visualize-the-network-status"},"Using ",(0,i.kt)("inlineCode",{parentName:"h2"},"Gex")," to visualize the network status"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"GEX")," is a real time in-terminal explorer for Cosmos SDK blockchains. Gex displays blocks, transactions, validator, network status, and more information. Use the GEX block explorer to see the status of peers, connection, version, and other useful information to have a quick peek into your own node."),(0,i.kt)("p",null,"Let's quickly install ",(0,i.kt)("inlineCode",{parentName:"p"},"Gex")," to see the status of our node."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get -u github.com/cosmos/gex\n")),(0,i.kt)("p",null,"To launch a GEX in your terminal window, type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"gex\n")),(0,i.kt)("p",null,"Please head over to this link for more information:\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cosmos/gex"},"https://github.com/cosmos/gex")),(0,i.kt)("p",null,"Now before connecting to the ",(0,i.kt)("inlineCode",{parentName:"p"},"main-node")," our gex looks like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3957).Z})),(0,i.kt)("p",null,"As you can see the number of peers is zero. Now we run execute the join network command and it should look like this:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(6744).Z})),(0,i.kt)("p",null,"So now we successfully joined a running network."),(0,i.kt)("h1",{id:"running-a-local-testnet-with-docker"},"Running a Local Testnet with docker"),(0,i.kt)("p",null,"Docker allows us to have a running a single node local test net in an easy way.\nFirst download the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:archway-network/archway.git\ncd archway\n")),(0,i.kt)("p",null,"Then run the following command to build the docker image:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo make build-docker\n")),(0,i.kt)("p",null,"Once the docker image is built successfully, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose up\n")),(0,i.kt)("p",null,"If you want to hide the terminal output, just use flag ",(0,i.kt)("inlineCode",{parentName:"p"},"-d")," like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose up -d\n")))}u.isMDXComponent=!0},3957:function(e,n,t){n.Z=t.p+"assets/images/Gex01-d2cb1e073c8cb0a1bae46692e7afb389.png"},6744:function(e,n,t){n.Z=t.p+"assets/images/Gex02-c3bdf73fd080b67c6c32bcac2562edb9.png"}}]);