var Manufacturer = artifacts.require("./Manufacturer.sol");
var Vehicles = artifacts.require("./Vehicles.sol");

module.exports = function(deployer) {
  deployer.deploy(Manufacturer,[], {gas: 6700000});
  deployer.deploy(Vehicles,[], {gas: 6700000});
};
