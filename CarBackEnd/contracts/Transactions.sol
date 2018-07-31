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


}
