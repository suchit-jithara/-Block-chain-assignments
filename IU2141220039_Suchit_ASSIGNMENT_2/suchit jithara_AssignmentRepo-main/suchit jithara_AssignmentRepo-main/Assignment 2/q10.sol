// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract MessageStorage {
    // State variable to store the message
    string private message;

    // Event to log the message update
    event MessageUpdated(string newMessage);

    // Function to store a new message
    function setMessage(string calldata newMessage) public {
        message = newMessage;
        emit MessageUpdated(newMessage); // Log the message update
    }

    // Function to retrieve the stored message
    function getMessage() public view returns (string memory) {
        return message;
    }
}
