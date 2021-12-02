import { useEffect, useState } from "react";
import { connectWallet, getCurrentWalletConnected } from "../utils/wallet";
import { NoWallet } from "./NoWallet";

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
        <div className="nav">
        <h1 className="title">Mage Wars</h1>
       
        <div className="wallet">
          {walletAddress.length > 0 ? (
            <div className="text">Current Player:   
              {String(walletAddress).substring(0, 6) +
              "..." +
              String(walletAddress).substring(38)}
            </div>
            ) : (
          <div className="text" onClick={connectWalletPressed}>Connect Wallet To Play</div>
            )}
        </div>
    </div>
    );
}

export default Nav;