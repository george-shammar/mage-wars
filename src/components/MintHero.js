import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import { NoWallet } from "./NoWallet";
import { Link } from 'react-router-dom';
import { NFTStorage } from 'nft.storage';
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";
require('dotenv').config();
import "../styles/MintHero.css"
import question from "../assets/question.png";

const NFT_STORAGE_KEY = process.env.NFT_STORAGE_API_KEY 

const MintHero = () => {
    const [walletAddress, setWallet] = useState("");
    const [fileUrl, setFileUrl] = useState(null);
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

      let mintingPrice = await contract.getMintingPrice();
      mintingPrice = mintingPrice.toString();

            try {

              const client = new NFTStorage({ token: NFT_STORAGE_KEY });
              setStatus("Uploading to nft.storage...")
              const metadata = await client.store({
                name,
                description,
                image,
              });
              setStatus(`Minting token with metadata URI: ${metadata.url}`);

              const metadataURI = metadata.url;
              
              const transaction = await contract.createRandomMage(name, metadataURI, { value: mintingPrice });

              setStatus("Blockchain transaction sent, awaiting confirmation...");

              const receipt = await transaction.wait();
              if (receipt.status === 0) {
                  throw new Error("Transaction failed");
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

    <div className="mint">
      <div className="border card rounded shadow-lg mt-5">
        <img alt="logo" src={question} className="mx-2 my-2" />
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
          
          <button className="py-2 submit white" onClick={mintHero}>
              Mint Hero
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