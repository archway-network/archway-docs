---
sidebar_position: 1
---

# Installation


## Prerequisites


Make sure you have golang installed on your machine:

- Install [Go](https://golang.org/doc/install) (**version 1.16** or higher)
- Ensure the Go environment variables are [set properly](https://golang.org/doc/gopath_code#GOPATH) on your system


<!-- Let's first cleanup our network in case you have setup an `archway` node before.

```bash
rm -rf ~/.archway
```

**Note**: This command will remove all data and configs you already set.
 -->

install `golangci-lint` via the following command

```bash
curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.42.1
```


## Download the Archway source code

Clone the repo and build archway

```bash
git clone git@github.com:archway-network/archway.git
cd archway
make install
```

## Initialize the node

Initialize the `genesis.json` file that is required to establish a network.

```bash
archwayd init my-node --chain-id my-chain
```

## Prepare the account and keys

Create a key to hold your account. Once you run this command, your may be prompted with a password dialogue. Please enter a new password for your account.

```bash
archwayd keys add my-account
```

After that you will see an output similar to the following:

```

- name: my-account
  type: local
  address: archway12ntzpk9fjt2x39pvll8ufma9tuhhnkh8g4zzc2
  pubkey: archwaypub1addwnpepqfgjegqxxv9srfe359t93tu9l86tpkwwjk7w63xtpwq05wmlq9emjmxfmmv
  mnemonic: ""
  threshold: 0
  pubkeys: []


**Important:** Write this mnemonic phrase in a safe place.
It is the only way to recover your account if you ever forget your password.

resource regret any wet stable body alcohol spring horse valve ritual top music salad gesture can earn casino example drive surface mix senior flag
```

Here we can see our account details and in the bottom we see our mnemonic phrase which is very crucial to recover the account.

## Starting the node

Now if we try to start the node, we will get this error since at least one validator is required for our network to be running.

```bash
archwayd start

Error: error during handshake: error on replay: validator set is nil in genesis and still empty after InitChain
```

To see how to configure a validator node, head over to this [link](../validator/overview.md)