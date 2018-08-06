pragma solidity ^0.4.18;
contract VehicleServiceDetails {

    struct ServiceDetail {
        uint serviceID;
        uint jobID;
    }
    mapping (uint => ServiceDetail) serviceDetails;
    uint[] public ServiceDetailAccts;

    function setServiceDetail(uint _serviceID, uint _jobID) public payable{
        ServiceDetail storage serviceDetail = serviceDetails[_serviceID];

        serviceDetail.serviceID = _serviceID;
        serviceDetail.jobID = _jobID;

        ServiceDetailAccts.push(_serviceID) -1;
    }

    function getServiceDetails() view public returns(uint[]) {
        return ServiceDetailAccts;
    }

    function getServiceDetailById(uint _serviceID) view public returns (uint, uint) {
        return (serviceDetails[_serviceID].serviceID, serviceDetails[_serviceID].serviceID);
    }

    function countBrands() view public returns (uint) {
        return ServiceDetailAccts.length;
    }


}
