require("@nomiclabs/hardhat-waffle");

const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString() //Private Key Metamask
const infuraId = "b67e1f70a3614b64842d9e4c1dd7e5ab" //Infura project Id

module.exports = {
  networks: {
    hardhat:{
      chainId: 1337,
    },
    mumbai:{
      //Infura
      //url:`https://polygon-mumbai.infura.io/v3/${infuraId}`,
      url: "https://rpc-mumbai.matic.today",
      accounts:[privateKey]
    },
    //Infura
    mainnet:{
      //url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      //https://matic-mainnet.chainstacklabs.com
      //https://matic-mainnet-archive-rpc.bwarelabs.com REAL
      url: "https://rpc-mainnet.maticvigil.com",
      accounts:[privateKey]
    }
  },
  solidity: "0.8.4",
};
 