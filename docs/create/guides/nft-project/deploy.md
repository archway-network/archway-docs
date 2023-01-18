---
sidebar_position: 2
---

# Deploying the token contract

As we saw in the [My First dapp](../my-first-dapp/deploy.md) guide, deployment on Archway is a multi-step process.

1. [Generate an optimized build](#generate-an-optimized-build)
2. [Store the optimized build on chain](#store-the-optimized-build-on-chain)
3. [Instantiate the NFT collection](#instantiate-the-nft-collection)
4. [Configure the deployed contract](#configure-the-deployed-contract)

## Generate an optimized build

First we'll need to produce an optimized `wasm` build and upload it to the blockchain.

Optimized builds are produced by passing the `--optimize` flag to `archway build`:

```bash
archway build --optimize
```

## Store the optimized build on chain

To store the optimized build on Archway, use the following command:

```bash
archway store
```

:::tip
There are many tips and tricks you can use when storing your optimized `wasm`. For example, passing the `--no-confirm` will skip prompting you to confirm the transaction preview, and `--from ${MY_WALLET_LABEL}` will skip asking which wallet to use for broadcasting the transaction (if you provide a valid wallet label from your keychain).
:::

## Instantiate the NFT collection

Now we're ready to instantiate the contract. The contract instantiation requires three parameters:

- `name` (the NFT collection name)
- `symbol` (a token symbol to represent it)
- `minter` (the wallet address allowed to mint a new NFT using this contract)

When we run the `archway instantiate` command, we add our values for `name`, `symbol` and `minter` as arguments like this:

```bash
archway instantiate --args '{ "name": "Test Collection", "symbol": "NFTEST", "minter": "archway1f395p0gg67mmfd5zcqvpnp9cxnu0hg6r9hfczq" }'
```

Once instantiation succeeds, you're able to mint your first token of the collection. Read on to learn more about interacting with this contract.

## Configure the deployed contract

Now that the NFT contract is deployed it's recommended to set its metadata. This will configure the smart contract to collect developer premiums, rewards and can be used to enable gas rebates with a pooling account.

To set contract metadata, use the command:

```bash
archway metadata
```