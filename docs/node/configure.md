---
sidebar_position: 2
---

# Node Configuration

By default, the `init` command creates your `~/.archway` directory with subfolders `config` and `data`. In the config directory, the most important files for configuration are `app.toml` and `config.toml`. You can configure your node via editing these files. 

The basic configurations are included in this document. For more details about configs, review the `app.toml` and `config.toml` files.

## `config.toml`

The various parts of the `config.toml` configuration file:

```toml
proxy_app = "<PROTOCOL>://<HOST_ADDRESS>:<PORT>"
```
ProxyApp is the TCP or UNIX socket address of the ABCI application, or the name of an ABCI application compiled in with the binary.


```toml
moniker = "<A_CUSTOM_NAME>"
```
Moniker is a custom human-readable name for this node.

```toml
genesis_file = "<PATH_TO_GENESIS_FILE>"
```

Path to the JSON file that contains the initial validator set and other metadata.


```toml
priv_validator_key_file = "<PATH_TO_VALIDATOR_PRIVATE_KEY>"
```

Path to the JSON file that contains the private key to use as a validator in the consensus protocol.

```toml
[p2p]
laddr = "tcp://<IP_ADDRESS>:<PORT>"
```

where `laddr` is the address to listen for incoming connections in the peer-to-peer network.


## `app.toml`

The various parts of the `app.toml` configuration file:

```toml
[api]
address = "tcp://<HOST_NAME>:<PORT>"
```

where address defines the API server to listen on.

```toml
[grpc]
address = "tcp://<HOST_NAME>:<PORT>"
```

where address defines the gRPC server address to bind to.