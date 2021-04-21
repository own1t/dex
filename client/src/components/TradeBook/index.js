import React from "react";

import Moment from "react-moment";

import {
  TradeBookContainer,
  TradeBookHeader,
  Table,
  TableWrapper,
  TableRow,
  TableHeader,
  TableBodyWrapper,
  TableData,
} from "./TradeBookElements";

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
    );
  };

  return (
    <TradeBookContainer>
      <TradeBookHeader>Trade Book</TradeBookHeader>
      {renderList(trades, "trade-list")}
    </TradeBookContainer>
  );
};

export default TradeBook;
