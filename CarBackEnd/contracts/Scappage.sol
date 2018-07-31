pragma solidity ^0.4.18;
contract Scrappage {

    struct Scrap {
        uint carid;
        bytes32 scrapDate;
    }
    mapping (uint => Scrap) scraps;
    uint[] public scrapAccts;

    function setScraps(uint _carid, bytes32 _scrapDate) public payable{
        Scrap storage scrap = scraps[_carid];

        scrap.carid = _carid;
        scrap.scrapDate = _scrapDate;


        scrapAccts.push(_carid) -1;
    }

    function getScraps() view public returns(uint[]) {
        return scrapAccts;
    }

    function getScrap(uint _carid) view public returns (uint, bytes32) {
        return (scraps[_carid].carid, scraps[_carid].scrapDate);
    }

    function countScraps() view public returns (uint) {
        return scrapAccts.length;
    }


}
