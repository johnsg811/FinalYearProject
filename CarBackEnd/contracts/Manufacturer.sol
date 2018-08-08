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
        setBrand(1001, stringToBytes32("BMW"), stringToBytes32("Germany"), 1234567, stringToBytes32("bmw@gmail.com"));
        setBrand(1002, stringToBytes32("Rolls Royce"), stringToBytes32("UK"), 1234568, stringToBytes32("rolls-royce@gmail.com"));
        setBrand(1003, stringToBytes32("Audi"), stringToBytes32("Germany"), 1234567, stringToBytes32("audi@gmail.com"));
        setBrand(1004, stringToBytes32("Mercedes-Benz"), stringToBytes32("Germany"), 1234567, stringToBytes32("mercedes-benz@gmail.com"));
        setBrand(1005, stringToBytes32("Land-Rover"), stringToBytes32("UK"), 1234567, stringToBytes32("land-rover@gmail.com"));
        setBrand(1006, stringToBytes32("Porsche"), stringToBytes32("Germany"), 1234567, stringToBytes32("porsche@gmail.com"));
        setBrand(1006, stringToBytes32("Bentley"), stringToBytes32("UK"), 1234567, stringToBytes32("bentley@gmail.com"));
        setBrand(1008, stringToBytes32("Jaguar"), stringToBytes32("UK"), 1234567, stringToBytes32("jaguar@gmail.com"));
        setBrand(1009, stringToBytes32("Lexus"), stringToBytes32("UK"), 1234567, stringToBytes32("lexus@gmail.com"));
        setBrand(1010, stringToBytes32("Maserati"), stringToBytes32("UK"), 1234567, stringToBytes32("maserati@gmail.com"));
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

    function getManufacturerByName(string _name) view public returns (uint, bytes32, bytes32, int, bytes32) {
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
