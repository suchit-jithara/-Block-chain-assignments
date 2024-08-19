// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Counter {
    // State variable to store the count
    uint256 private count;

    // Constructor to initialize the count
    constructor() {
        count = 0; // Initialize count to zero
    }

    // Function to increment the count
    function increment() public {
        count += 1; // Increase the count by 1
    }

    // Function to get the current count
    function getCount() public view returns (uint256) {
        return count; // Return the current count
    }
}
