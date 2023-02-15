# Simple State
State is where the smart contract saves data and retrieves it. In a sense, the smart contract state works similarly to a database interaction layer in a traditional application.

The most simple way of writing state is by writing a single item.

For example, in the cw20 contract, TokenInfo is written when the contract is instantiated. 

First, a TokenInfo type is declared in state.rs:

```rust
#[derive(Serialize, Deserialize, Clone, PartialEq, JsonSchema, Debug)]
#[serde(rename_all = "snake_case")]
pub struct TokenInfo {
  pub name: String,
  pub symbol: String,
  pub decimals: u8,
  pub total_supply: Uint128,
  pub mint: Option<MinterData>,
}
```
Then the storage is initialized:
```rust
pub const TOKEN_INFO: Item<TokenInfo> = Item::new("token_info");

In the contract, we see in the instantiate function how data can be saved to this:

let data = TokenInfo {
name: msg.name,
symbol: msg.symbol,
decimals: msg.decimals,
total_supply,
mint,
};
TOKEN_INFO.save(deps.storage, & data) ?;
```
You can get the cw20 base contract by choosing it as the starter template when [setting up the project via the archway CLI](https://docs.archway.io/docs/create/getting-started/setup)