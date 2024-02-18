# Zero-knowledge

## ZK: What and Why  

ZK is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information other than the truthfulness of the statement.

Constructing ZK generally requires satisfying three important properties:

* **Completeness**: The prover indeed possesses the answer to a certain assertion and can convince the verifier.
* **Soundness**: If the prover does not possess the answer to the assertion, it cannot convince the verifier.
* **Zero-knowledge**: The verifier knows only the result of the assertion judgment and is ignorant of any other information.  

In the field of cryptography, ZK has become a relatively mature and widely accepted pattern, especially in the Layer2 scenario where Layer2 needs to prove to Layer1 that its execution is  correct. We try not to delve too much into the technical details of ZK (we don't seek to bring any innovation at the level of ZK algorithms or mathmatics), but rather focus on the advantages of ZK and the reasons for using ZK to build this Bitcoin Layer2 solution.  

In theory, L2s can submit all transaction data to L1 and have L1 execute all the transactions for verification. However, this approach consumes a lot of resources. The market has widely accepted the verification scheme called Fraud Proof (the Optimisim style) to save resources consumed by on-chain verification. Here, the advantages of ZK come into play because ZK proofs are succinct, meaning that verifiers only need to perform fewer computations (much less than generating ZK proofs) to complete the verification. This is perfect for L2 solutions because L2 exists to solve the performance limitations and resource shortages (mainly execution resources) of the L1. Thus, making L2s spend more resources to generate proofs while releasing L1 verifiers to with much fewer resources to verify a Validity Proof becomes a win-win situation.  

The difference between Bitcoin and Ethereum is that Bitcoin shows more limitation in its ability to execute smart contracts, which causes its inability to natively verify transactions submitted from L2. We have noticed some recent attempts, such as bitVM, which are considering bringing Bitcoin the ability to leverage existing scripts to verify off-chain transactions (EVM). Therefore, out of rigor, we tend to conclude that "Bitcoin's current scripts are unable to natively verify general purpose computation from L1 with feasiblility from an engineering point of view," rather than making absolute judgments, such as "Bitcoin will never have such capabilities in the future."  

Long story short, ZK demonstrates some great advantages to meet the essential requirements of a Bitcoin L2. First, the limitations of Bitcoin's scripting capabilities make non-ZK L2 solutions extremely unfriendly to operators and verifiers. Second, the core advantages of ZK, such as succinctness, verification resource friendliness and privacy-preserving, make ZK proofs easily verifiable by any third party, providing us with a lot of flexibility and space for customization in the design. In the long run, these key features of ZK will serve  L2s better with more potential breakthrough.  


## 100% ZK Features  

As the name suggests, bitcoinZK is strongly committed to ZK properties. Specifically, we aim to achieve 100% ZK provability and 100% ZK verifiability.

**100% ZK provability** means that all actions occurring on L2, including all L2 executed ones and asset bridging operations between L1 and L2, will be able to generate ZK Proofs for its validity.  

Since Bitcoin miners cannot directly verify the validity of L2 Txs, any smart contract style Bitcoin L2 cannot inherit the powerful Bitcoin PoW consensus, unless we only resort to Bitcoin's existing scripts to build L2 capabilities. Based on this fact, we believe that constructing ZK Proofs for all user actions on L2, combined with a robust and trusted verification mechanism for their state finality, is the best way to ensure the security of a Bitcoin L2.  

**100% ZK verifiability** refers to the property that all ZK Proofs generated on L2 can be verified by any third party. The challenge for BitcoinZK lies in how we can manage the verification process in a more trustless way.  

* BitcoinZK avoids introducing Client-side Verification (CSV) schemes, unless absolutely necessary. The bad thing about CSV is it introduces new trust assumptions and some extent of permission, which weakens the trust and decentralization level of the L2 network.
* BitcoinZK introduces trusted data availability (DA) layers for all L2 Txs and Proofs data, i.e. Bitcoin and Ethereum. BitcoinZK submits orginial ZK Proofs data to Ethereum for DA and Validity Proof validation as well as commits highly compressed data to Bitcoin.  

In this section we only talk about basic principles on ZK properties for different L2 behaviors. For more implementation details, please refer to the Sovereign Rollup section (for EVM Txs) and the zkBridge section (for L1-L2 asset bridging).


