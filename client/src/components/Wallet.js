import React, { useState } from "react";

import styled from "styled-components";
import { Button } from "@material-ui/core";

import { formatNumber } from "../utils";

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

const WalletContainer = styled.div`
  /* border: 1px solid red; */

  button {
    color: #fff;
    background-color: var(--blue-strong);
    outline: none;

    &:hover {
      background-color: var(--blue-soft);
    }
  }

  .active {
    background-color: var(--blue-soft);
  }

  .submit {
    background-color: var(--blue-soft);
    margin-top: 10px;
    padding: 8px 10px;
  }

  .submit:hover {
    background-color: var(--blue-strong);
  }
`;

const WalletBalance = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

const WalletTransfer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

const WalletTransferBottom = styled.div`
  /* border: 1px solid red; */

  display: flex;
  justify-content: space-between;
`;

const WalletTransferRight = styled.div`
  /* border: 1px solid red; */

  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;

const WalletHeader = styled.h3`
  /* border: 1px solid red; */

  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

const WalletItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 15px 0; */
`;

const WalletLabel = styled.label`
  /* border: 1px solid red; */

  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

const WalletData = styled.div`
  /* border: 1px solid red; */

  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 100% !important;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  > button {
    width: 100% !important;
  }
`;

const WalletInput = styled.div`
  /* border: 1px solid red; */

  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 90% !important;
    outline: none;
    padding: 10px;
    padding-left: 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }

  > span {
    padding: 6px 10px;
    border-radius: 5px;
    background-color: black;
    color: #fff;
  }

  > button {
    width: 100%;
  }
`;

export default Wallet;
