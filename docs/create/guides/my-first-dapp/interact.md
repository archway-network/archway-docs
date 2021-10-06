---
sidebar_position: 5
---

# Interacting with your dApp

Now it's possible to query and transact with your deployed instance. 

## Querying

Queries read from the blockchain. They don't modify anything stored on chain so they don't cost a fee.

There are several types of queries we could do, but a common type we're interested in is `contract-state`, which we'll call in `smart` mode. This lets us run queries with arguments, as opposed to dumping the entire contract data.

If we query the `count` before modifying any state, we get the value we set during deployment instantiation:

```bash
archway query contract-state smart --args '{"get_count": {}}'
```

Outputs:
```bash
Attempting query...

{"data":{"count":0}}

Ok!
```

Why was the query argument `'{"get_count": {}}'`?

If we open `src/contract.rs` and inspect `pub fn query` we'll see the case matching statement that matches our JSON query:
```javascript
pub fn query(deps: Deps, _env: Env, msg: QueryMsg) -> StdResult<Binary> {
  match msg {
      QueryMsg::GetCount {} => to_binary(&query_count(deps)?), // Here it is
  }
}
```

**Note: `QueryMsg` is an `enum` with the `GetCount` property. It's good to be aware of the format here, as the enum attribute is uppercase without spaces in Rust, but lowercase with snake case when converted to JSON arguments.**

## Transacting

Transactions write to the blockchain and cost gas a fee for modifying a contract's state securely.

By default gas estimatation mode is `auto`, but you've got granular control. To modify gas settings edit the `gas` values inside the `network` object of your `config.json`. However, for most cases the default gas settings are preferable.

To increment our counter value, we'll be executing a transaction that calls `pub fn try_increment` in `src/contract.rs`. This function is already public, but executing a transaction is handled by `pub fn execute` in `src/contract.rs` which does case matching to call `try_increment`.

Send an Increment transaction:
```bash
archway tx --args '{"increment":{}}'
```

Example output:
```bash
Attempting transaction...

Send tx from which wallet in your keychain? (e.g. "main" or crtl+c to quit): my-wallet
Enter keyring passphrase:
gas estimate: 115945
{"body":{"messages":[{"@type":"/cosmwasm.wasm.v1.MsgExecuteContract","sender":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a","contract":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d","msg":"eyJpbmNyZW1lbnQiOnt9fQ==","funds":[]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"upebble","amount":"116"}],"gas_limit":"115945","payer":"","granter":""}},"signatures":[]}

confirm transaction before signing and broadcasting [y/N]: y
{"height":"689581","txhash":"FE6CA15FB3B8295A7FFC0AA3FC307E6FE31E2AB606EB58774C2668CC1CACF6E8","data":"0A090A0765786563757465","raw_log":"[{\"events\":[{\"type\":\"execute\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\"}]},{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"execute\"},{\"key\":\"module\",\"value\":\"wasm\"},{\"key\":\"sender\",\"value\":\"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a\"}]},{\"type\":\"wasm\",\"attributes\":[{\"key\":\"_contract_address\",\"value\":\"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d\"},{\"key\":\"method\",\"value\":\"try_increment\"}]}]}]","logs":[{"events":[{"type":"execute","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"}]},{"type":"message","attributes":[{"key":"action","value":"execute"},{"key":"module","value":"wasm"},{"key":"sender","value":"wasm1j6aldkw59usszphp2jc9jlczxjzc76jdzspf8a"}]},{"type":"wasm","attributes":[{"key":"_contract_address","value":"wasm1mkymgyhkdly5enpeq7tlyntnxvl539qnam2v3d"},{"key":"method","value":"try_increment"}]}]}],"gas_wanted":"115945","gas_used":"98755"}

Ok!
```

To understand why the argument is `'{"increment":{}}'`, if we open `src/contract.rs` and inspect `pub fn execute` we'll see the case matching statement that matches our JSON argument:
```javascript
pub fn execute(
  deps: DepsMut,
  _env: Env,
  info: MessageInfo,
  msg: ExecuteMsg,
) -> Result<Response, ContractError> {
  match msg {
    ExecuteMsg::Increment {} => try_increment(deps), // Here it is
    ExecuteMsg::Reset { count } => try_reset(deps, info, count),
  }
}
```

**Note: `enum` attributes again are converted. `ExecuteMsg::Increment {}` becomes `{"increment":{}}` in the CLI.**

Provided our `{"increment":{}}` transaction succeeded, if we query `count` again it will have increased by `1`:
```bash
archway query contract-state smart --args '{"get_count": {}}'
```

Now outputs:
```bash
Attempting query...

{"data":{"count":1}}

Ok!
```

### Congrats, you built your first dApp!