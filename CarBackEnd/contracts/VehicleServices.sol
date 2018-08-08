pragma solidity ^0.4.18;
contract VehicleService {

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

    function setServicebyID(uint _Sid, int _Sdate, uint _SCid, uint _carid, int _Smileage, bytes32 _SrepairType, bytes32 _SrepairDetails, int _Scost) public payable{
        Service storage service = services[_Sid];

        service.Sid = _Sid;
        service.Sdate = _Sdate;
        service.SCid = _SCid;
        service.carid = _carid;
        service.Smileage = _Smileage;
        service.SrepairType = _SrepairType;
        service.SrepairDetails = _SrepairDetails;
        service.Scost = _Scost;

        serviceAccts.push(_Sid) -1;
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


}
