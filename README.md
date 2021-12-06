# MAGE WARS

#### This is an NFT game based that allow users to mint their Mage characters and choose a suiting name for their Mage. Each minted Mage has unique attributes. They include:

- DNA: A unique identifier of each Mage's powers.
- Rarity: Ranges from "Original", "Rare" and "Super Rare"
- Level: Initial level is set to 1.
- Description: The forward and backward velocity as well as maximum jump height.

#### Tech Stack

##### Minted NFTs are stored on IPFS for hot storage and Filecoin for cold storage using the nft.storage library. Example code snippet below:

```
const client = new NFTStorage({ token: NFT_STORAGE_KEY });
  const metadata = await client.store({
    name,
    description: "Some texts",
    image: new File(['./assets/example.png'], 'question.png', { type: 'image/jpg' })
  });
```
The smartcontract is deployed to the ### Polygon Mumbai network

# Built With
- Solidity
- React
- JavaScript
- IPFS/Filecoin
- Hardhat
- Ethers
- Polygon
- Alchemy
- HTML5
- CSS3