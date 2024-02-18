# Rollup Architecture

![ArchOverview](/img/ArchOverview.png)

## Basic Concepts

This is an important part for understanding the whole design of bitcoinZK. As Sovereign Rollup being a highly vague concept, we will articulate our insights into the L2/Rollup architecture and our actual design.

If accurately defined, bitcoinZK is a ZK-featured, sovereign style, rollup-like Layer2 for Bitcoin.

The purpose of a Bitcoin L2, in a nutshell, is to scale Bitcoin (L1), in terms of performance (higher throughput, lower fees) or capability (L2 achieves what L1 cannot do, e.g. Turing-complete smart contracts for Bitcoin). Any network that meets such purpose can be defined as a Bitcoin L2.

The concept of Rollup, however, is slightly different. Rollup is more of a specific implementation method for a L2 network where L2 nodes execute Txs and submit the data to L1 for state finality. Note that, however, L2 does not necessarily have to be implemented with Rollup because there are other ways to scale L1 besides Rollup. Rollup is heated discussed because the Ethereum ecosystem has chosen a "Rollup-centric" development roadmap (compared to previous solutions i.e. Plasma, state channels) for its scaling issue and this primitive has been somehow migrated to the Bitcoin scaling solutions today.

Further, we tend to use the term "Sovereign-style & Rollup-like" to better describe bitcoinZK as an implementation of Bitcoin L2 because we believe they are currently the closest definitions we can find from the market. In fact, the design of bitcoinZK differs from any other existing L2s.

## BitcoinZK Rollup Anatomy

### L2 and Rollup Explained

We approach the operation of a Rollup-like L2 from two different perspectives.

The first perspective is: **How does L2 achieve security and state finality for the transaction executed?**

![RollupStructure1](/img/RollupStructure1.png)

L2 (as a Rollup to L1) is a partially independent network that retains some components of its own and inherits/borrows the remaining components from L1. Generally, we consider four typical components:

- **Consensus**: Consensus forms the foundation and determines within a group of nodes on validity of transations in the network.

- **Execution**: Nodes execute transactions and calculate the transition to a new state from the previous one.

- **Settlement**: Settlement signifies the finality of the state transition for transactions (so that transactions are invocably recorded on a blockchain).

- **Data Availability**: DA represents the publication of data (such as transaction data, ZK Proofs, etc.). Users or other third parties will be able to verify that the transactions executed on L2 and the state transitions are correct based on the data disclosed.

A very typical Rollup is the Smart Contract Rollup on Ethereum. On L2, the Sequencer(s) execute all incoming transactions and "roll up" the transaction data as well as the state transition results to the L1. On L1, all transactions can be re-executed to ensure that the state transition on L2 is valid. In ZK Rollup, we use ZK Proofs to prove the validity of transactions executed on L2, achieving higher data compression rate and better privacy-preserving features.

Such Smart Contract Rollups essentially delegate the execution to L2, alleviating the resource constraints on execution on Ethereum L1. To ensure that execution on L2 can be trusted, Ethereum L1 still bears the responsibilities of Data Availability and Settlement (both backed uy by Ethereum's PoS consensus).

### Promblems for Bitcoin

Bitcoin is very different. If we want to achieve Turing-complete smart contract capabilities (like EVM), we need to address the issue that Bitcoin L1 cannot natively verify transactions (or ZK Proofs) from L2 Rollups. This is a big problem. Some solutions attempt to submit commitments of transaction data or ZK Proof data to Bitcoin L1, but at most, this serves as some kind of data attestation. Note that you cannot even directly obtain this data and verify transactions from Bitcoin L1; instead you need to obtain it from a CSV network. This "CSV+Data Attestation" approach cannot achieve satisfactory security level bacause in such case Bitcoin L1 provides almost none of the four key components for the rollup.

The second perspective is more specific on **How do we ensure user actions on L2 and L1-L2 bridging are executed in a secure, minimized-trust way?**

- From an internal perspective, L2 needs to execute all transactions occurring within L2 and calculate corresponding state transitions.

- From an external perspective, L2 needs to ensure that bridged assets from L1 to L2 and their withdrawals are secure enough.

We find that the external perspective which requires secure asset bridging between L1 and L2 poses a greater challenge for a Bitcoin L2, because the risk of losing L1 assets is defnitely a huge disaster for any L2 user, and because secure asset bridging on a Bitcoin L2 is way more difficult than that on a Ethereum one.

In an Ethereum Rollup, L1-L2 bridging is of less challenging. An Ethereum L2 will deploy dedicated smart contracts on the L1, which handle deposits of L1 assets and redemption of L2 assets. This can be inherently trustless, or very close to trustless. The only flaw may lie in the risk of malicious contract upgrade and L2 sequencer withholding user requests. Fortunately Ethereum L2s have several measures to mitigate risks, such as contract upgrade waiting period and mandatory withdrawal / escape hatch mechanisms.

In Bitcoin L2, the situation becomes tricky. We cannot deploy a smart contract on Bitcoin L1 to handle asset bridging behavior, leading to Bitcoin being completely unaware of L2's status. Therefore, it is inevitable some additional trust assumptions to be introduced for addressing asset bridging risks. This is why BitcoinZK brings a upgradable, minimized-trust zkBridge to its users for safe opt-in to their L2 journey.

### a Sovereign-style Solution

Based on the challenges outlined for Bitcoin L2, we have considered a Sovereign Rollup solution. In fact, we have not found a way to accurately describe the bitcoinZK solution, but we believe that Sovereign Rollup (more precisely, Sovereign-style Rollup-like) is a relatively close definition.

An L2 implemented as a Sovereign Rollup can strip off several or even all of the four components (Consensus, Execution, DA, Settlement) from L1. The term "sovereign" means that L2 can have independent Consensus and establish DA and Settlement on top of it, rather than relying on L1 consensus. Thus, such sovereign L2 can detach from dependence on L1 for consensus and security and have more flexibility in terms of upgrading mechanism, governance, and customization.

![RollupStructure2](/img/RollupStructure2.png)

For ZK Rollup, sovereign L2 brings additional benefits. ZK Proofs can not only be used to verify the results of L2 execution on-chain but also to verify more states or message passing in off-chain or cross-chain scenarios. This will greatly expand the application potential of our Bitcoin L2.

The reasons for adopting sovereign L2 when we take a Bitcoin perspective are more concise and sufficient:

- Bitcoin cannot natively support Smart Contract Rollups.
- L2 cannot directly inherit Bitcoin's powerful PoW consensus.

These are the most important reasons why we consider a sovereign-style L2 because we can always choose the best alternatives regarding the four key components and preserve more room for future upgrades.
