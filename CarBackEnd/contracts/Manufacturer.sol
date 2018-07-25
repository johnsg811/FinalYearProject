pragma solidity ^0.4.18;
contract Manufacturer {
    
    struct Brand {
        uint mid;
        bytes32 name;
        string country;
        int phone;
        string website;
    }
    mapping (uint => Brand) brands;
    uint[] public BrandAccts;
    
    function setBrand(uint _mid, bytes32 _name, string _country, int _phone, string _website) public payable{
        var brand = brands[_mid];
        
        brand.mid = _mid;
        brand.name = _name;
        brand.country = _country;
        brand.phone = _phone;
        brand.website = _website;
        
        BrandAccts.push(_mid) -1;
    }
    
    function getBrands() view public returns(uint[]) {
        return BrandAccts;
    }
    
    function getBrand(uint _mid) view public returns (uint, bytes32, string, int, string) {
        return (brands[_mid].mid, brands[_mid].name, brands[_mid].country, brands[_mid].phone, brands[_mid].website);
    }
    
    function countBrands() view public returns (uint) {
        return BrandAccts.length;
    }
    
}