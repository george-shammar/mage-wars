import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import { NoWallet } from "./NoWallet";
import "../styles/MintHero.css"
import question from "../assets/question.png";

const Nav = () => {
    const [walletAddress, setWallet] = useState("");

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

    // If window.ethereum has not been injected.
    if (window.ethereum === undefined) {
      return <NoWallet />;
    }

    return (
      <div className="overall">
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
      <input placeholder="Name your Hero"></input>
      <div className="white">
        <p>DNA: To be revealed</p>
        <p>Rarity: To be revealed</p>
        <p>Description/Powers: To be reveealed</p>
      </div>
        
        <button className="mb-3 py-2 submit">
            Mint Hero
          </button>
      </div>
    

    </div>
    );
}

export default Nav;