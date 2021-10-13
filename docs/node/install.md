---
sidebar_position: 1
---

# Node Installation

How to install an Archway full node.

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

To install `golangci-lint`, run the following command:

```bash
curl -sSfL https://raw.githubusercontent.com/golangci/golangci-lint/master/install.sh | sh -s -- -b $(go env GOPATH)/bin v1.42.1
```


## Download the Archway Source Code

Clone the repo and build archway:

```bash
git clone git@github.com:archway-network/archway.git
cd archway
make install
```

## Initialize the Node

Initialize the `genesis.json` file that is required to establish a network.

```bash
archwayd init my-node --chain-id my-chain
```

## Prepare the Account and Keys

Create a key to hold your account. After you run this command, you are prompted with a password dialogue. Enter a new password for your account.

```bash
archwayd keys add my-account
```

You see an output similar to the following:

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

Here you can see your account details and the mnemonic phrase that is very crucial to recover the account.

## Starting the Node

If you try to start the node, you get an error since at least one validator is required for your network to run.

```bash
archwayd start

Error: error during handshake: error on replay: validator set is nil in genesis and still empty after InitChain
```

To configure a validator node, see [Validator Overview](../validator/overview.md).