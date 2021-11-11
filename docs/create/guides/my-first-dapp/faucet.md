---
sidebar_position: 2
---

# Requesting Testnet funds

If you're working on a testnet you'll want testnet `$ARCH` for paying gas costs to deploy your dApp code on chain.

After [creating an account](../../getting-started/setup.md#creating-an-account), get its address and request funds using the command:

```bash
archway faucet
```

Example output:

```bash
Enter an address to receive Testnet funds (e.g. "archway1x35egm8883wzg2zwqkvcjp0j4g25p4hed4yjuv"; Or, hit <enter> to list accounts): archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn
Requesting faucet funds to account archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn...

{ transfers: [ { coin: '10000000uconst', status: 'ok' } ] }
Requested funds to archway1gtmpktrrnu2qwnweyulwptv6wukd3edpxugkzn on network constantine-1 using faucet https://faucet.constantine-1.archway.tech
Success! REQUEST SENT
```
