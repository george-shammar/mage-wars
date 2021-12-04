// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MageToken is ERC721, Ownable {
  constructor(string memory _name, string memory _symbol)
    ERC721(_name, _symbol)
  {}

  uint256 COUNTER;

  uint256 public fee = 0.01 ether;

  struct Mage {
    string name;
    uint256 id;
    uint256 dna;
    uint8 level;
    uint8 rarity;
  }

  Mage[] public mages;

  event NewMage(address indexed owner, uint256 id, uint256 dna);

  // Creation
  function _createMage(string memory _name) internal {
    uint8 randRarity = uint8(_createRandomNum(100));
    uint256 randDna = _createRandomNum(10**16);
    Mage memory newMage = Mage(_name, COUNTER, randDna, 1, randRarity);
    mages.push(newMage);
    _safeMint(msg.sender, COUNTER);
    emit NewMage(msg.sender, COUNTER, randDna);
    COUNTER++;
  }

  function createRandomMage(string memory _name) public payable {
    require(msg.value >= fee);
    _createMage(_name);
  }

  function updateFee(uint256 _fee) external onlyOwner {
    fee = _fee;
  }

  function withdraw() external payable onlyOwner {
    address payable _owner = payable(owner());
    _owner.transfer(address(this).balance);
  }

  // Getters
  function getMages() public view returns (Mage[] memory) {
    return mages;
  }

  function getOwnerMages(address _owner) public view returns (Mage[] memory) {
    Mage[] memory result = new Mage[](balanceOf(_owner));
    uint256 counter = 0;
    for (uint256 i = 0; i < mages.length; i++) {
      if (ownerOf(i) == _owner) {
        result[counter] = mages[i];
        counter++;
      }
    }
    return result;
  }

  // Actions
  function levelUp(uint256 _mageId) public {
    require(ownerOf(_mageId) == msg.sender);
    Mage storage mage = mages[_mageId];
    mage.level++;
  }

  // Helpers
  function _createRandomNum(uint256 _mod) internal view returns (uint256) {
    uint256 randomNum = uint256(
      keccak256(abi.encodePacked(block.timestamp, msg.sender))
    );
    return randomNum % _mod;
  }
}