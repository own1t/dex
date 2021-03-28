import React, { useState } from "react";

import { Button } from "@material-ui/core";
import styled from "styled-components";

const TYPE = {
  LIMIT: "LIMIT",
  MARKET: "MARKET",
};

const SIDE = {
  BUY: 0,
  SELL: 1,
};

const NewOrder = ({ createMarketOrder, createLimitOrder }) => {
  const [order, setOrder] = useState({
    type: TYPE.LIMIT,
    side: SIDE.BUY,
    amount: 0,
    price: 0,
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (order.type === TYPE.MARKET) {
      createMarketOrder(order.amount, order.side);
      setOrder({
        type: TYPE.LIMIT,
        side: SIDE.BUY,
        amount: 0,
        price: 0,
      });
    } else {
      createLimitOrder(order.amount, order.price, order.side);
      setOrder({
        type: TYPE.LIMIT,
        side: SIDE.BUY,
        amount: 0,
        price: 0,
      });
    }
  };

  return (
    <NewOrderContainer>
      <NewOrderWrapper>
        <NewOrderHeader>New Order</NewOrderHeader>
        <form onSubmit={(e) => onSubmit(e)}>
          <NewOrderItem>
            <NewOrderLabel>Type</NewOrderLabel>
            <NewOrderData>
              <Button
                className={order.type === TYPE.LIMIT ? "active" : ""}
                onClick={() =>
                  setOrder((order) => ({ ...order, type: TYPE.LIMIT }))
                }
              >
                Limit
              </Button>
              <Button
                className={order.type === TYPE.MARKET ? "active" : ""}
                onClick={() =>
                  setOrder((order) => ({ ...order, type: TYPE.MARKET }))
                }
              >
                Market
              </Button>
            </NewOrderData>
          </NewOrderItem>

          <NewOrderItem>
            <NewOrderLabel>Side</NewOrderLabel>
            <NewOrderData>
              <Button
                className={order.side === SIDE.BUY ? "active" : ""}
                onClick={() =>
                  setOrder((order) => ({ ...order, side: SIDE.BUY }))
                }
              >
                Buy
              </Button>
              <Button
                className={order.side === SIDE.SELL ? "active" : ""}
                onClick={() =>
                  setOrder((order) => ({ ...order, side: SIDE.SELL }))
                }
              >
                Sell
              </Button>
            </NewOrderData>
          </NewOrderItem>

          <NewOrderItem>
            <NewOrderLabel>Amount</NewOrderLabel>
            <NewOrderData>
              <input
                type="number"
                value={order.amount}
                onChange={({ target: { value } }) =>
                  setOrder((order) => ({ ...order, amount: value }))
                }
              />
            </NewOrderData>
          </NewOrderItem>

          {order.type === TYPE.MARKET ? null : (
            <NewOrderItem>
              <NewOrderLabel>Price</NewOrderLabel>
              <NewOrderData>
                <input
                  type="number"
                  value={order.price}
                  onChange={({ target: { value } }) =>
                    setOrder((order) => ({ ...order, price: value }))
                  }
                />
              </NewOrderData>
            </NewOrderItem>
          )}

          <NewOrderBottom>
            <NewOrderRight>
              <Button type="submit" className="submit">
                Submit
              </Button>
            </NewOrderRight>
          </NewOrderBottom>
        </form>
      </NewOrderWrapper>
    </NewOrderContainer>
  );
};

const NewOrderContainer = styled.div`
  /* border: 1px solid red; */

  height: 30%;

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

const NewOrderWrapper = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
`;

const NewOrderHeader = styled.h2`
  /* border: 1px solid red; */

  font-size: 1.5rem;
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
`;

const NewOrderItem = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* padding: 15px 0; */
`;

const NewOrderLabel = styled.label`
  /* border: 1px solid red; */

  flex: 0.3;
  display: flex;
  margin-left: 10px;
  font-size: 1rem;
`;

const NewOrderData = styled.div`
  /* border: 1px solid red; */

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

  > button {
    width: 100% !important;
  }
`;

const NewOrderBottom = styled.div`
  /* border: 1px solid red; */

  display: flex;
  /* align-items: center; */
`;

const NewOrderRight = styled.div`
  /* border: 1px solid red; */

  flex: 0.1;
  margin: 5px;
  margin-left: auto;
  margin-right: 0;
`;

export default NewOrder;
