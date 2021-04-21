import React, { useState } from "react";

import { Button } from "@material-ui/core";
import {
  AdminContainer,
  AdminWrapper,
  AdminHeader,
  AdminItem,
  AdminLabel,
  AdminInput,
  AdminBottom,
  AdminRight,
} from "./AdminElements";

const Admin = ({ web3, addToken }) => {
  const [tokenTicker, setTokenTicker] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const ticker = web3.utils.fromAscii(tokenTicker);

    addToken(ticker, tokenAddress);
  };

  return (
    <AdminContainer>
      <AdminWrapper>
        <AdminHeader>Add Token (Admin Only)</AdminHeader>
        <form onSubmit={(e) => onSubmit(e)}>
          <AdminItem>
            <AdminLabel>Token Ticker</AdminLabel>
            <AdminInput>
              <input
                type="text"
                value={tokenTicker}
                onChange={(e) => setTokenTicker(e.target.value)}
              />
            </AdminInput>
          </AdminItem>

          <AdminItem>
            <AdminLabel>Token Address</AdminLabel>
            <AdminInput>
              <input
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
              />
            </AdminInput>
          </AdminItem>

          <AdminBottom>
            <AdminRight>
              <Button type="submit">Submit</Button>
            </AdminRight>
          </AdminBottom>
        </form>
      </AdminWrapper>
    </AdminContainer>
  );
};

export default Admin;
