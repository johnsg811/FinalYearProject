pragma solidity ^0.4.18;
contract ServiceCenters {

    struct ServiceCent {
        uint SCid;
        bytes32 SCname;
        int SCphone;
        bytes32 SCstreet;
        bytes32 SCtown;
        bytes32 SCcounty;
    }
    mapping (uint => ServiceCent) sc;
    uint[] public serviceCentAccts;

    function setServiceCent(uint _SCid, bytes32 _SCname, int _SCphone, bytes32 _SCstreet, bytes32 _SCtown, bytes32 _SCcounty) public payable{
        ServiceCent storage serviceCent = sc[_SCid];

        serviceCent.SCid = _SCid;
        serviceCent.SCname = _SCname;
        serviceCent.SCphone = _SCphone;
        serviceCent.SCstreet = _SCstreet;
        serviceCent.SCtown = _SCtown;
        serviceCent.SCcounty = _SCcounty;

        serviceCentAccts.push(_SCid) -1;
    }

    function getServiceCents() view public returns(uint[]) {
        return serviceCentAccts;
    }

    function getServiceCent(uint _SCid) view public returns (uint, bytes32, int, bytes32, bytes32, bytes32) {
        return (sc[_SCid].SCid, sc[_SCid].SCname, sc[_SCid].SCphone, sc[_SCid].SCstreet, sc[_SCid].SCtown, sc[_SCid].SCcounty);
    }

    function countServiceCents() view public returns (uint) {
        return serviceCentAccts.length;
    }

    function getServiceCentersByName(string _SCname) view public returns (uint, bytes32, int, bytes32, bytes32, bytes32) {
        uint serviceCenterCount = serviceCentAccts.length;
        uint serviceCenterid;
        for (uint i=0; i<serviceCenterCount; i++) {
            uint scid = serviceCentAccts[i];
            ServiceCent storage serviceCent =  sc[scid];
            if(keccak256(serviceCent.SCname) == keccak256(_SCname)){
                serviceCenterid = scid;
                break;
            }
        }
        return (sc[serviceCenterid].SCid, sc[serviceCenterid].SCname, sc[serviceCenterid].SCphone, sc[serviceCenterid].SCstreet, sc[serviceCenterid].SCtown, sc[serviceCenterid].SCcounty);

    }


}
