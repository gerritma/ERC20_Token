const RugPull = artifacts.require("RugPull");

module.exports = function(deployer) {
  deployer.deploy(RugPull, "This might be a RUGPULL")
};
