pragma solidity ^0.4.18;
contract Manufacturer {

    struct Brand {
        uint mid;
        bytes32 name;
        bytes32 country;
        int phone;
        bytes32 website;
    }
    mapping (uint => Brand) brands;
    uint[] public BrandAccts;

    constructor(bytes32[] args) public {
      setBrand(1001, stringToBytes32("BMW"), stringToBytes32("Germany"), 1234567, stringToBytes32("Test@test.com"));
      setBrand(1002, stringToBytes32("Rolls Royce"), stringToBytes32("UK"), 1234568, stringToBytes32("TestUK@test.com"));
    }

    function setBrand(uint _mid, bytes32 _name, bytes32 _country, int _phone, bytes32 _website) public payable{
        Brand storage branding = brands[_mid];

        branding.mid = _mid;
        branding.name = _name;
        branding.country = _country;
        branding.phone = _phone;
        branding.website = _website;

        BrandAccts.push(_mid) -1;
    }

    function getBrands() view public returns(uint[]) {
        return BrandAccts;
    }

    function getManufacturerById(uint _mid) view public returns (uint, bytes32, bytes32, int, bytes32) {
        return (brands[_mid].mid, brands[_mid].name, brands[_mid].country, brands[_mid].phone, brands[_mid].website);
    }

    function countBrands() view public returns (uint) {
        return BrandAccts.length;
    }

    function getManufacturerByName(bytes32 _name) view public returns (uint, bytes32, bytes32, int, bytes32) {
        uint brandCount = BrandAccts.length;
        uint mid;
        for (uint i=0; i<brandCount; i++) {
            uint brandId = BrandAccts[i];
            Brand storage brand = brands[brandId];
            if(keccak256(brand.name) == keccak256(_name)){
                mid = brandId;
                break;
            }
        }
        return (brands[mid].mid, brands[mid].name, brands[mid].country, brands[mid].phone, brands[mid].website);

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
