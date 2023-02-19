# PeerStream

PeerStream is a cutting-edge web3-based video streaming platform that aims to create a more open and inclusive ecosystem for video content. By leveraging the power of web3 technology, PeerStream empowers creators and viewers alike to experience a more transparent and secure live streaming experience.

## Problem it Solves

Traditional video streaming platforms like YouTube and Twitch have a few limitations that PeerStream addresses:

* **Single point of failure** : PeerStream ensures that there is no single point of failure, which means that the system won't fail completely if one part of it fails.
* **Privacy** : Web3 technology allows users to interact with the platform without revealing their personal information, as the user's wallet address serves as their identity.
* **Transparency** : Videos uploaded to PeerStream are permanently stored on the LivePeer network, making them virtually impossible to take down. This promotes the concept of free content open to all.
* **Interoperability** : PeerStream can be integrated with other web3-based services, such as NFTs.


## Challenges we ran into

During development, the PeerStream team faced several challenges, including:

* **Indexing data on the blockchain on the Graph** : Indexing the contract's storage on the Goerli Testnet using the `@graphprotocol/graph-cli` took a long time as the start block was difficult to identify.
* **Slow Goerli Testnet** : While a local blockchain would have facilitated faster development, PeerStream opted to use the Goerli Testnet for more production-friendly code, which slowed down development to a certain extent.
* **Integration with LivePeer** : The `createAsset` function provided by `useAsset` in `@livepeer/react` did not return the data of the uploaded video, which required the team to spend a significant amount of time finding the appropriate API. Furthermore, subgraph could not be indexed over the LivePeer assets, so the team had to store the uploaded video data on a custom blockchain network (in this case, the Goerli Testnet) and index it using their subgraph.
