pragma solidity ^0.4.18;
contract Dealers {

    struct Dealer {
        uint did;
        bytes32 dname;
        int dphone;
        bytes32 dstreet;
        bytes32 dtown;
        bytes32 dcounty;
    }
    mapping (uint => Dealer) d;
    uint[] public dealerAccts;

    constructor(bytes32[] args) public {
      setDealer(3001, stringToBytes32("Joe-Duffy BMW"), 12345, stringToBytes32("11 North Rd"), stringToBytes32("Charlestown"), stringToBytes32("Dublin"));
      setDealer(3002, stringToBytes32("Joe-Duffy Audi"), 12345, stringToBytes32("North Park"), stringToBytes32("Charlestown"), stringToBytes32("Dublin"));
      setDealer(3003, stringToBytes32("Brady's Mercedes-Benz"), 12345, stringToBytes32("Old Navan Rd"), stringToBytes32("Castleknock"), stringToBytes32("Dublin"));
    }

    function setDealer(uint _did, bytes32 _dname, int _dphone, bytes32 _dstreet, bytes32 _dtown, bytes32 _dcounty) public payable{
        Dealer storage deal = d[_did];

        deal.did = _did;
        deal.dname = _dname;
        deal.dphone = _dphone;
        deal.dstreet = _dstreet;
        deal.dtown = _dtown;
        deal.dcounty = _dcounty;

        dealerAccts.push(_did) -1;
    }

    function getDealers() view public returns(uint[]) {
        return dealerAccts;
    }

    function getDealer(uint _did) view public returns (uint, bytes32, int, bytes32, bytes32, bytes32) {
        return (d[_did].did, d[_did].dname, d[_did].dphone, d[_did].dstreet, d[_did].dtown, d[_did].dcounty);
    }

    function countDealers() view public returns (uint) {
        return dealerAccts.length;
    }

    function getDealerByName(string _dname) view public returns (uint, bytes32, int, bytes32, bytes32, bytes32) {
        uint dealersCount = dealerAccts.length;
        uint dealerid;
        for (uint i=0; i<dealersCount; i++) {
            uint did = dealerAccts[i];
            Dealer storage deal =  d[did];
            if(keccak256(deal.dname) == keccak256(_dname)){
                dealerid = did;
                break;
            }
        }
        return (d[dealerid].did, d[dealerid].dname, d[dealerid].dphone, d[dealerid].dstreet, d[dealerid].dtown, d[dealerid].dcounty);

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
