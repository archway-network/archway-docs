---
sidebar_position: 2
---

# Node Configuration

By default, the `init` command creates your `~/.archway` directory with subfolders `config` and `data`. In the config directory, the most important files for configuration are `app.toml` and `config.toml`. You can configure your node via editing these files. 

We explain few configs here to being with. For more details about configs, please open the `app.toml` and `config.toml` files.


## `config.toml`
Here we explain various parts of configuration file:

```toml
proxy_app = "<PROTOCOL>://<HOST_ADDRESS>:<PORT>"
```
ProxyApp is the TCP or UNIX socket address of the ABCI application, or the name of an ABCI application compiled in with the binary.


```toml
moniker = "<A_CUSTOM_NAME>"
```
Moniker is a custom human readable name for this node.

```toml
genesis_file = "<PATH_TO_GENESIS_FILE>"
```
Path to the JSON file containing the initial validator set and other meta data.


```toml
priv_validator_key_file = "<PATH_TO_VALIDATOR_PRIVATE_KEY>"
```
Path to the JSON file containing the private key to use as a validator in the consensus protocol.

```toml
[p2p]
laddr = "tcp://<IP_ADDRESS>:<PORT>"
```
`laddr` is the address to listen for incoming connections in the peer-to-peer network.



## `app.toml`

```toml
[api]
address = "tcp://<HOST_NAME>:<PORT>"
```
Address defines the API server to listen on.

```toml
[grpc]
address = "tcp://<HOST_NAME>:<PORT>"
```
Address defines the gRPC server address to bind to.