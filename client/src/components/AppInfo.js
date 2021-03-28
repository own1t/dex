import React from "react";

import styled from "styled-components";

const AppInfo = ({ contracts }) => {
  return (
    <AppInfoWrapper>
      <AppInfoContainer>
        <AppInfoHeader>Decentralized Exchange for ERC-20 Tokens</AppInfoHeader>
        <AppInfoBody>
          <AppInfoList>
            <AppInfoItem>
              Wrote Smart Contract using Solidity with ERC-20 Token Standard and
              SafeMath from OpenZeppelin library.
            </AppInfoItem>

            <AppInfoItem>
              Wrote tests for the Smart Contract using Truffle Framework to
              confirm all the functionalities work thoroughly.
            </AppInfoItem>

            <AppInfoItem>
              Integrated Smart Contract with the front end using Web3 to
              interact with Ethereum node.
            </AppInfoItem>

            <AppInfoItem>
              Built front end using ReactJS and Styled Components to allow users
              to interact with the Smart Contract and maximize the loading
              speed.
            </AppInfoItem>

            <AppInfoItem>
              Created chart component using recharts library for displaying the
              real time charts for each token.
            </AppInfoItem>

            <AppInfoItem>
              Deployed the Smart Contract on Rinkeby Testnet.
            </AppInfoItem>
          </AppInfoList>

          <p>
            Contract Address:{" "}
            <a
              href={`https://rinkeby.etherscan.io/address/${contracts.dex.options.address}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contracts.dex.options.address}
            </a>
          </p>

          <AppDescriptionContainer>
            <AppDescription>
              - Contract is deployed on Rinkeby Testnet. You can check the
              contract on{" "}
              <a
                href="https://rinkeby.etherscan.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Rinkeby Etherscan
              </a>
              .
            </AppDescription>
            <AppDescription>
              - Dai Stablecoin is used as key currency. You can faucet Rinkeby
              DAI from{" "}
              <a
                href="https://app.compound.finance/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Compound
              </a>
              .
            </AppDescription>
            <AppDescription>
              - "Add Token" functionality is restricted to admin only. You can
              download the code and deploy on your own for testing.
            </AppDescription>
          </AppDescriptionContainer>

          <AppInfoLink>
            <a
              href="https://github.com/own1t/dex"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>{" "}
            |
            <a
              href="https://github.com/own1t/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>{" "}
            |
            <a
              href="https://www.linkedin.com/in/ryankimmm/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            |
            <a
              href="https://angel.co/u/ryan-kim-46"
              target="_blank"
              rel="noopener noreferrer"
            >
              Angel
            </a>{" "}
          </AppInfoLink>
        </AppInfoBody>
      </AppInfoContainer>
    </AppInfoWrapper>
  );
};

const AppInfoWrapper = styled.div`
  /* border: 1px solid red; */

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    text-decoration: none !important;
    color: #2773e8;
  }

  a:hover {
    color: var(--blue-soft);
  }
`;

const AppInfoContainer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 60px;
  border: 1px solid gray;
`;

const AppInfoHeader = styled.h2`
  /* border: 1px solid red; */

  width: 100%;
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 2.5rem;
`;

const AppInfoBody = styled.div`
  /* border: 1px solid red; */

  > p {
    font-size: 1.5rem;
    margin: 31px;
  }
`;

const AppInfoList = styled.ul`
  /* border: 1px solid red; */

  margin: 20px;
`;

const AppInfoItem = styled.li`
  /* border: 1px solid red; */

  font-size: 1.25rem;
  margin: 20px;
`;

const AppDescriptionContainer = styled.div`
  margin: 30px;
`;

const AppDescriptionList = styled.ul``;

const AppDescription = styled.p`
  font-size: 1rem;
  margin: 10px 30px;
`;

const AppInfoLink = styled.div`
  /* border: 1px solid red; */

  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;
`;

export default AppInfo;
