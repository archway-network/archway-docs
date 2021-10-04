---
sidebar_position: 1
---

# Installation


## Prerequisite

Make sure you have golang installed on your machine:

- Install [Go](https://golang.org/doc/install) (**version 1.16** or higher)
- Ensure the Go environment variables are [set properly](https://golang.org/doc/gopath_code#GOPATH) on your system


## Step 1

Let's first cleanup our network. This is needed if you already have a genesis file.

```bash
rm -rf ~/.app
```

**Note**: This command will remove all data and configs you already set.


Then install `golangci-lint` via the following command

```bash
curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.42.1
```


## Step 2

Clone the repo and build archway

```bash
git clone git@github.com:archway-network/archway.git
cd archway
make build install
```

## Step 3

Initialize the `genesis.json` file that is required to establish a network.

```bash
archwayd init my-node --chain-id my-archway-chain
```

## Step 4 

Create a key to hold your account. Once you run this command, your will be prompted with a password dialogue. Please enter a new password for your account.

```bash
archwayd keys add my-account
```

After that you will see an output similar to the following:

```

- name: my-account
  type: local
  address: free12ntzpk9fjt2x39pvll8ufma9tuhhnkh8g4zzc2
  pubkey: freepub1addwnpepqfgjegqxxv9srfe359t93tu9l86tpkwwjk7w63xtpwq05wmlq9emjmxfmmv
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important** write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

resource regret any wet stable body alcohol spring horse valve ritual top music salad gesture can earn casino example drive surface mix senior flag
```

Here we can see our account details and in the bottom we see our mnemonic phrase which is very crucial to recover the account.

## Step 5

Add that key into the genesis.app_state.accounts array in the genesis file.

**Note:** this command lets you set the number of coins. Make sure this account has some coins
with the genesis.app_state.staking.params.bond_denom denom, the default is staking.

```bash
archwayd add-genesis-account $(archwayd keys show my-account -a) 1000000000stake,1000000000validatortoken
```

## Step 6

We need at least one validator in order to have our network running. Let's add it.

This command generates the transaction creating your validator.

```bash
archwayd gentx my-account 1000000000stake --chain-id my-archway-chain
```

## Step 7

Add the generated bonding transaction to the genesis file

```bash
archwayd collect-gentxs
```

## Step 8

Now we can start our node in the local archway network

```bash
archwayd start
```

Use the following command to get the status of the network

```bash
archwayd status
```
