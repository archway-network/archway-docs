---
sidebar_position: 10
---

# CLI

## Installation
The first thing we need to in order to delegate our stake is to install the archwya CLI, you can find how to do this in our [installation guide](./create/getting-started/install.md)

## Create Account
### Using a ledger device
When you initialize your ledger, a 24-word mnemonic is generated and stored in the device. This mnemonic is compatible with Cosmos and Cosmos accounts can be derived from it. Therefore, all you have to do is make your ledger compatible with gaiad. To do so, you need to go through the following steps:

1- Download the Ledger Live app here (opens new window).
2- Connect your ledger via USB and update to the latest firmware
3- Go to the ledger live app store, and download the "Cosmos" application (this can take a while). Note: You may have to enable Dev Mode in the Settings of Ledger Live to be able to download the "Cosmos" application.
4- Navigate to the Cosmos app on your ledger device
5- To create an account, use the following command:
```
archwayd keys add <yourAccountName> --ledger
```

- `<yourKeyName>` is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.

#### Warning
This process will only work while the Ledger is plugged in and unlocked.

### Computer 
To generate an account, use the following command:

```
archwayd keys add <yourKeyName>
```

The command will generate a 24-words mnemonic and save the private and public keys for account 0 at the same time. Each time you want to send a transaction, you will need to unlock your system's credentials store. If you lose access to your credentials storage, you can always recover the private key with the mnemonic.

- `<yourKeyName>` is the name of the account. it is a reference to the account number used to derive the key pair from the mnemonic. You will use this name to identify your account when you want to send a transaction.
- You can add the optional `--account` flag to specify the path (0, 1, 2, ...) you want to use to generate your account. By default, account 0 is generated.

### Warning
After securing your mnemonic, you can delete your bash history to ensure no one can retrieve it
```
history -c
rm -rf ~/.bash_history`
```

# Keplr

This quick start guide helps you set up a wallet and manage your tokens with it. A popular wallets for Cosmos-based coins is `Keplr`, a wallet that is similar to [MetaMask](https://metamask.io/).

## Install 
Open you _Google Chrome_ browser and head over to this website: https://wallet.keplr.app/ 

Open a _Google Chrome_  webbrowser and navigate to https://wallet.keplr.app/.

If you have not already installed Keplr, select the message box to install it.

You are redirected to the page where you can to install the Keplr extension. 
Select `Add to Chrome` and install the extension.

When the Keplr extension is installed, the Keplr icon shows on your web browser. 

![](./assets/keplr01.png)


## Open Keplr

Select the Keplr icon on your web browser. You see a screen like this:

![](./assets/keplr02.png)


## Create an Account

Select `Create new account` to see the following form:

![](./assets/keplr03.png)

You see a `Mnemonic Seed` phrase that is generated specifically for your account. You may use this phrase to recover your account in case you install your Keplr extension or forget your password.

**Attention**: Make sure to write the mnemonic phrase down, print it, or make several copies of it and keep them in a safe place.

You can select a 12- or 24-words mnemonic phrase. Either option is fine, the 24-word mnemonic is more secure.

Enter an account name, write down your password, and select `Next`.

## Confirm Mnemonic Phrase

After the following screen appears, select the mnemonic phrase exactly in the same order that you saw in the previous screen.

![](./assets/keplr04.png)

## Register

When all the words are put in the right order, select the `Register` button and you are all set.

![](./assets/keplr05.png)

## Working with Keplr

The next time you select the Keplr extension icon, you see this window since you have an account.

![](./assets/keplr06.png)

In this window, you can view your total balance and perform multiple actions with our account.

### Your Wallet Address

To view and copy your wallet address, hover over the text starting with `cosmos`. You can share this address with the people who want to transfer tokens to your account.

![](./assets/keplr07.png)

### Make a Deposit

Select the `Deposit` button. The wallet address is shown in a [QR Code](https://en.wikipedia.org/wiki/QR_code) format. You can let a person scan the QR code when they want to transfer some crypto to your wallet.

![](./assets/keplr08.png)

### Other Cosmos Tokens

Select the `Cosmos` dropdown on top of the window to switch the view to other Cosmos-based crypto tokens.

![](./assets/keplr09.png)

### Account Management

To manage your account, select the account icon. You can also view the mnemonic phrase in your account.

![](./assets/keplr10.png)


## CLI Wallet

First we need to have our node running one validator, so please set it up here: [Running a Validator Node](./validator/running-a-validator-node.md).

### Querying the balance of the wallet

Now let's see the balance of our wallet. 
We can query any account with the following command:

```bash
archwayd query bank balances <Wallet_Address>
```

If we forget our wallet address we can retrieve its details via this command:

```bash
archwayd keys show my-wallet
```

So in our example we can see the balance of our wallet by running this command:

```bash
archwayd query bank balances $(archwayd keys show my-wallet -a)
```

### Transferring ARCH tokens to our wallet

Now let's transfer some `ARCH` tokens from our validator account to our newly created wallet.


```bash
archwayd tx send $(archwayd keys show my-validator-account -a) $(archwayd keys show my-wallet -a) 12ARCH --fees 0.1ARCH --chain-id my-chain
```

Then, you should be prompted with the following confirmation question:

```json
{
  "body": {
    "messages": [
      {
        "@type": "/cosmos.bank.v1beta1.MsgSend",
        "from_address": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz",
        "to_address": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l",
        "amount": [
          {
            "denom": "ARCH",
            "amount": "12"
          }
        ]
      }
    ],
    "memo": "",
    "timeout_height": "0",
    "extension_options": [
      
    ],
    "non_critical_extension_options": [
      
    ]
  },
  "auth_info": {
    "signer_infos": [
      
    ],
    "fee": {
      "amount": [
        {
          "denom": "ARCH",
          "amount": "0"
        }
      ],
      "gas_limit": "200000",
      "payer": "",
      "granter": ""
    }
  },
  "signatures": [
    
  ]
}

