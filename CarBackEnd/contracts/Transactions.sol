pragma solidity ^0.4.18;

contract Transactions {

    struct Transaction {
        uint tid;
        uint tdate;
        uint did;
        uint carid;
        uint cid;
        bytes32 buyOrSell;
        int tamount;
        int tmileage;
    }
    mapping (uint => Transaction) transactions;
    uint[] public transactionAccts;
    uint public count = 5000;


    constructor(bytes32[] args) public {
      setTransaction(5001, 1527343351, 3001, 2001, 4002, stringToBytes32("sell"), 31000, 12000);
      setTransaction(5002, 1495807351, 3001, 2002, 4002, stringToBytes32("sell"), 30000, 24000);
      setTransaction(5003, 1527343351, 3001, 2002, 4002, stringToBytes32("buy"), 35000, 0);
      setTransaction(5004, 1464271351, 3001, 2006, 4004, stringToBytes32("buy"), 39000, 33000);
      setTransaction(5005, 1495807351, 3001, 2007, 4002, stringToBytes32("sell"), 65000, 45000);
      setTransaction(5006, 1464271351, 3001, 2008, 4006, stringToBytes32("buy"), 75000, 22000);
      setTransaction(5007, 1516975351, 3001, 2006, 4007, stringToBytes32("sell"), 37000, 33000);
    }

    function setTransaction(uint _tid, uint _tdate, uint _did, uint _carid, uint _cid, bytes32 _buyOrSell, int _tamount, int _tmileage) public payable{
        Transaction storage transaction = transactions[count];

        transaction.tid = count;
        transaction.tdate = _tdate;
        transaction.did = _did;
        transaction.carid = _carid;
        transaction.cid = _cid;
        transaction.buyOrSell = _buyOrSell;
        transaction.tamount = _tamount;
        transaction.tmileage = _tmileage;

        transactionAccts.push(count) -1;
        count++;

    }

    function getTransactions() view public returns(uint[]) {
        return transactionAccts;
    }

    function getTransactionDetail(uint _tid) view public returns (uint, uint, bytes32, int, int) {
        return (transactions[_tid].tid, transactions[_tid].tdate, transactions[_tid].buyOrSell, transactions[_tid].tamount, transactions[_tid].tmileage);
    }

    function getTransactionRelations(uint _tid) view public returns (uint, uint, uint, uint) {
        return (transactions[_tid].tid, transactions[_tid].did, transactions[_tid].carid, transactions[_tid].cid);
    }

    function countTransactions() view public returns (uint) {
        return transactionAccts.length;
    }

    function getTransctionsForCar(uint _carid) view public returns (uint[]) {
        uint[] transactionIDs;

        uint transCount = transactionAccts.length;
        uint mid;
        for (uint i=0; i<transCount; i++) {
            uint transId = transactionAccts[i];
            Transaction storage transaction = transactions[transId];
            if(transaction.carid == _carid){
                transactionIDs.push(transaction.tid) -1;
            }
        }
        return (transactionIDs);

    }

    function getCurrentCarForCust(uint _customerId) view public returns (uint[]) {
        uint[] carIDs;

        uint transCount = transactionAccts.length;
        uint mid;
        uint i;
        uint transId;
        Transaction storage transaction;
        for (i=0; i<transCount; i++) {
            transId = transactionAccts[i];
            transaction = transactions[transId];

            if((transaction.cid == _customerId) &&
            (keccak256(transaction.buyOrSell) == keccak256(stringToBytes32("sell")))
            ){
                carIDs.push(transaction.carid) -1;
            }
        }
        if(carIDs.length > 0){
            for (i=0; i<transCount; i++) {
                transId = transactionAccts[i];
                transaction = transactions[transId];

                if((transaction.cid == _customerId) &&
                (keccak256(transaction.buyOrSell) == keccak256(stringToBytes32("buy"))) &&
                (IndexOf(carIDs, transaction.carid) != carIDs.length)
                ){
                    uint index = IndexOf(carIDs, transaction.carid);
                    delete carIDs[index];
                }
            }
        }
        return (carIDs);

    }

    function getPrevousCarForCust(uint _customerId) view public returns (uint[]) {
        uint[] carIDs;

        uint transCount = transactionAccts.length;
        uint mid;
        for (uint i=0; i<transCount; i++) {
            uint transId = transactionAccts[i];
            Transaction storage transaction = transactions[transId];
            if((transaction.cid == _customerId) &&
            (keccak256(transaction.buyOrSell) == keccak256(stringToBytes32("buy")))){
                carIDs.push(transaction.carid) -1;
            }
        }
        return (carIDs);

    }


    function IndexOf(uint[] values, uint value) returns(uint) {
        uint i = 0;
        while ((values[i] != value) && i <= values.length) {
          i++;
        }
        return i;
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
