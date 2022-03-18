---
sidebar_position: 2
---

# Deploying the token contract

Now we are ready to deploy and instantiate the contract. The contract instantiation requires three parameters:

- `name` (the NFT collection name)
- `symbol` (a token symbol to represent it)
- `minter` (the wallet address allowed to mint a new NFT using this contract)

When we run the `archway deploy` command, we add our values for `name`, `symbol` and `minter` as arguments like this:

```bash
$ archway deploy --args '{ "name": "Test Collection", "symbol": "NFTEST", "minter": "archway1znhxr5j4ty5rz09z49thrj7gnxpm9jl5nnmvjx" }'
```

Once deployment succeeds, you're able to mint your first token of the collection. Read on to learn about interacting with the contract.