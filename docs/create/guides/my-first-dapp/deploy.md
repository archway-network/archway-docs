---
sidebar_position: 4
---

# Deploying your dApp on chain

When you're ready to deploy an on chain build we can start Docker (if not already running) and use the `archway deploy` command.
```bash
sudo service docker start
archway deploy
```

To skip the CLI asking for default values required by your dApp, include constructor arguments using the `--args` parameter. Format your constructor parameters as a `JSON` encoded string.
```bash
archway deploy --args '{"my_key":"my value"}'
```

If you cloned the 'Increment' starter template, try deploying with your `counter` argument set to `0`; e.g. `archway deploy --args '{"count":0}'`

If you didn't deploy with `--args`, you'll need to enter that information into the CLI anyway, but why is the constructor `{"count":0}` and how can we verify it? 

Open `src/contract.rs`, near the top you'll see `pub fn instatiate` which sets state in the contract at instatiation:
```javascript
let state = State {
  count: msg.count, // Here's our count declaration
  owner: info.sender.clone(), // Contract owner is wallet that sent tx
};
```

<!-- XXX TODO: put a video here in place of output -->

`archway deploy` is a developer super command that produces huge output. Since we're running the command without `--dryrun`

It doesn't make sense to list all of that output here, instead let's look at a step-by-step anatomy of what the command does. There are 5 steps in total.

1. **MAKE WASM** - _Produces `wasm` executable optimized and compressed with `cosmwasm/rust-optimizer`_
2. **CREATE ON CHAIN WASM** - _Uploads `wasm` executable on chain_
3. **VERIFY UPLOAD INTEGRITY** - _Downloads the uploaded `wasm` and verifies on chain version matches checksum of local build_
4. **INSTANTIATE CONTRACT** - _Creates an instance of the uploaded contract_
5. **STORE DEPLOYMENT LOG** - _Creates log entries for steps 2 (upload) and 4 (instantiation) in `config.json`_

If you suceeded in deploying you'll now be able to query and transact with your dApp, but if you're unsure or suspect something may have gone wrong, check your deployments history using the `archway history` command. Or, by opening `config.json` at the root of the project and looking at the `deployments` array. 

In your history you'll see 2 transactions were created: the `create` transaction from when it was uploaded on chain; and, the `instantiate` transaction which made an on chain instance that can queried and transacted with.

```bash
archway history
```

Example output:
```bash
Printing deployments...

[
  {
    type: 'instatiate',
    address: 'wasm1rfa3scumm5y2lt6jku49hg52y2tk06pnsm9p6w',
    chainId: 'pebblenet-1',
    data: '{...}'
  },
  {
    type: 'create',
    codeId: '84',
    chainId: 'pebblenet-1',
    data: '{...}'
  }
]
```