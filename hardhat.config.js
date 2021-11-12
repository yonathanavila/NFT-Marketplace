require("@nomiclabs/hardhat-waffle");

const fs= require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "b67e1f70a3614b64842d9e4c1dd7e5ab"

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337,
    },
    munbai:{
      url:`https://polygon-mumbai.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
 