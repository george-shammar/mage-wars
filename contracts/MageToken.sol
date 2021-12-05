// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract MageToken is ERC721URIStorage, Pausable, Ownable {

    constructor()ERC721("Mage", "MGE"){

    }

  uint256 COUNTER;

  uint256 private _price = 500000000000000;

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
  function _createMage(string memory _name, string memory tokenURI) internal {
    uint8 randRarity = uint8(_createRandomNum(100));
    uint256 randDna = _createRandomNum(10**16);
    Mage memory newMage = Mage(_name, COUNTER, randDna, 1, randRarity);
    _setTokenURI(new, tokenURI);
    mages.push(newMage);
    _safeMint(msg.sender, COUNTER);
    _setTokenURI(COUNTER, tokenURI);
    emit NewMage(msg.sender, COUNTER, randDna);
    COUNTER++;


    
            uint256 newItemId = _tokenIds.current();
            
          
            _setTokenURI(newItemId, uniqueURI);
            _tokenIds.increment();
        





  }

  function createRandomMage(string memory _name, string memory tokenURI) public payable whenNotPaused {
    require(msg.value >= _price);
    _createMage(_name, tokenURI);
  }

  function updateFee(uint256 _fee) external onlyOwner {
    _price = _fee;
  }

  function getMintingPrice() public view returns (uint256) {
        return _price;
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

  function pause() public onlyOwner {
        _pause();
    }

  function unpause() public onlyOwner {
        _unpause();
  }
}