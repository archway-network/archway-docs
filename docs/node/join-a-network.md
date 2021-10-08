---
sidebar_position: 4
---

# Joining a Network


## Cleaning up

Let's first cleanup our network. This is needed if you already have a genesis file.

```bash
archwayd unsafe-reset-all
rm -rf ~/.app
```

**Note**: This command will remove all data and configs you already set.

## Download the genesis file
<!-- 
Prepare 

```bash
ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=archwayd \
		  -X github.com/cosmos/cosmos-sdk/version.AppName=archwayd \
		  -X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
		  -X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
		  -X github.com/cosmos-zone/archwayd/app.Bech32Prefix=free \
		  -X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags_comma_sep)"

```

change the `-X github.com/cosmos-zone/archwayd/app.Bech32Prefix=free` to 

```bash
-X github.com/cosmos-zone/archwayd/app.Bech32Prefix=cosmos
``` -->

<!-- archwayd init my-node --chain-id -->

Download compressed genesis state and extract it.

```sh
wget https://github.com/.../genesis.json.gz
gzip -d genesis.json.gz
```

## Replace local genesis file with Archway `genesis.json`

Move the downloaded genesis state to the archway directory:

```sh
# mkdir -p ~/.app
# mkdir -p ~/.app/config
mv genesis.json ~/.app/config/genesis.json
```

## Join the network

Start the archway and join the network

```sh
archwayd start --p2p.seeds <Address1>@<Host_Name_OR_IP1>:<PORT1>,<Address2>@<Host_Name_OR_IP2>:<PORT2>,<Address3>@<Host_Name_OR_IP3>:<PORT3>, ...<AddressN>@<Host_Name_OR_IPN>:<PORTN> --x-crisis-skip-assert-invariants
```

Expected output:

**TODO:** _We need to have some nodes and actually run these commands to see what happens next._