---
sidebar_position: 1
---

BTC Connect, powered by Particle Network, is introduced as the first account abstraction protocol designed for the Bitcoin ecosystem. It implements the ERC-4337 standard on EVM-compatible Bitcoin Layer-2 solutions, enabling native Bitcoin wallets (such as UniSat, OKX, or BitGet) to control smart accounts on these Layer-2 networks. This is achieved by assigning an EVM-based smart account to a user’s Bitcoin wallet, allowing seamless interaction between Bitcoin Layer-1 transactions and Layer-2 smart contract functionalities without requiring users to switch wallets or interfaces. BTC Connect includes components like a smart account, Paymaster, Bundler, and a Bitcoin-specific modal, facilitating features such as gasless transactions, batched operations, and session keys. The protocol leverages the inherent compatibility between Bitcoin and Ethereum’s ECDSA (secp256k1) signature generation, enabling Bitcoin wallets to sign EVM UserOperations directly, bridging the gap between Bitcoin’s native ecosystem and EVM-compatible Layer-2s.

To begin integrating BTC Connect, go to its [SDKs (Desktop)](https://developers.particle.network/api-reference/btc/desktop/web) page.
