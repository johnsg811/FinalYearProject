pragma solidity ^0.4.18;
contract VehicleServices {

    struct Service {
        uint Sid;
        int Sdate;
        uint SCid;
        uint carid;
        int Smileage;
        bytes32 SrepairType;
        bytes32 SrepairDetails;
        int Scost;
    }
    mapping (uint => Service) services;
    uint[] public serviceAccts;
    uint public count = 8000;

    constructor(bytes32[] args) public {
      setServicebyID(8001, 1503756151, 7001, 2006, 40500, stringToBytes32("Oil Change"),  stringToBytes32("Only Changed oil & checked Tyres"), 75);
      setServicebyID(8002, 1506434551, 7001, 2006, 45000, stringToBytes32("Full Service"),  stringToBytes32("All Full Service Done"), 150);
      setServicebyID(8003, 1514296951, 7001, 2006, 55000, stringToBytes32("AC Repair"),  stringToBytes32("AC Gas Refill"), 120);
      setServicebyID(8005, 1522072951, 7001, 2006, 65000, stringToBytes32("Half Service"),  stringToBytes32("All Half Service Done"), 100);
      setServicebyID(8006, 1527343351, 7002, 2006, 75000, stringToBytes32("Full Service"),  stringToBytes32("All Full Service Done"), 130);
      setServicebyID(8007, 1527343351, 7003, 2001, 55000, stringToBytes32("Full Service"),  stringToBytes32("Full Service Done"), 130);
      setServicebyID(8008, 1527343351, 7004, 2002, 65000, stringToBytes32("Half Service"),  stringToBytes32("Half Service Done"), 75);
    }

    function setServicebyID(uint _Sid, int _Sdate, uint _SCid, uint _carid, int _Smileage, bytes32 _SrepairType, bytes32 _SrepairDetails, int _Scost) public payable{
        Service storage service = services[count];

        service.Sid = count;
        service.Sdate = _Sdate;
        service.SCid = _SCid;
        service.carid = _carid;
        service.Smileage = _Smileage;
        service.SrepairType = _SrepairType;
        service.SrepairDetails = _SrepairDetails;
        service.Scost = _Scost;

        serviceAccts.push(count) -1;
        count++;
    }

    function getServices() view public returns(uint[]) {
        return serviceAccts;
    }

    function getService(uint _Sid) view public returns (uint, int, int, bytes32, bytes32, int) {
        return (services[_Sid].Sid, services[_Sid].Sdate, services[_Sid].Smileage, services[_Sid].SrepairType, services[_Sid].SrepairDetails, services[_Sid].Scost);
    }

    function getServiceRelations(uint _Sid) view public returns (uint, uint, uint) {
        return (services[_Sid].Sid, services[_Sid].SCid, services[_Sid].carid);
    }

    function countServices() view public returns (uint) {
        return serviceAccts.length;
    }

    function getServiceForCar(uint _carid) view public returns (uint[]) {
        uint[] serviceIDs;

        uint transCount = serviceAccts.length;
        for (uint i=0; i<transCount; i++) {
            uint servId = serviceAccts[i];
            Service storage service = services[servId];
            if(service.carid == _carid){
                serviceIDs.push(service.Sid) -1;
            }
        }
        return (serviceIDs);
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
