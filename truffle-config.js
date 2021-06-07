require('babel-register');
require('babel-polyfill');

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
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