confirm transaction before signing and broadcasting [y/N]: y
```

Enter `y` and hit the enter key.

Then we need to wait few moments for our transaction to go through. If things go well, we will see an output like this:

```json
{
  "height": "609",
  "txhash": "4F7AA2832D5190B68C5E4F2ABDC41B732BCCA582DCD27B0FD11898A3CBF48310",
  "data": "0A060A0473656E64",
  "raw_log": "[{\"events\":[{\"type\":\"message\",\"attributes\":[{\"key\":\"action\",\"value\":\"send\"},{\"key\":\"sender\",\"value\":\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\"},{\"key\":\"module\",\"value\":\"bank\"}]},{\"type\":\"transfer\",\"attributes\":[{\"key\":\"recipient\",\"value\":\"archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l\"},{\"key\":\"sender\",\"value\":\"archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz\"},{\"key\":\"amount\",\"value\":\"12ARCH\"}]}]}]",
  "logs": [
    {
      "events": [
        {
          "type": "message",
          "attributes": [
            {
              "key": "action",
              "value": "send"
            },
            {
              "key": "sender",
              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"
            },
            {
              "key": "module",
              "value": "bank"
            }
          ]
        },
        {
          "type": "transfer",
          "attributes": [
            {
              "key": "recipient",
              "value": "archway12zjz75hq3gmhc75pmcs9klc26mrhyvkueghy2l"
            },
            {
              "key": "sender",
              "value": "archway1gjllda936w6hu983pcy39m2gegfa29h6tyaezz"
            },
            {
              "key": "amount",
              "value": "12ARCH"
            }
          ]
        }
      ]
    }
  ],
  "gas_wanted": "200000",
  "gas_used": "61028"
}
```

Now let's check again the balance of our wallet:

```bash
archwayd query bank balances $(archwayd keys show my-wallet -a)
```
```yml
balances:
- amount: "12"
  denom: ARCH
pagination: {}
```
