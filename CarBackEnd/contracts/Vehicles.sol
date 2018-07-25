pragma solidity ^0.4.18;
contract Vehicles {

    struct Car {
        uint carid;
        string model;
        int year;
        int value;
        bool active;
        uint mid;
    }
    mapping (uint => Car) c;
    uint[] public carAccts;

    function setCar(uint _carid, string _model, int _year, int _value, bool _active, uint _mid) public payable{
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

    function getCar(uint _carid) view public returns (uint, string, int, int, bool, uint) {
        return (c[_carid].carid, c[_carid].model, c[_carid].year, c[_carid].value, c[_carid].active, c[_carid].mid);
    }

    function countCars() view public returns (uint) {
        return carAccts.length;
    }


    function getVehicleByModel(string _model) view public returns (uint, string, int, int, bool, uint) {
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

}
