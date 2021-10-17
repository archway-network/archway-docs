---
sidebar_position: 2
---

# Requesting Testnet funds
If you're working on a testnet you'll want testnet `$ARCH` for paying gas costs to deploy your dApp code on chain.

Setting up a new project with `archway new`, and choosing a testnet, bootstraps the configuration parameters you'll need. If your configuration is correct, you can request funds for either `stable [constantine]` or `nightly [titus]` testnet.

Request funds using the command:
```bash
archway faucet
```

Example output:
```bash
Enter an address to receive Testnet funds (e.g. "wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv"; Or, hit <enter> to list accounts): wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv
Requesting faucet funds to account wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv...

Welcome to the faucet!

Check the full status via the /status endpoint.
You can get tokens from here by POSTing to /credit.
See https://github.com/cosmos/cosmjs/tree/main/packages/faucet for all further information.

Successfully requested funds to wasm1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv on network pebblenet-1 using faucet https://faucet.pebblenet.cosmwasm.com
```
