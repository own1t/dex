import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

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

const MyOrdersContainer = styled.div`
  /* border: 1px solid red; */

  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
  max-height: 220px;
  overflow-y: hidden;

  .order-list-buy {
    background-color: green !important;
  }

  .order-list-sell {
    background-color: red !important;
  }

  @media screen and (max-width: 500px) {
    height: 100%;
    max-height: 100%;
  }
`;

const MyOrdersHeader = styled.h2`
  /* border: 1px solid red; */

  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

const MyOrdersTableContainer = styled.div`
  /* border: 1px solid red; */

  display: flex;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    height: 100%;
  }
`;

const TableContainer = styled.div`
  /* border: 1px solid red; */

  flex: 1;
  margin: 0px 5px;
  max-height: 200px;
  min-height: 200px;
`;

const Table = styled.div`
  /* border: 1px solid red; */

  width: 100%;
`;

const TableWrapper = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  font-size: 0.8rem;
  font-weight: 800;
`;

const TableBodyWrapper = styled.div`
  /* border: 1px solid red; */

  max-height: 100px;
  overflow: auto;
`;

const TableRow = styled.div`
  /* border: 1px solid red; */

  display: flex;
`;

const Header = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  font-weight: 800;
`;

const TableHeader = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  border: 1px solid #000;
  font-size: 0.8rem;
  font-weight: 800;
`;

const TableData = styled.div`
  /* border: 1px solid red; */

  width: 100% !important;
  padding: 10px;
  border: 1px solid #000;
  font-size: 0.8rem;
`;

export default MyOrders;
