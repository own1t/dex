import React from "react";

import styled from "styled-components";
import Moment from "react-moment";

const TradeBook = ({ trades }) => {
  const renderList = (trades) => {
    return (
      <Table>
        <TableWrapper>
          <TableRow>
            <TableHeader>amount</TableHeader>
            <TableHeader>price</TableHeader>
            <TableHeader>timestamp</TableHeader>
          </TableRow>

          <TableBodyWrapper>
            {trades.map((trade) => (
              <TableRow key={trade.tradeId}>
                <TableData>{trade.amount}</TableData>
                <TableData>{trade.price}</TableData>
                <TableData>
                  {/* <Moment fromNow>{parseInt(trade.date) * 1000}</Moment> */}

                  <Moment format="YYYY/MM/DD HH:mm">
                    {parseInt(trade.date) * 1000}
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
      //       <TableHeader>amount</TableHeader>
      //       <TableHeader>price</TableHeader>
      //       <TableHeader>timestamp</TableHeader>
      //     </TableRow>
      //   </thead>
      //   <tbody>
      //     <TableBody>
      //       {trades.map((trade) => (
      //         <TableRow key={trade.tradeId}>
      //           <TableData>{trade.amount}</TableData>
      //           <TableData>{trade.price}</TableData>
      //           <TableData>
      //             <Moment fromNow>{parseInt(trade.date) * 1000}</Moment>
      //           </TableData>
      //         </TableRow>
      //       ))}
      //     </TableBody>
      //   </tbody>
      // </Table>
    );
  };

  return (
    <TradeBookContainer>
      <TradeBookHeader>Trade Book</TradeBookHeader>
      {renderList(trades, "trade-list")}
    </TradeBookContainer>
  );
};

const TradeBookContainer = styled.div`
  /* border: 1px solid red; */
  height: 20%;
  margin: 10px;
  padding: 20px;
  border: 1px solid gray;
  max-height: 240px;
  overflow-y: hidden;
`;

const TradeBookHeader = styled.h2`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
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

export default TradeBook;
