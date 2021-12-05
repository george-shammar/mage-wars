require("@nomiclabs/hardhat-waffle");
 
const ALCHEMY_API_KEY = "KEY"
const MATIC_PRIVATE_KEY = "YOUR ROPSTEN PRIVATE KEY"

module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${MATIC_PRIVATE_KEY}`]
    }
  }
};
