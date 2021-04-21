import React from "react";
import Moment from "react-moment";

import {
  MyOrdersContainer,
  MyOrdersHeader,
  MyOrdersTableContainer,
  TableContainer,
  Table,
  TableWrapper,
  TableRow,
  Header,
  TableHeader,
  TableBodyWrapper,
  TableData,
} from "./MyOrderElements";

const MyOrders = ({ orders }) => {
  const renderList = (orders, side, className) => {
    return (
      <Table>
        <TableWrapper>
          <TableRow>
            <Header className={className}>{side}</Header>
          </TableRow>
          <TableRow>
            <TableHeader>filled / amount</TableHeader>
            <TableHeader>price</TableHeader>
            <TableHeader>timestamp</TableHeader>
          </TableRow>

          <TableBodyWrapper>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableData>
                  {order.filled} / {order.amount}
                </TableData>
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
    <MyOrdersContainer>
      <MyOrdersHeader>My Orders</MyOrdersHeader>
      <MyOrdersTableContainer>
        <TableContainer>
          {renderList(orders.buy, "Buy", "order-list-buy")}
        </TableContainer>
        <TableContainer>
          {renderList(orders.sell, "Sell", "order-list-sell")}
        </TableContainer>
      </MyOrdersTableContainer>
    </MyOrdersContainer>
  );
};

export default MyOrders;
