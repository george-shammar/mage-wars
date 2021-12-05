import "../styles/RevealHero.css"
import mage from "../assets/dude.jpeg";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";


const RevealHero = () => {
    const [walletAddress, setWallet] = useState("");

    
    return (
        <div className="overall butt">
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="pink azania py-2">Your Minted Mage</h1>
            </div>
            <div className="mint">
                <div className="border card rounded shadow-lg mt-3">
                    <img alt="logo" src={mage} />
                </div>
                <div className="border">
                    <p>Name</p>
                    <div className="white mt-3">
                    <p>ID: To be revealed</p>
                    <p>DNA: To be revealed</p>
                    <p>Rarity: To be revealed</p>
                    <p>Level: To be revealed</p>
                    <p>Description/Powers: To be reveealed</p>
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