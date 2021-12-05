import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import { NoWallet } from "./NoWallet";
import { Link } from 'react-router-dom';
import { NFTStorage, File } from 'nft.storage'
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";
import "../styles/MintHero.css"
import question from "../assets/question.png";
require('dotenv').config();

// const NFT_STORAGE_KEY = process.env.NFT_STORAGE_API_KEY
const NFT_STORAGE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMyNTlEMWEzNTNEMzgyNjQ4MDVmNkY4Y2NjMTY0RThFODQzM0I0MDYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYzNzkzOTM1Njc5NywibmFtZSI6IkF6YW5pYSJ9.Tn3kou1OKA09gdsp0pduKzFUJGAVQ8KXk1-44pLWH9w";
const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const MintHero = () => {
    const [walletAddress, setWallet] = useState("");
    const [formInput, updateFormInput] = useState({name:""});
    const [status, setStatus] = useState("");

    useEffect(() => {
      (async() => {
        const {address} = await getCurrentWalletConnected();
        setWallet(address)
    
        addWalletListener();
      }) ()
    }, []);

    // connect wallet 
    const connectWalletPressed = async () => {
        const walletResponse = await connectWallet();
        setWallet(walletResponse.address);
    };

    // wallet listener to update UI when wallet's state changes, 
    // such as when the user disconnects or switches accounts.
    function addWalletListener() {
        if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
            setWallet(accounts[0]);
          
            } else {
            setWallet("");
            }
        });
        } 
    }

    async function mintMage() {
      const {name} = formInput;
      if (!name) return

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress.MageToken, MageArtifact.abi, signer);
   
      const mintingPrice = 500000000000000;

            try {

              const client = new NFTStorage({ token: NFT_STORAGE_KEY });
              setStatus("Uploading to nft.storage...")
              const metadata = await client.store({
                name,
                description: "Mage Warrior",
                image: new File(['./assets/question.png'], 'question.png', { type: 'image/jpg' })
              });

              setStatus(`Minting token with metadata URI: ${metadata.url}`);

              const metadataURI = metadata.url;
              
              const transaction = await contract.createRandomMage(name, metadataURI, { value: mintingPrice });

              setStatus("Blockchain transaction sent, awaiting confirmation...");

              const receipt = await transaction.wait();
              if (receipt.status === 0) {
                  throw new Error("Transaction failed");
              } else {
                setStatus("Fresh Mage has been minted successfully. Reveal your Mage with the button below to start the game");
              }
            } catch (error) {
              if (error.code === ERROR_CODE_TX_REJECTED_BY_USER) {
                return;
              }
              console.error(error);
            } finally {

            }
           
    }

    // If window.ethereum has not been injected.
    if (window.ethereum === undefined) {
      return <NoWallet />;
    }

    return (
      <div className="overall butt">
        <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
        <h1 className="pink azania py-2">Mage Wars</h1>
       
        <div className="wallet">
          {walletAddress.length > 0 ? (
            <div className="px-3 border-0 rounded-pill p-2 wallet white">Current Player:   
              {String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
            </div>
            ) : (
          <div className="px-3 border-0 rounded-pill p-2 wallet white" onClick={connectWalletPressed}>Connect Wallet To Play</div>
            )}
        </div>
      </div>

        <p className="white py-2 status">
          {status}
        </p>

    <div className="mint">
      <div className="border card rounded shadow-lg mt-3">
        <img alt="logo" src={question} className="unknown"/>
      </div>
      <div className="border">
        <input 
          className="name py-1 white" 
          placeholder="Name your Hero"
          required
          onChange={e => updateFormInput({...formInput, name: e.target.value})}  
        />
        <div className="white mt-3">
          <p>ID: To be revealed</p>
          <p>DNA: To be revealed</p>
          <p>Rarity: To be revealed</p>
          <p>Level: To be revealed</p>
          <p>Description/Powers: To be reveealed</p>
        </div>
          
          <button className="py-2 submit white" onClick={mintMage}>
              Mint Mage
            </button>
        </div>

      </div>
      
    

    <div className="mint">
      <Link to="/RevealHero"><button className="white rounded my-5 py-2 submit white">Reveal Hero</button></Link>
    </div>
     
    
      
    

    </div>
    );
}

export default MintHero;