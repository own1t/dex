import React, { useState } from "react";

import {
  WalletContainer,
  WalletBalance,
  WalletHeader,
  WalletInput,
  WalletLabel,
  WalletData,
  WalletItem,
  WalletTransfer,
  WalletTransferBottom,
  WalletTransferRight,
} from "./WalletElements";
import { Button } from "@material-ui/core";

import { formatNumber } from "../../utils";

const DIRECTION = {
  WITHDRAW: "WITHDRAW",
  DEPOSIT: "DEPOSIT",
};

const Wallet = ({ deposit, withdraw, user }) => {
  const [direction, setDirection] = useState(DIRECTION.DEPOSIT);
  const [amount, setAmount] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();

    if (direction === DIRECTION.DEPOSIT) {
      deposit(amount);
      setAmount(0);
    } else {
      withdraw(amount);
      setAmount(0);
    }
  };

  return (
    <WalletContainer>
      <WalletBalance>
        <WalletHeader>
          Token Balance for {user.selectedToken.ticker}
        </WalletHeader>

        <WalletItem>
          <WalletLabel>Wallet</WalletLabel>
          <WalletData>
            <input value={formatNumber(user.balances.tokenWallet)} readOnly />
          </WalletData>
        </WalletItem>

        <WalletItem>
          <WalletLabel>DEX</WalletLabel>
          <WalletData>
            <input value={formatNumber(user.balances.tokenDex)} readOnly />
          </WalletData>
        </WalletItem>
      </WalletBalance>

      <WalletTransfer>
        <WalletHeader>Transfer {user.selectedToken.ticker}</WalletHeader>

        <form onSubmit={(e) => onSubmit(e)}>
          <WalletItem>
            <WalletLabel>Direction</WalletLabel>
            <WalletData>
              <Button
                className={direction === DIRECTION.DEPOSIT ? "active" : ""}
                onClick={() => setDirection(DIRECTION.DEPOSIT)}
              >
                Deposit
              </Button>
              <Button
                className={direction === DIRECTION.WITHDRAW ? "active" : ""}
                onClick={() => setDirection(DIRECTION.WITHDRAW)}
              >
                Withdraw
              </Button>
            </WalletData>
          </WalletItem>

          <WalletItem>
            <WalletLabel>Amount</WalletLabel>
            <WalletInput>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <span>{user.selectedToken.ticker}</span>
            </WalletInput>
          </WalletItem>

          <WalletTransferBottom>
            <WalletTransferRight>
              <Button type="submit" className="submit">
                Submit
              </Button>
            </WalletTransferRight>
          </WalletTransferBottom>
        </form>
      </WalletTransfer>
    </WalletContainer>
  );
};

export default Wallet;
