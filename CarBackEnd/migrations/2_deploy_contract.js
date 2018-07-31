var Manufacturer = artifacts.require("./Manufacturer.sol");
var Vehicles = artifacts.require("./Vehicles.sol");
var Dealers = artifacts.require("./Dealers.sol");
var Scrappage = artifacts.require("./Scrappage.sol");
var Customer = artifacts.require("./Customers.sol");
//var Customers = artifacts.require("./Vehicles.sol");

module.exports = function(deployer) {
  deployer.deploy(Manufacturer,[], {gas: 6700000});
  deployer.deploy(Vehicles,[], {gas: 6700000});
  deployer.deploy(Dealers,[], {gas: 6700000});
  deployer.deploy(Scrappage,[], {gas: 6700000});
  deployer.deploy(Customer,[], {gas: 6700000});
};
