// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract TransactionLedger {
    // Structure to represent a transaction entry
    struct Transaction {
        address sender;
        address receiver;
        uint256 amount;
        uint256 timestamp;
    }

    // Array to store all transactions
    Transaction[] private transactions;

    // Event to log transactions
    event TransactionRecorded(
        address indexed sender,
        address indexed receiver,
        uint256 amount,
        uint256 timestamp
    );

    // Function to record a new transaction
    function recordTransaction(address receiver) public payable {
        require(msg.value > 0, "Transaction amount must be greater than zero");

        // Create a new transaction entry
        Transaction memory newTransaction = Transaction({
            sender: msg.sender,
            receiver: receiver,
            amount: msg.value,
            timestamp: block.timestamp
        });

        // Add the new transaction to the ledger
        transactions.push(newTransaction);

        // Emit the event for the new transaction
        emit TransactionRecorded(msg.sender, receiver, msg.value, block.timestamp);
    }

    // Function to get the number of recorded transactions
    function getTransactionCount() public view returns (uint256) {
        return transactions.length;
    }

    // Function to get a specific transaction entry by index
    function getTransaction(uint256 index) public view returns (address sender, address receiver, uint256 amount, uint256 timestamp) {
        require(index < transactions.length, "Index out of bounds");

        // Access the transaction struct directly from the array
        Transaction storage transactionEntry = transactions[index];
        return (transactionEntry.sender, transactionEntry.receiver, transactionEntry.amount, transactionEntry.timestamp);
    }
}
