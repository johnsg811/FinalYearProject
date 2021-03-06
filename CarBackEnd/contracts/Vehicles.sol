pragma solidity ^0.4.18;
contract Vehicles {

    struct Car {
        uint carid;
        bytes32 model;
        int year;
        int value;
        bool active;
        uint mid;
    }
    mapping (uint => Car) c;
    uint[] public carAccts;

    constructor(bytes32[] args) public {
      setCar(2001, stringToBytes32("3 Series"), 2017, 31000, false, 1001);
      setCar(2002, stringToBytes32("3 Series"), 2016, 30000, false, 1001);
      setCar(2003, stringToBytes32("3 Series"), 2018, 33000, false, 1001);
      setCar(2004, stringToBytes32("3 Series"), 2018, 34000, false, 1001);
      setCar(2005, stringToBytes32("5 Series"), 2016, 39000, false, 1001);
      setCar(2006, stringToBytes32("5 Series"), 2016, 40000, false, 1001);
      setCar(2007, stringToBytes32("8 Series"), 2016, 77000, false, 1001);
      setCar(2008, stringToBytes32("8 Series"), 2016, 65000, false, 1001);
      setCar(2009, stringToBytes32("X3 Series"), 2016, 55000, false, 1001);
      setCar(2010, stringToBytes32("X3 Series"), 2016, 50000, false, 1001);
      setCar(2011, stringToBytes32("Rolls-Royce Ghost"), 2016, 300000, false, 1002);
      setCar(2012, stringToBytes32("Rolls-Royce Ghost"), 2015, 350000, false, 1002);
    }


    function setCar(uint _carid, bytes32 _model, int _year, int _value, bool _active, uint _mid) public payable{
        Car storage cars = c[_carid];

        cars.carid = _carid;
        cars.model = _model;
        cars.year = _year;
        cars.value = _value;
        cars.active = _active;
        cars.mid = _mid;
        carAccts.push(_carid) -1;
    }

    function getCars() view public returns(uint[]) {
        return carAccts;
    }

    function getCar(uint _carid) view public returns (uint, bytes32, int, int, bool, uint) {
        return (c[_carid].carid, c[_carid].model, c[_carid].year, c[_carid].value, c[_carid].active, c[_carid].mid);
    }

    function countCars() view public returns (uint) {
        return carAccts.length;
    }


    function getVehicleByModel(string _model) view public returns (uint, bytes32, int, int, bool, uint) {
        uint carsCount = carAccts.length;
        uint vehicleid;
        for (uint i=0; i<carsCount; i++) {
            uint carId = carAccts[i];
            Car storage car =  c[carId];
            if(keccak256(car.model) == keccak256(_model)){
                vehicleid = carId;
                break;
            }
        }
        return (c[vehicleid].carid, c[vehicleid].model, c[vehicleid].year, c[vehicleid].value, c[vehicleid].active, c[vehicleid].mid);

    }

    function isAVehicles(uint _vehiclesID) view public returns(bool) {
        uint i = 0;
        while (i < carAccts.length) {
            if(carAccts[i] == _vehiclesID) {
                return true;
            }
            i++;
        }
        return false;
    }

    function stringToBytes32(string memory source) returns (bytes32 result) {
      bytes memory tempEmptyStringTest = bytes(source);
      if (tempEmptyStringTest.length == 0) {
          return 0x0;
      }

      assembly {
          result := mload(add(source, 32))
      }
    }

}
