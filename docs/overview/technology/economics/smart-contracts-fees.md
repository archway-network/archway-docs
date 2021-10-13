---
sidebar_position: 4
---

# Smart Contract Fees

Smart contract platforms today charge network fees that are based on the amount of computational processing required by on-chain transactions. While this method of measurement works for the underlying economics of a network, it does not support use cases where a developer has to cover additional costs such as distributed storage, access to off-chain processing, external data sources, or other premium features such as audited and insured contracts.

With Archway, dApps can define a custom smart contract fee for interacting with their contracts. Also known as the _take rate_, this fee provides developers a flexible way to charge different fee levels that are based on their specific use case and operational needs.

By default, the smart contract fee is set to 0 $ARC. On initial deployment, the dApp developer can define their fee. The fee is configurable and the dApp owner can adjust it any time, even after the contract has been deployed.

To streamline the user experience, the smart contract fee is embedded directly in the network fee, so end users are only presented with a single combined fee when signing a transaction.

Since most dApps are composed of smaller, more modular pieces of code and layers of contracts, individual developers can focus on building even smaller snippets of code. They can write and monetize a single contract rather than a fully featured dApp. Since contracts can be integrated into multiple dApps, developers can earn multiple lines of fees across any user base that interacts with their code.

