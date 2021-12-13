import "../styles/RevealHero.css"
import mage from "../assets/dude.jpeg";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";

const RevealHero = () => {
    const [name, setName] = useState([])
    const [id, setID] = useState([])
    const [dna, setDNA] = useState([])
    const [rarity, setRarity] = useState([])
    const [level, setLevel] = useState([])

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
        setName(mageName)
        setID(mageID)
        setDNA(mageDNA)
        setRarity(mageRarity)
        setLevel(mageLevel)
  
      }

    return (
        <div className="overall butt">
          
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="pink azania py-2">Your Minted Mage</h1>
                <p className="white center">Your Mage: {name}, is ready to fight</p>
            </div>
            <div className="mint">
                <div className="border card mage-heigth rounded shadow-lg mt-3">
                    <img alt="logo" src={mage} />
                </div>
                <div className="border">
                    <p className="white">Name: {name}</p>
                    <div className="white mt-3">
                    <p>ID: {id}</p>
                    <p>DNA: {dna}</p>
                    <div>
                        {rarity <= 80 ? (
                            <p>Rarity: Rare Mage</p>
                        ) : (
                            <p>Rarity: Super Rare Mage</p>
                        )}
                        
                    </div>
                    <p>Level: {level}</p>
                    <p>Description: Velocity: 200m/h, Gravity: 300</p>
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