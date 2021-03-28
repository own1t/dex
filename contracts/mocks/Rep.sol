// SPDX-License-Identifier: MIT
pragma solidity 0.7.3;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Rep is ERC20 {
    constructor() ERC20("REP", "Augur") {}

    function faucet(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
