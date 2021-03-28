import React from "react";
import Moment from "react-moment";
import styled from "styled-components";

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
      // <Table>
      //   <thead>
      //     <TableRow>
      //       <Header className={className}>{side}</Header>
      //     </TableRow>
      //     <TableRow>
      //       <TableHeader>amount</TableHeader>
      //       <TableHeader>price</TableHeader>
      //       <TableHeader>timestamp</TableHeader>
      //     </TableRow>
      //   </thead>
      //   <tbody>
      //     <TableBody>
      //       {orders.map((order) => (
      //         <TableRow key={order.id}>
      //           <TableData>{order.amount - order.filled}</TableData>
      //           <TableData>{order.price}</TableData>
      //           <TableData>
      //             <Moment fromNow>{parseInt(order.date) * 1000}</Moment>
      //           </TableData>
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </tbody>
      // </Table>
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

const OrderBookContainer = styled.div`
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
    max-height: 100%;
  }
`;

const OrderBookHeader = styled.h2`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

const OrderBookTableContainer = styled.div`
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

// const Table = styled.table`
//   /* border: 1px solid red; */

//   width: 100% !important;
// `;

// const TableRow = styled.tr`
//   /* border: 1px solid red; */

//   display: flex;
// `;

// const Header = styled.th`
//   /* border: 1px solid red; */

//   width: 100% !important;
//   padding: 10px;
//   font-weight: 800;
// `;

// const TableHeader = styled.th`
//   /* border: 1px solid red; */

//   width: 100% !important;
//   padding: 10px;
//   border: 1px solid #000;
//   font-size: 0.8rem;
//   font-weight: 800;
// `;

// const TableData = styled.td`
//   /* border: 1px solid red; */

//   width: 100% !important;
//   padding: 10px;
//   border: 1px solid #000;
//   font-size: 0.8rem;
// `;

// const TableBody = styled.div`
//   max-height: 100px;
//   overflow: auto;
// `;

export default OrderBook;
