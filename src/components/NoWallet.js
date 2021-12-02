
export const NoWallet = () => {
    return (
      <div>
        <div className="nav">
        <h1 className="title">Mage Wars</h1> 
        <p className="no-wallet-desktop">No Ethereum wallet was detected. Connect to play Mage Wars.</p>
          <div className="wallet">
            <p className="text">
              Install{" "}
              <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                MetaMask
              </a>
            </p>
          </div>
        </div>
        {/* <p className="no-wallet">No Ethereum wallet was detected.</p> */}
        </div>
    );
  }