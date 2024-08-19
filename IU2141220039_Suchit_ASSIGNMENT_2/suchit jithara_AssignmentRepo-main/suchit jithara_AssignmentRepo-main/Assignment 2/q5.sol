// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract NameStorage {
    // Mapping to store names associated with user addresses
    mapping(address => string) private names;

    // Function to set a user's name
    function setName(string memory name) public {
        names[msg.sender] = name; // Store the name associated with the sender's address
    }

    // Function to retrieve a user's name
    function getName() public view returns (string memory) {
        return names[msg.sender]; // Return the name associated with the sender's address
    }
}
