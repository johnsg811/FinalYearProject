pragma solidity ^0.4.18;
contract Customers {

    struct Client {
        uint cid;
        bytes32 cname;
        int cdob;
        int clicencenum;
        bytes32 cstreet;
        bytes32 ctown;
        bytes32 ccounty;
    }
    mapping (uint => Client) c;
    uint[] public clientAccts;

    function setClient(uint _cid, bytes32 _cname, int _cdob, int _clicencenum, bytes32 _cstreet, bytes32 _ctown, bytes32 _ccounty) public payable{
        Client storage customer = c[_cid];

        customer.cid = _cid;
        customer.cname = _cname;
        customer.cdob = _cdob;
        customer.clicencenum = _clicencenum;
        customer.cstreet = _cstreet;
        customer.ctown = _ctown;
        customer.ccounty = _ccounty;

        clientAccts.push(_cid) -1;
    }

    function getClients() view public returns(uint[]) {
        return clientAccts;
    }

    function getClient(uint _cid) view public returns (uint, bytes32, int, int, bytes32, bytes32, bytes32) {
        return (c[_cid].cid, c[_cid].cname, c[_cid].cdob, c[_cid].clicencenum, c[_cid].cstreet, c[_cid].ctown, c[_cid].ccounty);
    }

    function countClients() view public returns (uint) {
        return clientAccts.length;
    }

    function getCustomerByName(bytes32 _cname) view public returns (uint, bytes32, int, int, bytes32, bytes32, bytes32) {
        uint clientsCount = clientAccts.length;
        uint clientid;
        for (uint i=0; i<clientsCount; i++) {
            uint personid = clientAccts[i];
            Client storage customer =  c[personid];
            if(keccak256(customer.cname) == keccak256(_cname)){
                clientid = personid;
                break;
            }
        }
        return (c[clientid].cid, c[clientid].cname, c[clientid].cdob, c[clientid].clicencenum, c[clientid].cstreet, c[clientid].ctown, c[clientid].ccounty);

    }


}
