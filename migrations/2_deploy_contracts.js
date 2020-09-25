var KoiToken = artifacts.require("KoiToken");

module.exports = function(deployer) {
  deployer.deploy(KoiToken);
};
