// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Ownable {
    address public owner;

    // Event to log ownership transfer
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    // Constructor to set the contract deployer as the initial owner
    constructor() {
        owner = msg.sender;
        emit OwnershipTransferred(address(0), owner);
    }

    // Modifier to restrict access to only the owner
    modifier onlyOwner() {
        require(msg.sender == owner, "Caller is not the owner");
        _;
    }

    // Function to transfer ownership to a new address
    function transferOwnership(address newOwner) public onlyOwner {
        require(newOwner != address(0), "New owner cannot be the zero address");
        emit OwnershipTransferred(owner, newOwner);
        owner = newOwner;
    }

    // Example of an owner-only function
    function restrictedFunction() public onlyOwner {
        // Function logic that only the owner can execute
        // Example: Setting some important state variable
        importantStateVariable = "Only the owner can set this value";
    }

    // Example of a public function that anyone can call
    function publicFunction() public {
        // Function logic that anyone can execute
        // Example: Incrementing a public counter
        publicCounter++;
    }

    // A state variable that can only be set by the owner
    string public importantStateVariable;

    // A public counter that can be incremented by anyone
    uint256 public publicCounter;
}
