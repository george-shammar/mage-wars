require("@nomiclabs/hardhat-waffle");
 
const ALCHEMY_API_KEY = ""
const MATIC_PRIVATE_KEY = ""

module.exports = {
  solidity: "0.8.4",
  networks: {
    matic: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${MATIC_PRIVATE_KEY}`]
    }
  }
};
