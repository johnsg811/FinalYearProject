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

    function getDealerByModel(bytes32 _dname) view public returns (uint, bytes32, int, bytes32, bytes32, bytes32) {
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


}
