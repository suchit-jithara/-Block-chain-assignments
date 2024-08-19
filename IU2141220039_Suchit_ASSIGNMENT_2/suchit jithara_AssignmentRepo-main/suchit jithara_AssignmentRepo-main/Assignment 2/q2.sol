// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract SimpleStorage {
    // State variable to store the integer
    uint256 private storedValue;

    // Function to set the integer value
    function set(uint256 value) public {
        storedValue = value;
    }

    // Function to retrieve the stored integer value
    function get() public view returns (uint256) {
        return storedValue;
    }
}
