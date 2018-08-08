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

    constructor(bytes32[] args) public {
      setClient(4001, stringToBytes32("Johns"), 94939, 12356, stringToBytes32("19 Ballentree"), stringToBytes32("Castleknock"), stringToBytes32("Dublin"));
      setClient(4002, stringToBytes32("Mark"), 94938, 99876, stringToBytes32("Oldtownhouse"), stringToBytes32("Blanchardstown"), stringToBytes32("Dublin"));
      setClient(4003, stringToBytes32("Colin"), 8121999, 34567, stringToBytes32("Drerryolam Parkhouse"), stringToBytes32("Howth"), stringToBytes32("Dublin"));
      setClient(4004, stringToBytes32("Rachel"), 8121999, 48572, stringToBytes32("Drerryolam Parkhouse"), stringToBytes32("Howth"), stringToBytes32("Dublin"));
      setClient(4005, stringToBytes32("sinead"), 8121999, 58475, stringToBytes32("Drerryolam Parkhouse"), stringToBytes32("Howth"), stringToBytes32("Dublin"));
      setClient(4006, stringToBytes32("Robin"), 8121999, 10395, stringToBytes32("Drerryolam Parkhouse"), stringToBytes32("Howth"), stringToBytes32("Dublin"));
      setClient(4007, stringToBytes32("Michael"), 8121999, 28596, stringToBytes32("Drerryolam Parkhouse"), stringToBytes32("Howth"), stringToBytes32("Dublin"));
    }

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
