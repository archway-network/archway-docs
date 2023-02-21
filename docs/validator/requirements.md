---
sidebar_position: 2
---

# Validator Requirements


Listed below are the technical requirements to validating for the Archway Network. 

## Minimum Hardware requirements

Validators should expect to provision one or more data center locations with redundant power, networking, firewalls, HSMs and servers.

We expect that a modest level of hardware specifications is initially needed and might rise as network use increases. Participating in the testnet is the best way to learn more. Below are the Hardware specifications: 

- Linux distribution
- x86_64 processor
- 16 GB RAM
- 500 GB to 2 TB storage*
- Storage size for validators depends on level of pruning.


## Software requirements

In addition to running an Archway node, validators must develop monitoring, alerting and management solutions.

## Bandwidth requirements

The Cosmos network has the capacity for very high throughput relative to chains like Ethereum or Bitcoin.

We recommend that the data center nodes connect only to trusted full-nodes in the cloud or other validators that know each other socially. This relieves the data center node from the burden of mitigating denial-of-service attacks.

Ultimately, as the network becomes more heavily used, multigigabyte per day bandwidth is very realistic.

## What does running a validator imply in terms of logistics?

A successful validator operation requires the efforts of multiple highly skilled individuals and continuous operational attention. These operating efforts are considerably more involved than running a bitcoin miner for instance.

## How to handle key management?

Validators are expected to run an HSM that supports ed25519 keys. Here are potential options:

- YubiHSM 2
- Ledger Nano S/X
- Ledger BOLOS SGX enclave
- Thales nShield support

The Phi Labs team does not recommend a particular HSM option. The community is encouraged to bolster the effort to improve HSMs and the security of key management.

## What can validators expect in terms of operations?

Running effective operation is the key to avoiding unexpectedly unbonding or being slashed. This includes being able to respond to attacks, outages, as well as to maintain security and isolation in your data center.

## What are the maintenance requirements?

Validators are expected to perform regular software updates to accommodate upgrades and bug fixes. There are inevitable issues with the network early in its bootstrapping phase that require substantial vigilance.

## How can validators protect themselves from denial-of-service attacks?

Denial-of-service attacks occur when an attacker sends a flood of internet traffic to an IP address to prevent the server at the IP address from connecting to the internet.

An attacker scans the network, tries to learn the IP address of various validator nodes and disconnect them from communication by flooding them with traffic.

One recommended way to mitigate these risks is for validators to carefully structure their network topology in a so-called sentry node architecture.

Validator nodes are expected to connect only to full-nodes they trust because they operate them themselves or are run by other validators they know socially. A validator node typically runs in a data center. Most data centers provide direct links the networks of major cloud providers. The validator can use those links to connect to sentry nodes in the cloud. This shifts the burden of denial-of-service from the validator's node directly to its sentry nodes, and may require new sentry nodes be spun up or activated to mitigate attacks on existing ones.

Sentry nodes can be quickly spun up or change their IP addresses. Because the links to the sentry nodes are in private IP space, an internet-based attack cannot disturb the sentry nodes directly. Sentry nodes ensure validator block proposals and votes always make it to the rest of the network.

It is expected that good operating procedures on the part of validators completely mitigate these threats.

<!-- For more on sentry node architecture, see [Some Link]. -->
