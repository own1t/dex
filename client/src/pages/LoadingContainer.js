import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getWeb3, getContracts } from "../utils";
import App from "./App";

const LoadingContainer = () => {
  const [web3, setWeb3] = useState(undefined);
  const [accounts, setAccounts] = useState([]);
  const [contracts, setContracts] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      const web3 = await getWeb3();
      const contracts = await getContracts(web3);
      const accounts = await web3.eth.getAccounts();

      setWeb3(web3);
      setContracts(contracts);
      setAccounts(accounts);
    };
    init();
  }, []);

  const isReady = () => {
    return (
      typeof web3 !== "undefined" &&
      typeof contracts !== "undefined" &&
      accounts.length > 0
    );
  };

  if (!isReady()) {
    return (
      <Container>
        <Text>Loading...</Text>
      </Container>
    );
  }

  return <App web3={web3} accounts={accounts} contracts={contracts} />;
};

export const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #000;

  @keyframes animate {
    0% {
      background-position: -500%;
    }
    100% {
      background-position: 500%;
    }
  }
`;

export const Text = styled.p`
  position: relative;
  font-family: sans-serif;
  color: #fff;
  text-transform: uppercase;
  font-size: 4em;
  letter-spacing: 4px;
  overflow: hidden;
  background: linear-gradient(90deg, #000, #fff, #000);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: animate 3s linear infinite;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0.01);
`;

export default LoadingContainer;
