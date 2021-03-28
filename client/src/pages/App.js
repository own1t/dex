import React, { useEffect, useState } from "react";

import styled from "styled-components";

import OrderBook from "../components/OrderBook";
import Header from "../components/Header";
import NewOrder from "../components/NewOrder";
import Wallet from "../components/Wallet";
import MyOrders from "../components/MyOrders";
import TradeBook from "../components/TradeBook";
import Chart from "../components/Chart";
import AppInfo from "../components/AppInfo";
import Admin from "../components/Admin";

const SIDE = {
  BUY: 0,
  SELL: 1,
};

const App = ({ web3, accounts, contracts }) => {
  const [tokens, setTokens] = useState([]);
  const [user, setUser] = useState({
    accounts: [],
    balances: {
      tokenDex: 0,
      tokenWallet: 0,
    },
    selectedToken: undefined,
  });
  const [orders, setOrders] = useState({
    buy: [],
    sell: [],
  });
  const [trades, setTrades] = useState([]);
  const [admin, setAdmin] = useState(undefined);

  useEffect(() => {
    const init = async () => {
      try {
        const rawTokens = await contracts.dex.methods.getTokens().call();
        const tokens = rawTokens.map((token) => ({
          ...token,
          ticker: web3.utils.hexToUtf8(token.ticker),
        }));

        const [balances, orders] = await Promise.all([
          getBalances(accounts[0], tokens[0]),
          getOrders(tokens[0]),
        ]);

        const admin = await contracts.dex.methods.admin().call();

        setTokens(tokens);
        setUser({ accounts, balances, selectedToken: tokens[0] });
        setOrders(orders);
        setAdmin(admin);
      } catch (err) {
        console.log(err);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      try {
        const [balances, orders] = await Promise.all([
          getBalances(user.accounts[0], user.selectedToken),
          getOrders(user.selectedToken),
        ]);

        setUser((user) => ({ ...user, balances }));
        setOrders(orders);

        const events = await contracts.dex.getPastEvents("NewTrade", {
          filter: {
            ticker: web3.utils.fromAscii(user.selectedToken.ticker),
          },
          fromBlock: 0,
          toBlock: "latest",
        });

        const newTrades = await events.map((event) => event.returnValues);
        setTrades(newTrades);
      } catch (err) {
        console.log(err);
      }
    };
    if (typeof user.selectedToken !== "undefined") {
      init();
    }
  }, [user.selectedToken, trades]);

  const selectToken = (token) => {
    setUser({ ...user, selectedToken: token });
  };

  const getBalances = async (account, token) => {
    const balanceDex = await contracts.dex.methods
      .traderBalances(account, web3.utils.fromAscii(token.ticker))
      .call();

    const tokenDex = web3.utils.fromWei(balanceDex);

    const balanceWallet = await contracts[token.ticker].methods
      .balanceOf(account)
      .call();

    const tokenWallet = web3.utils.fromWei(balanceWallet);

    return { tokenDex, tokenWallet };
  };

  const getOrders = async (token) => {
    const orders = await Promise.all([
      contracts.dex.methods
        .getOrders(web3.utils.fromAscii(token.ticker), SIDE.BUY)
        .call(),

      contracts.dex.methods
        .getOrders(web3.utils.fromAscii(token.ticker), SIDE.SELL)
        .call(),
    ]);

    return { buy: orders[0], sell: orders[1] };
  };

  const deposit = async (tokenAmount) => {
    if (tokenAmount) {
      const amount = web3.utils.toWei(tokenAmount, "ether");

      try {
        await contracts[user.selectedToken.ticker].methods
          .approve(contracts.dex.options.address, amount)
          .send({ from: user.accounts[0] });

        await contracts.dex.methods
          .deposit(amount, web3.utils.fromAscii(user.selectedToken.ticker))
          .send({ from: user.accounts[0] });

        const balances = await getBalances(
          user.accounts[0],
          user.selectedToken
        );

        setUser((user) => ({ ...user, balances }));
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  const withdraw = async (tokenAmount) => {
    if (tokenAmount) {
      const amount = web3.utils.toWei(tokenAmount, "ether");

      try {
        await contracts.dex.methods
          .withdraw(amount, web3.utils.fromAscii(user.selectedToken.ticker))
          .send({ from: user.accounts[0] });

        const balances = await getBalances(
          user.accounts[0],
          user.selectedToken
        );

        setUser((user) => ({ ...user, balances }));
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  const createMarketOrder = async (amount, side) => {
    if (amount > 0) {
      try {
        await contracts.dex.methods
          .createMarketOrder(
            web3.utils.fromAscii(user.selectedToken.ticker),
            amount,
            side
          )
          .send({ from: user.accounts[0] });

        const orders = await getOrders(user.selectedToken);
        setOrders(orders);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  const createLimitOrder = async (amount, price, side) => {
    if (amount > 0 && price > 0) {
      try {
        await contracts.dex.methods
          .createLimitOrder(
            web3.utils.fromAscii(user.selectedToken.ticker),
            amount,
            price,
            side
          )
          .send({ from: user.accounts[0] });

        const orders = await getOrders(user.selectedToken);
        setOrders(orders);
      } catch (err) {
        console.log(err);
      }
    } else {
      return;
    }
  };

  const addToken = async (ticker, address) => {
    try {
      await contracts.dex.methods
        .addToken(ticker, address)
        .send({ from: accounts[0] });
    } catch (err) {
      console.log(err);
    }
  };

  if (typeof user.selectedToken === "undefined") {
    return <div>Loading...</div>;
  }

  return (
    <AppContainer>
      <AppHeader>
        <Header
          contracts={contracts}
          tokens={tokens}
          user={user}
          selectToken={selectToken}
        />
      </AppHeader>
      <AppBody>
        <AppBodyLeft>
          {user.selectedToken.ticker !== "DAI" ? (
            <>
              <Chart trades={trades} user={user} />
              <OrderBook orders={orders} />
              <MyOrders
                orders={{
                  buy: orders.buy.filter(
                    (order) =>
                      order.trader.toLowerCase() === accounts[0].toLowerCase()
                  ),
                  sell: orders.sell.filter(
                    (order) =>
                      order.trader.toLowerCase() === accounts[0].toLowerCase()
                  ),
                }}
              />
            </>
          ) : (
            <AppInfo contracts={contracts} />
          )}
        </AppBodyLeft>
        <AppBodyRight>
          <Wallet user={user} deposit={deposit} withdraw={withdraw} />
          {user.selectedToken.ticker !== "DAI" ? (
            <>
              <NewOrder
                createMarketOrder={createMarketOrder}
                createLimitOrder={createLimitOrder}
              />
              <TradeBook trades={trades} />
            </>
          ) : (
            <Admin web3={web3} addToken={addToken} />
            // <>
            //   {user.accounts == admin && (
            //     <Admin web3={web3} addToken={addToken} />
            //   )}
            // </>
          )}
        </AppBodyRight>
      </AppBody>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  height: 100vh;
`;

const AppHeader = styled.div`
  width: 100%;
`;

const AppBody = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    height: 100%;
  }
`;

const AppBodyLeft = styled.div`
  flex: 0.6;
`;

const AppBodyRight = styled.div`
  flex: 0.4;
`;

export default App;
