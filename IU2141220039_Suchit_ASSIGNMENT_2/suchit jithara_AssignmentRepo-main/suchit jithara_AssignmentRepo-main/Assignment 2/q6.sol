// SPDX-License-Identifier: MIT
pragma solidity >=0.8.2 <0.9.0;

contract Voting {
    // Structure to represent a candidate
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    // Mapping to store candidates by their ID
    mapping(uint256 => Candidate) public candidates;

    // Mapping to keep track of whether an address has voted
    mapping(address => bool) public hasVoted;

    // Counter for the number of candidates
    uint256 public candidatesCount;

    // Event to notify when a vote is cast
    event Voted(uint256 candidateId);

    // Function to add a new candidate
    function addCandidate(string memory name) public {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(name, 0);
    }

    // Function to vote for a candidate
    function vote(uint256 candidateId) public {
        require(!hasVoted[msg.sender], "You have already voted!"); // Ensure the user hasn't voted yet
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID"); // Validate candidate ID

        hasVoted[msg.sender] = true; // Mark the sender as having voted
        candidates[candidateId].voteCount++; // Increment the candidate's vote count

        emit Voted(candidateId); // Emit the Voted event
    }

    // Function to get the vote count for a candidate
    function getVoteCount(uint256 candidateId) public view returns (uint256) {
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID"); // Validate candidate ID
        return candidates[candidateId].voteCount; // Return the vote count
    }

    // Function to get the name of a candidate
    function getCandidateName(uint256 candidateId) public view returns (string memory) {
        require(candidateId > 0 && candidateId <= candidatesCount, "Invalid candidate ID"); // Validate candidate ID
        return candidates[candidateId].name; // Return the candidate's name
    }
}
