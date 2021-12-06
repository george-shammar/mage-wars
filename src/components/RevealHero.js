import "../styles/RevealHero.css"
import mage from "../assets/dude.jpeg";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const RevealHero = () => {
    const [status, setStatus] = useState("Not yet loaded");
    const [name, setName] = useState([])

      useEffect(() => {
        loadNFTs()
      }, [])

      async function loadNFTs() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress.MageToken, MageArtifact.abi, signer);
        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const data = await contract.getOwnerMages(account);
        let mage = data[data.length-1];
        const mageName = mage.name;
        const mageID = mage.id.toString();
        const mageDNA = mage.dna.toString();
        const mageRarity = mage.rarity.toString();
        const mageLevel = mage.level
        console.log(mageLevel)
        setName(mageName)
  
      }

    return (
        <div className="overall butt">
          <p className="white">Your Mage: {name}, is ready to fight</p>
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="pink azania py-2">Your Minted Mage</h1>
            </div>
            <div className="mint">
                <div className="border card rounded shadow-lg mt-3">
                    <img alt="logo" src={mage} />
                </div>
                <div className="border">
                    <p className="white">Name: {name}</p>
                    <div className="white mt-3">
                    {/* <p>ID: {nfts.id}</p> */}
                    {/* <p>DNA: {nfts.dna}</p>
                    <p>Rarity: {nfts.rarity}</p> */}
                    {/* <p>Level: {nfts.level}</p> */}
                    <p>Description/Powers: Mage, Max Velocity: 24m/h, Max Jump: 300cm</p>
                    </div>
                </div>
            </div>

            <div className="mint-reveal">
                <a href="https://george-shammar.github.io/Legend_of_the_Seeker/"><button className="white rounded my-5 py-2 submit white">Play Now</button></a>
            </div>
           
        </div>
    )
}



export default RevealHero;