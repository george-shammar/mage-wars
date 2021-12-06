# MAGE WARS

#### This is an NFT game based that allow users to mint their Mage characters and choose a suiting name for their Mage. Each minted Mage has unique attributes. They include:

- DNA: A unique identifier of each Mage's powers.
- Rarity: Ranges from "Original", "Rare" and "Super Rare"
- Level: Initial level is set to 1.
- Description: The forward and backward velocity as well as maximum jump height.

## Video Demo
[Watch Here](https://www.loom.com/share/6d36bfb0b91c47d7947eea6a565a910b)

## Tech Stack

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

## Built With
### NFT
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
### Game
- Javascript.
- HTML.
- Bootstrap.
- Phaser3.

## Screenshots

#### World Scene
![screenshot](./world.png)

#### Battle Scene
![screenshot](./battle.png)

## Getting Started

#### Note: The application is deployed on Polygon testnet but the information below is to allow you to run a local network using Hardhat.

To run a local copy of this application, follow the steps below:

- Go to the "Code" section of this repository and press the green button that says "Code". Copy the URL or the SSH key.
- Go to the terminal and enter:
```
https://github.com/george-shammar/mage-wars.git
```
The URL or SSH are the links copied from the step above.

- If you don't have git installed, you can download this project and unzip it.
- Change directory into the folder the application is saved.
```
cd directory
```
Directory is the name of your folder.

- Once you have the local copy in your desired folder, go back to your terminal and run:
```
npm install
```
This command installs all the dependencies of the application.

Next, run Hardhat's testing network in the CLI:
```
npx hardhat node
```
Then, on a new terminal, go to the repository's root folder and run this to deploy your contract:

```
npx hardhat run scripts/deploy.js --network localhost
```

To use the application, open http://localhost:3000/ or use the command below in your terminal:

```npm start
```
##### Note: If you encounter this browser error: 
```
Module not found: can't resolve 'ipfs-car/blockstore/memory'
```
##### It is understood that nft.storage uses webpack5 while create-react-app uses webpack4, hence the reason for the imcompatibilities in dependencies. Update the module import to correct paths. Follow the steps below to fix it:
- Go into 
``` 
node_modules
``` 
and copy
```
ipfs-car
```
into 
```
nft.storage/src
``` 
- Go ahead to update the import statements in the respective files as such:
```
nft.storage/src/platform.web.js;     Update: import { MemoryBlockStore } from 'ipfs-car/dist/esm/blockstore/memory'
```
```
nft.storage/src/lib.js;     Update: import { pack } from 'ipfs-car/dist/esm/pack'
```
```
nft.storage/src/token.js;     Update: import { pack } from 'ipfs-car/dist/esm/pack'
```
- Set your network in MetaMask to localhost:8545.

- Import an account from the hardhat node in your terminal and copy the given private key in the section of Metamask that says 'import an account' and paste the copied private key from your terminal in the space where it says: 'Paste your private key string here:'. Click on 'Import'.

- You might also need to configure MetaMask to work well with Hardhat. To do that, go to Settings -> Networks -> Localhost 8545 and change the Chain ID input to 31337.

## Usage

- Upon launching the application, connect to your metamask wallet by choosing an address to connect with.
- Fill in the minting form on the page with the name you wish to call your Mage. Confirm your minting and sign off the transaction on metamask by paying the gas fee as well as the price.
- Once you've succeefully minted a Mage, confirm your minted asset through any of the available means. Check out the transaction on etherscan.
- Click on the "Reveal Mage" button to see your Mage.

# The Game
- The repository for the game is here:
[Game Repository](https://github.com/george-shammar/Legend_of_the_Seeker)

## Game Overview
- There are two game scenes apart from the other scenes that enhances usability like Options Scene, Credit Scenes e.t.c
- The two scenes are the World Scene (Or Game Scene) and the Battle Scene.
- The player moves from the World Scene to the Battle Scene and then the game is over either with a victory or a defeat.
- The game can be replayed as many times as possible.
- Use the Options menu to customize your game experience. E.g By enabling and disabling the sounds.
- You can also view how you rank on the Leader Board.

## Game Objectives

### World Scene
- Your primary objective is to win with as much points as possible so as to feature on the Leader Board.
- At the World Scene (The first scene), you are expected to gather as much fruits (points) as possible. Each fruit gathered is 100 points.
- While gathering the fruits (points), you must not get touched by the bouncing spike balls, else you enter the Battle Scene to fight the Dragons immediately.
- At the World Scene, the difficulty level increases with the number of fruits you have gathered. The number of spike balls you have to avoid is incremented with increasing points you have gathered.
- Eventually, you'll get touched by the spike balls and then you'll move to the Battle Scene - TO FIGHT.

### Battle Scene
- In this scene, you have to defeat two dragons while making sure you don't loose much points.
- Each time you get hit by a dragon, you loose 300 points.
- Each time you hit a dragon, you gain 100 points. There is a point deficit of 200 points. So, the longer you remain in the Battle Scene, the more likely it is for you to exhaust all the points you have gathered from the World Scene.
- Once your points reach 0, you have lost the Battle and the game is over.
- Your final score at that point gets registered with your name on the Leader Baord.

### Leader Board
- You feature on the Leader Board if your total score is in the first 10 highest scores.
- The scoring system is such that the total score from the first scene(World Scene) is bookmarked and used later on the Leader Board. Otherwise, if the battle is lost, the player's score would be zero with nothing to record on the Leaderboard.

## Game Controls

### World Scene
- Jump: Up Keyboard Key.
- Forward: Right Keybaord Key.
- Backward: Left Keyboard Key.

### Battle Scene
- Select Dragon to Attack: Left Keyboard Key.
- To change selection up or down: Up and Down Keyboard Key.
- To confirm selected dragon to attack and initiate attack: Space bar.


## Developer

👤 **George Gbenle**

- GitHub: [george-shammar](https://github.com/george-shammar)
- Twitter: [@GeorgeShammar](https://twitter.com/GeorgeShammar)
- LinkedIn: [George Gbenle](https://www.linkedin.com/in/georgegbenle/)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project!


## 📝 License

This project is MIT licensed.