pragma solidity >=0.8.2 <0.9.0;

contract Lottery {
    address public manager;
    address[] public players;
    uint public lotteryFee = 1 ether;

    uint public endTime;

    constructor() {
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value >= lotteryFee, "Lottery fee is not enough");
        require(block.timestamp < endTime, "Lottery has already ended");

        players.push(msg.sender);
    }

    function random() private view returns (uint) {
        // A simple method to generate a random number
        // Replace with a more secure and verifiable method
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players)));
    }

    function pickWinner() public {
        require(block.timestamp >= endTime, "Lottery has not ended yet");
        require(msg.sender == manager, "Only the manager can pick a winner");

        uint index = random() % players.length;
        address payable winner = payable(players[index]);

        // Send the prize to the winner (replace with your desired prize distribution)
        winner.transfer(address(this).balance);
    }

    function setEndTime(uint _endTime) public {
        require(msg.sender == manager, "Only the manager can set the end time");
        endTime = _endTime;
    }
}