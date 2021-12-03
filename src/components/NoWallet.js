import "../styles/Nav.css"

export const NoWallet = () => {
    return (
      <div className="overall">
        <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
        <h1 className="pink azania py-2">Mage Wars</h1> 
        <p className="white">No Ethereum wallet was detected. Connect to play Mage Wars.</p>
        <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              > <div className="px-3 border-0 rounded-pill py-1 wallet white">
            <p className="white">
              Install{" "}
             
                MetaMask
            </p>
          </div> </a>
        </div>
        {/* <p className="no-wallet">No Ethereum wallet was detected.</p> */}
        </div>
    );
  }