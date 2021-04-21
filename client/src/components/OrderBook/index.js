import React from "react";
import Moment from "react-moment";

import {
  OrderBookContainer,
  OrderBookHeader,
  OrderBookTableContainer,
  Table,
  TableWrapper,
  TableRow,
  Header,
  TableHeader,
  TableBodyWrapper,
  TableData,
  TableContainer,
} from "./OrderBookElements";

const OrderBook = ({ orders }) => {
  const renderList = (orders, side, className) => {
    return (
      <Table>
        <TableWrapper>
          <TableRow>
            <Header className={className}>{side}</Header>
          </TableRow>
          <TableRow>
            <TableHeader>amount</TableHeader>
            <TableHeader>price</TableHeader>
            <TableHeader>timestamp</TableHeader>
          </TableRow>

          <TableBodyWrapper>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableData>{order.amount - order.filled}</TableData>
                <TableData>{order.price}</TableData>
                <TableData>
                  {/* <Moment fromNow>{parseInt(order.date) * 1000}</Moment> */}

                  <Moment format="YYYY/MM/DD HH:mm">
                    {parseInt(order.date) * 1000}
                  </Moment>
                </TableData>
              </TableRow>
            ))}
          </TableBodyWrapper>
        </TableWrapper>
      </Table>
    );
  };

  return (
    <OrderBookContainer>
      <OrderBookHeader>Order Book</OrderBookHeader>
      <OrderBookTableContainer>
        <TableContainer>
          {renderList(orders.buy, "Buy", "order-list-buy")}
        </TableContainer>
        <TableContainer>
          {renderList(orders.sell, "Sell", "order-list-sell")}
        </TableContainer>
      </OrderBookTableContainer>
    </OrderBookContainer>
  );
};

export default OrderBook;
