var Manufacturer = artifacts.require("./Manufacturer.sol");
var Vehicles = artifacts.require("./Vehicles.sol");
var Dealers = artifacts.require("./Dealers.sol");
var Scrappage = artifacts.require("./Scrappage.sol");
var Customer = artifacts.require("./Customers.sol");
var Transaction = artifacts.require("./Transactions.sol");
var ServiceCenters = artifacts.require("./ServiceCenters.sol");
var VehicleServices = artifacts.require("./VehicleServices.sol");

module.exports = function(deployer) {
  deployer.deploy(Manufacturer,[], {gas: 6700000});
  deployer.deploy(Vehicles,[], {gas: 6700000});
  deployer.deploy(Dealers,[], {gas: 6700000});
  deployer.deploy(Scrappage,[], {gas: 6700000});
  deployer.deploy(Customer,[], {gas: 6700000});
  deployer.deploy(Transaction,[], {gas: 6700000});
  deployer.deploy(ServiceCenters,[], {gas: 6700000});
  deployer.deploy(VehicleServices,[], {gas: 6700000});
};
