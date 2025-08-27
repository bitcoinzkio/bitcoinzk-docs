---
sidebar_position: 2
---


The purpose of a Bitcoin Layer-2, in a nutshell, is to scale Bitcoin (Layer-1), in terms of performance (higher throughput, lower fees) or capability (Layer-2 achieves what Layer-1 cannot do, e.g., Turing-complete smart contracts for Bitcoin). Any network that meets such a purpose can be defined as a Bitcoin Layer-2.

## Layer-2 Framework

Layer-2 is a partially independent network that retains some components of its own and inherits/borrows the remaining components from Layer-1. Generally, we consider four typical components:

* **Consensus**: Consensus forms the foundation and determines within a group of nodes on validity of transactions in the network.

* **Execution**: Nodes execute transactions and calculate the transition to a new state from the previous one.

* **Settlement**: Settlement signifies the finality of the state transition for transactions (so that transactions are invocably recorded on a blockchain).

* **Data Availability**: DA represents the publication of data (such as transaction data, ZK Proofs, etc.). Users or other third parties will be able to verify that the transactions executed on Layer-2 and the state transitions are correct based on the data disclosed.

A very typical Rollup is the Smart Contract Rollup on Ethereum. On Layer-2, the Sequencer(s) execute all incoming transactions and "roll up" the transaction data, as well as the state transition results, to Layer-1. On Layer-1, all transactions can be re-executed to ensure that the state transition on Layer-2 is valid. In ZK Rollup, we use ZK Proofs to prove the validity of transactions executed on Layer-2, achieving a higher data compression rate and better privacy-preserving features.

Such Smart Contract Rollups essentially delegate the execution to Layer-2, alleviating the resource constraints on execution on Ethereum Layer-1. To ensure that execution on Layer-2 can be trusted, Ethereum Layer-1 still bears the responsibilities of Data Availability and Settlement (both backed by Ethereum's PoS consensus).

![](/img/diagram.png)

## BitcoinZK Implements

The challenge we face lies in the fact that Bitcoin, unlike Ethereum, lacks a mature smart contract infrastructure; implementing a Layer-1 and Layer-2 architecture akin to Ethereum’s model is a formidable task. Ethereum benefits from a robust ecosystem where Layer-1 (Layer-1) handles consensus, execution, settlement, and data availability, while Layer-2 (Layer-2) solutions like rollups offload computational burdens, relying on Ethereum’s Proof-of-Stake (PoS) consensus for security. Bitcoin, however, with its Proof-of-Work (PoW) consensus and limited scripting capabilities before Taproot, requires a novel approach to achieve a similar Layer-2 framework. This is where our technical foundations, as outlined earlier, come into play, providing a pathway to overcome these hurdles.

Our technical foundations, encompassing Zero-Knowledge (ZK) proofs and the BitVM framework, form the bedrock of this solution. Zero-Knowledge proofs allow us to maximize data compression by generating succinct cryptographic proofs that validate off-chain computations, reducing the on-chain data footprint to a mere fraction—typically around 1 KB per batch—compared to the full transaction data. BitVM, built upon the Taproot upgrade, introduces a paradigm that makes computation verification on Bitcoin feasible. By simulating logic gate circuits (e.g., NAND gates) and leveraging Taproot’s Merkelized Abstract Syntax Trees (MAST) and Schnorr signatures, BitVM enables Bitcoin’s mainnet to verify complex state transitions offloaded to Layer-2, ensuring security and efficiency without altering Bitcoin’s consensus rules. Together, these technologies provide a viable route to extend Bitcoin’s capabilities, mirroring the Layer-2 rollup model while adapting to its unique constraints.

Despite these advancements, achieving a fully realized Layer-2 solution in a single step remains a daunting challenge due to Bitcoin’s inherent limitations, such as its low throughput (approximately 7 transactions per second) and the complexity of integrating ZK proofs directly on its mainnet. To address this, we have structured our roadmap into two phases, ensuring a gradual and robust development process.&#x20;

### Silver Mainnet

The first phase, the Silver Mainnet, leverages the EVM platform as an interim solution for Data Availability (DA) and ZK proof verification. EVM platform such as ETH/BSC, with their high throughput, low Gas fees, serves as a temporary validation layer. In this phase, BitcoinZK offloads transaction execution and ZK proof generation to the EVM platform, where Sequencer nodes process incoming transactions and roll up the transaction data and state transition results.&#x20;

![](/img/diagram-1.png)

### Gold Mainnet

The second phase, the Gold Mainnet, aims to fully transition ZK proof verification onto the Bitcoin mainnet, eliminating reliance on external networks like ETH/BSC. This ambitious step involves optimizing BitVM to handle both the generation and verification of ZK proofs directly on Bitcoin. To achieve this, we will enhance BitVM’s logic gate circuits and Taproot scripts to support efficient on-chain verification of recursive ZK-SNARKs or STARKs, reducing proof sizes and verification times. This phase will require significant advancements in precompiled circuit optimization and parallel verification, ensuring that BitcoinZK can sustain high throughput and low costs while maintaining Bitcoin’s unparalleled security. By completing this transition, BitcoinZK will establish a fully decentralized Layer-2 solution, inheriting Bitcoin’s robust consensus and settlement layer, and positioning itself as a leader in the BTCFi ecosystem.

![](/img/diagram-2.png)
