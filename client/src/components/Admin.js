import React, { useState } from "react";

import { Button } from "@material-ui/core";
import styled from "styled-components";

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

const AdminContainer = styled.div`
  /* border: 1px solid red; */

  button {
    color: #fff;
    background-color: var(--blue-soft);
    outline: none;
    margin-top: 10px;
    padding: 8px 10px;

    &:hover {
      background-color: var(--blue-strong);
    }
  }
`;

const AdminWrapper = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

const AdminHeader = styled.h3`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

const AdminItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AdminLabel = styled.label`
  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

const AdminInput = styled.div`
  flex: 0.6;
  display: flex;
  align-items: center;

  > input {
    width: 100% !important;
    outline: none;
    padding: 10px 0 10px 20px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

const AdminBottom = styled.div`
  display: flex;
`;

const AdminRight = styled.div`
  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;

export default Admin;
