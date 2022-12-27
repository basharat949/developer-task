require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;
module.exports = {
        solidity: "0.8.9",
        defaultNetwork: "hardhat",
        networks: {
            hardhat: {},
             goerli: {
              url: process.env.API_URL,
              accounts: [process.env.PRIVATE_KEY],
              gasPrice: 100000000000,
            }
        },
        etherscan: {
           apiKey: ETHERSCAN_API_KEY,
        }
};