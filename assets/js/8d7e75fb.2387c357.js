"use strict";(self.webpackChunkbitcoinzk_docs=self.webpackChunkbitcoinzk_docs||[]).push([[839],{8186:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=i(5893),s=i(1151),a=i(4996);const r={id:"introduction",title:"",slug:"/",hide_table_of_contents:!1},o=void 0,c={id:"overview/introduction",title:"",description:"Overview",source:"@site/docs/overview/introduction.md",sourceDirName:"overview",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"introduction",title:"",slug:"/",hide_table_of_contents:!1},sidebar:"mySidebar",next:{title:"",permalink:"/resources/repositories"}},d={},l=[{value:"Overview",id:"overview",level:2},{value:"Key Characteristics",id:"key-characteristics",level:2},{value:"Modular Architecture",id:"modular-architecture",level:3},{value:"Ethereum Security",id:"ethereum-security",level:3},{value:"Decentralized Sequencers",id:"decentralized-sequencers",level:3},{value:"Threshold Signature Scheme",id:"threshold-signature-scheme",level:3}];function h(e){const t={h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"BitcoinZK is a layer 2 modular blockchain that interconnects and scales Bitcoin and Ethereum. It allows users to transfer and use their $BTC assets on Ethereum without sacrificing security, speed, or cost. BitcoinZK achieves this by using a decentralized sequencer network and a Threshold Signature Scheme (TSS) to bridge $BTC to its own layer 2 chain, which is compatible with Ethereum Virtual Machine (EVM) and supports zero-knowledge proofs (ZKPs). BitcoinZK enables rich Defi or other DApp scenarios for the bridged $BTC, as well as other Ethereum assets, and submits the execution result, along with their ZK proofs, to Ethereum layer 1 for on-chain verification and settlement."}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)("img",{src:(0,a.Z)("/img/overview/introduction/overview.png"),style:{width:660}})}),"\n",(0,n.jsx)(t.h2,{id:"key-characteristics",children:"Key Characteristics"}),"\n",(0,n.jsx)(t.h3,{id:"modular-architecture",children:"Modular Architecture"}),"\n",(0,n.jsx)(t.p,{children:"BitcoinZK takes a modular approach with chain design, where transaction execution, consensus, data availability, and settlement are handled by separate modules. The initial version of BitcoinZK functions as a L2 ZK validium with modular data availability. Hence,"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Bitviva\u2019s execution layer provides an EVM-compatible environment for transaction execution, where the sequencer produces blocks on L2 and sends state root data and ZK proofs to L1."}),"\n",(0,n.jsx)(t.li,{children:"Consensus and settlement take place on Ethereum L1, where Bitviva\u2019s smart contract verifies the ZK proofs and updates the state root accordingly. BitcoinZK leverages Ethereum\u2019s security and finality, and benefits from its network effects and ecosystem."}),"\n",(0,n.jsx)(t.li,{children:"Data availability services are provided by a set of DAC (Data Availability Committee) nodes, which store and sign the L2 block data to ensure the validity and liveness of the chain. BitcoinZK also plans to integrate with some 3rd party Alt-DA (Alternative Data Availability) solutions to further enhance the data availability and decentralization of the network."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ethereum-security",children:"Ethereum Security"}),"\n",(0,n.jsx)(t.p,{children:"As stated above, BitcoinZK is an Ethereum validium that uses Ethereum as its consensus and settlement layer, thus deriving security from Ethereum. BitcoinZK does not require any trust assumptions or additional validators on its own layer 2 chain, as all the state transitions are verified by ZK proofs on Ethereum. BitcoinZK also inherits the composability and interoperability of Ethereum, as users can seamlessly interact with other Ethereum-based protocols and applications using their bridged assets."}),"\n",(0,n.jsx)(t.h3,{id:"decentralized-sequencers",children:"Decentralized Sequencers"}),"\n",(0,n.jsx)(t.p,{children:"BitcoinZK employs a decentralized sequencer network to avoid the single-point failures derived from centralized sequencers. A sequencer is a node that collects and executes transactions on Bitviva\u2019s layer 2 chain, and submits the state root data and ZK proofs to Ethereum. BitcoinZK uses a proof-of-staking mechanism to select and incentivize sequencers, and ensures that they follow the protocol rules and do not censor or manipulate transactions. Bitviva\u2019s decentralized sequencer network also provides benefits like strong MEV (Miner Extractable Value) prevention, enhanced governance and participation, and reduced reliance on third-party operators."}),"\n",(0,n.jsx)(t.h3,{id:"threshold-signature-scheme",children:"Threshold Signature Scheme"}),"\n",(0,n.jsx)(t.p,{children:"BitcoinZK uses TSS (Threshold Signature Scheme) to ensure the network has reached consensus about state transitions. TSS is a cryptographic technique that allows a group of nodes to generate a signature that is equivalent to a single signature, without revealing their individual secret keys or requiring a trusted dealer. BitcoinZK uses FROST (Flexible Round-Optimized Schnorr Threshold) signatures, which are a fast and secure variant of Schnorr signatures that support both interactive and non-interactive signing protocols. Bitviva\u2019s TSS nodes act as a decentralized custodian of the bridged $BTC, and sign transactions that move $BTC across chains. Bitviva\u2019s TSS reduces the trust risk and improves the efficiency of the cross-chain bridge."})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}}}]);