require('babel-register');
require('babel-polyfill');

var HDWalletProvider = require("truffle-hdwallet-provider");
const MNEMONIC =  'xyz';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://rinkeby.infura.io/v3/343ac37d4cda4fac9df123cd5a94e284")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    }
  },
  contracts_directory: './contracts/',
  contracts_build_directory: './abis/',
  

  compilers: {
    solc: {
      version: "^0.5.0",    //<==========CHANGED THAT from "0.5.1"
      docker: false,        
      settings: {         
       optimizer: {
         enabled: false,
         runs: 200
       },
       evmVersion: "petersburg"
      }
    }
  }
};