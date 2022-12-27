// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract EmitwinnerEvent {

    constructor() {}

    function callAttempt(address _contractAddress) public {
        (bool success, ) = _contractAddress.call(
            abi.encodeWithSignature("attempt()")
        );
        console.log("Success value is:", success);
        require(success, "you are not allowed");
    }

}
