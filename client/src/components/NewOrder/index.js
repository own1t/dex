import React, { useState } from "react";

import {
  NewOrderContainer,
  NewOrderWrapper,
  NewOrderHeader,
  NewOrderItem,
  NewOrderLabel,
  NewOrderData,
  NewOrderBottom,
  NewOrderRight,
} from "./NewOrderElements";
import { Button } from "@material-ui/core";

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

export default NewOrder;
