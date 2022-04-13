---
sidebar_position: 1
---

# Node Installation

This guide shows how to install and run an Archway full node.

## Running the Archway daemon

### How to install `archwayd` from source

Make sure you have golang installed on your machine:

- Install [Go](https://golang.org/doc/install) (**version 1.16** or higher).
- Ensure the Go environment variables are [set properly](https://golang.org/doc/gopath_code#GOPATH) on your system.

Get the source code:

```bash
git clone git@github.com:archway-network/archway.git
cd archway
```

Build and install:

```bash
make install
```

For full installation and configuration parameters, see the [README](https://github.com/archway-network/archway/blob/main/README.md).

### How to run `archwayd` using Docker

Make sure you have [Docker](https://docs.docker.com/get-docker "Install Docker") installed on your machine. For Linux users, it's recommended to run the Docker daemon in [Rootless Mode](https://docs.docker.com/engine/security/rootless/ "Docker Rootless mode").

Pull the image from [Docker Hub](https://hub.docker.com/r/archwaynetwork/archwayd):

```bash
docker pull archwaynetwork/archwayd:latest
```

Each Archway network will eventually have a different version running. To connect your node to a network, you should use a tag with the corresponding network name. For example, to connect to the Constantine testnet:

```bash
docker pull archwaynetwork/archwayd:constantine
```

:::info
Make sure to always use the image tag that points to the network you want to connect.
:::

By default, the Docker image runs the `archwayd` binary, so you should specify the arguments for `archwayd` right after the image name. For better usage, mount an external volume at `/root/.archway` to persist the daemon home path across different runs. For example, if you want to add a key:

```bash
docker run --rm -it \
  -v ~/.archway:/root/.archway \
  archwaynetwork/archwayd:latest \
  keys add test-key
```

And then list all keys:

```bash
docker run --rm -it \
  -v ~/.archway:/root/.archway \
  archwaynetwork/archwayd:latest \
  keys list
```

It's also important to notice that, when running a node in a network, you'll need to expose the container ports for external connectivity. The image exposes the following ports:

- `1317`: Rest server
- `26656`: Tendermint P2P
- `26657`: Tendermint RPC

:::tip
To simplify using the Docker container, set an alias with the home path and the proper image tag (replacing `<network-name>`), like:

```bash
alias archwayd="docker run --rm -it -v ~/.archway:/root/.archway archwaynetwork/archwayd:<network-name>"
```

After setting this alias, you can use the other `archwayd` commands without typing the verbose Docker run command.
:::

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

```text
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
