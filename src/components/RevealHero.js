import "../styles/RevealHero.css"
import mage from "../assets/dude.jpeg";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import contractAddress from "../contracts/contract-address.json";
import MageArtifact from "../contracts/MageToken.json";


const RevealHero = () => {
    const [walletAddress, setWallet] = useState("");
    const [status, setStatus] = useState("Not yet loaded");
    const [nfts, setNfts] = useState([])

      // useEffect(() => {
      //   loadNFTs()
      // }, [])


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

    


      // async function loadNFTs() {
      //   const provider = new ethers.providers.Web3Provider(window.ethereum);
      //   const signer = provider.getSigner();
      //   const contract = new ethers.Contract(contractAddress.MageToken, MageArtifact.abi, signer);

      //   const data = await contract.getMages()
      //   console.log(data)
      
      //   const items = await Promise.all(data.map(async i => {
      //       let item = {
      //         name: i.name,
      //         ID: i.id,
      //         DNA: i.dna,
      //         rarity: i.rarity
      //       }
      //       console.log(item)
      //       return item
      //     }))
      //     setNfts(items)
      //     setStatus('loaded')

      //     console.log(items)
      //     console.log("break")



      // }


















    
    return (
        <div className="overall butt">
            <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
                <h1 className="pink azania py-2">Your Minted Mage</h1>
            </div>
            <div className="mint">
                <div className="border card rounded shadow-lg mt-3">
                    <img alt="logo" src={mage} className="image"/>
                </div>
                <div className="border">
                    <p className="white">Name: zorra</p>
                    <div className="white mt-3">
                    <p>ID: 2</p>
                    <p>DNA: 6565676576567565</p>
                    <p>Rarity: Original</p>
                    <p>Level: 1</p>
                    <p>Description: Max Velocity - 25m/h, Max Jump-height - 70%vh</p>
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