pragma solidity ^0.4.18;
contract Scrappage {

    struct Scrap {
        uint carid;
        int scrapDate;
    }
    mapping (uint => Scrap) scraps;
    uint[] public scrapAccts;

    constructor(bytes32[] args) public {
      setScraps(2007, 1527343351) ;
    }

    function setScraps(uint _carid, int _scrapDate) public payable{
        Scrap storage scrap = scraps[_carid];

        scrap.carid = _carid;
        scrap.scrapDate = _scrapDate;


        scrapAccts.push(_carid) -1;
    }

    function getScraps() view public returns(uint[]) {
        return scrapAccts;
    }

    function getScrap(uint _carid) view public returns (uint, int) {
        return (scraps[_carid].carid, scraps[_carid].scrapDate);
    }

    function countScraps() view public returns (uint) {
        return scrapAccts.length;
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
