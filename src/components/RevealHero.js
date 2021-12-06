import "../styles/RevealHero.css"
import mage from "../assets/dude.jpeg";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";

const ERROR_CODE_TX_REJECTED_BY_USER = 4001;

const RevealHero = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("Not yet loaded");
    const [nfts, setNfts] = useState([])

      useEffect(() => {
        loadNFTs()
      }, [])


    // useEffect(() => {
    //     (async() => {
    //       const {address} = await getCurrentWalletConnected();
    //       setWallet(address)
      
    //       addWalletListener();
          
    //     }) ()
    //   }, []);
  
      // connect wallet 
    //   const connectWalletPressed = async () => {
    //       const walletResponse = await connectWallet();
    //       setWallet(walletResponse.address);
    //   };
  
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

    


      async function loadNFTs() {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress.MageToken, MageArtifact.abi, signer);
        
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];

        const data = await contract.getOwnerMages(account);
        let mage = data[data.length-1];

        setNfts(mage)
        setStatus(`Your Mage: ${nfts.name} is ready to defeat the Dragon`)

      }


















    
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
                    <p className="white">Name: Thorra</p>
                    <div className="white mt-3">
                    <p>ID: 24</p>
                    <p>DNA: 68756756857788775</p>
                    <p>Rarity: Original</p>
                    <p>Level: 3</p>
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