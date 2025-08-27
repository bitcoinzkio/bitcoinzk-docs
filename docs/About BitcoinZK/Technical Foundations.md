---
sidebar_position: 1
---

## Zero-knowledge

### What and Why

ZK is a cryptographic method that allows one party (the prover) to prove to another party (the verifier) that a statement is true without revealing any additional information other than the truthfulness of the statement.

Constructing ZK generally requires satisfying three important properties:

* **Completeness**: The prover indeed possesses the answer to a certain assertion and can convince the verifier.

* **Soundness**: If the prover does not possess the answer to the assertion, it cannot convince the verifier.

* **Zero-knowledge**: The verifier knows only the result of the assertion judgment and is ignorant of any other information.

In the field of cryptography, ZK has become a relatively mature and widely accepted pattern, especially in the Layer-2 scenario, where Layer-2 needs to prove to Layer-1 that its execution is correct. We try not to delve too much into the technical details of ZK (we don't seek to bring any innovation at the level of ZK algorithms or mathematics), but rather focus on the advantages of ZK and the reasons for using ZK to build this Bitcoin Layer-2 solution.

In theory, Layer-2s can submit all transaction data to Layer-1 and have Layer-1 execute all the transactions for verification. However, this approach consumes a lot of resources. The market has widely accepted the verification scheme called Fraud Proof (the OptimismLayer-2 style) to save resources consumed by on-chain verification. Here, the advantages of ZK come into play because ZK proofs are succinct, meaning that verifiers only need to perform fewer computations (much less than generating ZK proofs) to complete the verification. This is perfect for Layer-2 solutions because Layer-2 exists to solve the performance limitations and resource shortages (mainly execution resources) of Layer-1. Thus, making Layer-2s spend more resources to generate proofs while releasing Layer-1 verifiers with much fewer resources to verify a Validity Proof becomes a win-win situation.

The difference between Bitcoin and Ethereum is that Bitcoin shows more limitations in its ability to execute smart contracts, which causes its inability to natively verify transactions submitted from Layer-2. We have noticed some recent attempts, such as bitVM, which are considering bringing Bitcoin the ability to leverage existing scripts to verify off-chain transactions (EVM). Therefore, out of rigor, we tend to conclude that "Bitcoin's current scripts are unable to natively verify general purpose computation from Layer-1 with feasibility from an engineering point of view," rather than making absolute judgments, such as "Bitcoin will never have such capabilities in the future."

Long story short, ZK demonstrates some great advantages to meet the essential requirements of a Bitcoin Layer-2. First, the limitations of Bitcoin's scripting capabilities make non-ZK Layer-2 solutions extremely unfriendly to operators and verifiers. Second, the core advantages of ZK, such as succinctness, verification resource friendliness, and privacy-preserving, make ZK proofs easily verifiable by any third party, providing us with a lot of flexibility and space for customization in the design. In the long run, these key features of ZK will serve Layer-2s better with more potential breakthroughs.

### 100% ZK Features

As the name suggests, bitcoinZK is strongly committed to ZK properties. Specifically, we aim to achieve 100% ZK provability and 100% ZK verifiability.

**100% ZK provability** means that all actions occurring on Layer-2, including all Layer-2 executed ones and asset bridging operations between Layer-1 and Layer-2, will be able to generate ZK Proofs for their validity.

Since Bitcoin miners cannot directly verify the validity of Layer-2 Txs, any smart contract-style Bitcoin Layer-2 cannot inherit the powerful Bitcoin PoW consensus, unless we only resort to Bitcoin's existing scripts to build Layer-2 capabilities. Based on this fact, we believe that constructing ZK Proofs for all user actions on Layer-2, combined with a robust and trusted verification mechanism for their state finality, is the best way to ensure the security of a Bitcoin Layer-2.

**100% ZK verifiability** refers to the property that all ZK Proofs generated on Layer-2 can be verified by any third party. The challenge for BitcoinZK lies in how we can manage the verification process in a more trustless way.

* BitcoinZK avoids introducing Client-side Verification (CSV) schemes, unless necessary. The bad thing about CSV is that it introduces new trust assumptions and some extent of permission, which weakens the trust and decentralization level of the Layer-2 network.

* BitcoinZK introduces trusted data availability (DA) layers for all Layer-2 Txs and Proofs data

## **BitVM framework**

BitVM is an innovative computational paradigm for Bitcoin, proposed by Robin Linus, designed to enable **Turing-complete computation verification** without requiring changes to Bitcoin’s consensus rules. Unlike Bitcoin Script, which is traditionally limited to simple payment and conditional logic, BitVM achieves complex computation verification by decomposing computations into logic gates (e.g., NAND gates), effectively simulating arbitrary computations within Bitcoin’s framework. The core concept of BitVM is “optimistic verification,” where the majority of computations are performed off-chain, and on-chain verification is triggered only in the case of disputes through a fraud-proof mechanism.&#x20;

### On-chain verification

BitVM serves as the cornerstone of the on-chain verification framework, acting as a critical bridge between ZK computation and the security of the Bitcoin mainnet. BitVM provides a mechanism for on-chain verification, ensuring that smart contract execution results are trustworthy when settled on the Bitcoin mainnet.&#x20;

* BitcoinZK executes smart contracts (e.g., DeFi protocols written in Solidity) off-chain using Prover nodes, which generate state transitions  S→S′ and Zero-Knowledge Proofs (ZK Proofs).&#x20;

* Submit ZK proofs and state roots to the Bitcoin mainnet via Taproot scripts

* BitVM’s logic gate circuit verification ensures the correctness of the computations. Specifically, BitVM decomposes the smart contract’s execution logic into a sequence of Boolean operations, encoded as a Merkle tree within Taproot’s MAST structure.&#x20;

* The verification process checks the consistency of sub-circuits `T_i` with inputs ( x ) and outputs ( y ), formalized as `\text{Verify}(T_i, x, y)`

* If the results are invalid, a Verifier can initiate an on-chain challenge, ensuring the integrity of BitcoinVM’s state transitions.

### Optimizations in BitcoinZK

To optimize performance, BitcoinZK enhances BitVM with several improvements. Precompiled circuits for common EVM operations (e.g., ADD, MUL) reduce the computational overhead of both off-chain execution and on-chain verification. Parallel verification, enabled by Taproot’s MAST structure, allows multiple sub-circuits to be verified simultaneously. Additionally, integrating recursive ZK-SNARKs enables BitcoinZK to aggregate proofs for multiple transaction batches, reducing on-chain data from 10 KB to 1 KB. These optimizations ensure that BitcoinZK can handle high-throughput scenarios efficiently while maintaining low costs.

### Pseudo-Code Implementation

Below is a pseudo-code example that represents how a precompiled ADD circuit might be implemented and verified in BitcoinZKa&#x20;

```plain&#x20;text
// Pseudo-code for Precompiled ADD Circuit in BitcoinZK/BitVM

// Define the circuit structure (Bristol format translated to BitVM logic)
circuit ADD_Circuit {
    input a[256];    // 256-bit input a
    input b[256];    // 256-bit input b
    output sum[256]; // 256-bit sum output
    output carry;    // Carry-out bit

    // Precompiled logic gate sequence for 1-bit addition (repeated 256 times)
    for i = 0 to 255 {
        wire a_inv[i] = NOT(a[i]);          // Invert a[i]
        wire and_ab[i] = AND(a[i], b[i]);   // a[i] AND b[i]
        wire and_a_inv_b[i] = AND(a_inv[i], b[i]); // NOT(a[i]) AND b[i]
        sum[i] = XOR(and_ab[i], and_a_inv_b[i]); // Sum bit = XOR of AND results
        if (i < 255) {
            carry = OR(and_ab[i], and_a_inv_b[i]); // Carry for next bit
        }
    }

    // Precompile the circuit into a standardized BitVM-friendly format
    precompile() {
        // Optimize gate sequence into Merkle tree for Taproot MAST
        MerkleRoot = hash(MerkleTree(gate_sequence));
        return MerkleRoot;
    }

    // Generate ZK Proof for off-chain execution
    generateProof(inputs: [a, b]) {
        state = executeCircuit(inputs);       // Off-chain execution
        proof = zkProve(state, MerkleRoot);   // Generate ZK Proof
        return proof;
    }
}

// BitVM Verification on Bitcoin Mainnet (Taproot Script)
verifyProof(proof, MerkleRoot, state) {
    if (zkVerify(proof, MerkleRoot, state)) {
        // Valid proof, update BitcoinZK state on mainnet
        updateState(state);
    } else {
        // Trigger BitVM fraud proof for dispute
        revealSubCircuit(proof, MerkleRoot);
        if (verifySubCircuit()) {
            penalizeProver();
        }
    }
}

// Usage in BitcoinZK
main() {
    inputs = [0x1234..., 0x5678...]; // Example 256-bit inputs a and b
    circuit = new ADD_Circuit();
    MerkleRoot = circuit.precompile();
    proof = circuit.generateProof(inputs);
    verifyProof(proof, MerkleRoot, computeState(inputs)); // Settle on Bitcoin mainnet
}
```

**Explanation**:

* **Circuit Definition**: The ADD\_Circuit defines a 256-bit adder using basic gates (NOT, AND, XOR, OR). For simplicity, this example shows a single-bit slice, repeated 256 times for a full 256-bit addition with carry propagation.

* **Precompilation**: The precompile() function optimizes the gate sequence into a Merkle tree, stored in Taproot’s MAST structure, reducing on-chain data to a fixed-size root (≈1 KB).

* **ZK Proof Generation**: The generateProof() method executes the circuit off-chain and generates a ZK Proof (e.g., using ZK-SNARK), which BitVM verifies on-chain.

* **Verification**: The verifyProof() function uses Taproot scripts to validate the proof on the Bitcoin mainnet. If invalid, BitVM’s fraud-proof mechanism reveals the faulty sub-circuit for resolution.

* **Usage**: In BitcoinZK, this precompiled circuit is used to efficiently compute additions (e.g., in DeFi smart contracts), settling the result on Bitcoin’s PoW consensus layer.
