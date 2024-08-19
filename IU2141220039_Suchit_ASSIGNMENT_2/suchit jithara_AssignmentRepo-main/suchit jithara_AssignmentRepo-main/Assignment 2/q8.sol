// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract SimpleBank {
    // Mapping to keep track of balances
    mapping(address => uint256) public balances;

    // Events to log actions
    event Deposit(address indexed account, uint256 amount);
    event Withdrawal(address indexed account, uint256 amount);

    // Function to deposit Ether into the bank
    function deposit() public payable {
        // require(msg.value > 0, "Deposit amount must be greater than zero");

        balances[msg.sender] += msg.value;

        emit Deposit(msg.sender, msg.value); // Log the deposit event
    }

    // Function to withdraw Ether from the bank
    function withdraw(uint256 amount) public {
        require(amount <= balances[msg.sender], "Insufficient balance");

        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit Withdrawal(msg.sender, amount); // Log the withdrawal event
    }

    // Function to check the balance of the caller
    function checkBalance() public view returns (uint256) {
        return balances[msg.sender];
    }

    // Optional: Receive function to handle plain Ether transfers
    receive() external payable {
        deposit();
    }

    // Optional: Fallback function for non-existent function calls
    fallback() external payable {
        deposit();
    }
}
