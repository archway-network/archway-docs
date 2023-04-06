---
objectID: developers|developer-tools|arch3js|store-contract
title: Store a contract with arch3.js
description: Learn how to store a contract with arch3.js
parentSection: Developers
parentSectionPath: /developers
---

# Store a contract with arch3.js

In this step-by-step tutorial, you will learn how to use the code that store a smart contract to the Archway network using arch3.js.

## Code snippet:

The final code that you will be able to use is:


::highlight-card
```javascript
const fs = require('fs');
const base64js = require("base64-js");
const { SigningCosmWasmClient, ArchwayHDWalletProvider, ArchwayConfigBuilder } = require("@archwayhq/arch3.js");

async function main() {
  const configBuilder = new ArchwayConfigBuilder();
  const config = configBuilder.createWithArchwayRpc("https://rpc.archway.network");

  const mnemonic = "your mnemonic phrase here";
  const walletProvider = new ArchwayHDWalletProvider(config, mnemonic);
  const [account] = await walletProvider.getAccounts();
  const accountAddress = account.address;

  const signingClient = new SigningCosmWasmClient(
    config.rpcUrl,
    accountAddress,
    walletProvider,
    config.signingClientOptions
  );

  const wasmCode = fs.readFileSync('./hackatom.wasm');
  const encoded = Buffer.from(wasmCode, 'binary').toString('base64');
  const contractData = base64js.toByteArray(encoded);

  const msgStoreCode = {
    typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
    value: {
      sender: accountAddress,
      wasmByteCode: contractData,
      instantiatePermission: {
        permission: 0,
        address: accountAddress,
      },
    },
  };

  const memo = "Deploying smart contract"; // optional
  const broadcastResult = await signingClient.signAndBroadcast(
    accountAddress,
    [msgStoreCode],
    'auto', // Can manually set fee here if needed
    memo,
  );

  console.log("Broadcast result:", broadcastResult);
}

main();

```
::


## 

Import required modules and packages:
::highlight-card
```javascript
const fs = require('fs');
const base64js = require("base64-js");
const { SigningCosmWasmClient, ArchwayHDWalletProvider, ArchwayConfigBuilder } = require("@archwayhq/arch3.js");
```
::


Here, we import the required modules: fs for reading the smart contract file, base64-js for encoding the contract in base64 format, and the necessary classes from the ```@archwayhq/arch3.js``` package.
::highlight-card
```javascript
Define the main function:
javascript
async function main() {

}
```
::

The main function is an asynchronous function that contains the entire deployment process.
::highlight-card
```javascript
Create an Archway network configuration:

const configBuilder = new ArchwayConfigBuilder();
const config = configBuilder.createWithArchwayRpc("https://rpc.archway.network");
We create an Archway configuration using the ArchwayConfigBuilder class and its createWithArchwayRpc method. This allows us to connect to the Archway network using the provided RPC URL.
```
::
Set up the wallet provider:
::highlight-card
```javascript
const mnemonic = "your mnemonic phrase here";
const walletProvider = new ArchwayHDWalletProvider(config, mnemonic);
const [account] = await walletProvider.getAccounts();
const accountAddress = account.address;
```
::
Replace "your mnemonic phrase here" with your own mnemonic phrase. The wallet provider is set up with the mnemonic and the Archway configuration. We then fetch the account associated with the mnemonic and store its address.

Initialize the signing client:
::highlight-card
```javascript
const signingClient = new SigningCosmWasmClient(
  config.rpcUrl,
  accountAddress,
  walletProvider,
  config.signingClientOptions
);
```
::
::highlight-card
```javascript
We create a SigningCosmWasmClient instance, which allows us to interact with the Archway network, sign transactions, and broadcast them.

Read the smart contract file, encode it in base64, and convert it to a byte array:

const wasmCode = fs.readFileSync('./hackatom.wasm');
const encoded = Buffer.from(wasmCode, 'binary').toString('base64');
const contractData = base64js.toByteArray(encoded);
```
::
Read the smart contract file (in this example, hackatom.wasm), encode it in base64 format, and convert it to a byte array using the base64-js package.

Create the MsgStoreCode message for deploying the smart contract:
::highlight-card
```javascript
const msgStoreCode = {
  typeUrl: "/cosmwasm.wasm.v1.MsgStoreCode",
  value: {
    sender: accountAddress,
    wasmByteCode: contractData,
    instantiatePermission: {
      permission: 0,
      address: accountAddress,
    },
  },
};
```
::
This message is used to deploy the smart contract to the Archway network. It includes the sender's address, the base64-encoded smart contract, and the instantiation permission.
::highlight-card
```javascript
Sign and broadcast the transaction:
javascript
Copy code
const memo = "Deploying smart contract"; // optional
const broadcastResult = await signingClient.signAndBroadcast(
  accountAddress,
  [msgStoreCode],
  'auto', // Can manually set fee here if needed
  memo,
);
```
::
Sign and broadcast the transaction using the signing client. The transaction includes the MsgStoreCode message, and an optional memo can be provided.

Log the broadcast result:
::highlight-card
```javascript
console.log("Broadcast result:", broadcastResult);
```
::