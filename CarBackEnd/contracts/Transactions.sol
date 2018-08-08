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

    constructor(bytes32[] args) public {
      setTransaction(5001, 28345, 3001, 2001, 4001, stringToBytes32("sell"), 31000, 12000);
      setTransaction(5002, 28345, 3001, 2002, 4002, stringToBytes32("sell"), 30000, 24000);
      setTransaction(5003, 28345, 3001, 2003, 4003, stringToBytes32("sell"), 35000, 0);
      setTransaction(5004, 22019, 3001, 2006, 4004, stringToBytes32("buy"), 39000, 33000);
      setTransaction(5005, 58473, 3001, 2007, 4005, stringToBytes32("sell"), 65000, 45000);
      setTransaction(5006, 19845, 3001, 2008, 4006, stringToBytes32("buy"), 75000, 22000);
      setTransaction(5004, 22019, 3001, 2006, 4007, stringToBytes32("sell"), 37000, 33000);
    }

    function setTransaction(uint _tid, uint _tdate, uint _did, uint _carid, uint _cid, bytes32 _buyOrSell, int _tamount, int _tmileage) public payable{
        Transaction storage transaction = transactions[_tid];

        transaction.tid = _tid;
        transaction.tdate = _tdate;
        transaction.did = _did;
        transaction.carid = _carid;
        transaction.cid = _cid;
        transaction.buyOrSell = _buyOrSell;
        transaction.tamount = _tamount;
        transaction.tmileage = _tmileage;

        transactionAccts.push(_tid) -1;
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
