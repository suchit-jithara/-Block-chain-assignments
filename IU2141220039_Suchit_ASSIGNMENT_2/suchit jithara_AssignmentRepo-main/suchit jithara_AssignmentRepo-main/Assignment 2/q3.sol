// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract PersonalizedGreeting {
    // Mapping to store greeting messages for each address
    mapping(address => string) private greetings;

    // Function to set a personalized greeting message
    function setGreeting(string memory message) public {
        greetings[msg.sender] = message;
    }

    // Function to retrieve the personalized greeting message
    function getGreeting() public view returns (string memory) {
        return greetings[msg.sender];
    }
}
