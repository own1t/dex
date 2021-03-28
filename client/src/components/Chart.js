import React from "react";

import styled from "styled-components";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

const Chart = ({ trades, user }) => {
  const renderChart = (trades) => {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trades}>
          <Line type="monotone" dataKey="price" stroke="#3096e8" />
          <CartesianGrid stroke="#000000" />
          <XAxis
            dataKey="date"
            tickFormatter={(dateStr) => {
              const date = new Date(parseInt(dateStr) * 1000);
              return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            }}
          />
          <YAxis dataKey="price" />
        </LineChart>
      </ResponsiveContainer>
    );
  };

  return (
    <ChartContainer>
      <ChartHeader>Chart for {user.selectedToken.ticker}</ChartHeader>
      <ChartWrapper>{renderChart(trades)}</ChartWrapper>
    </ChartContainer>
  );
};

const ChartContainer = styled.div`
  /* border: 1px solid red; */

  height: 35%;
  margin: 10px;
  padding: 30px;
  border: 1px solid gray;
`;

const ChartHeader = styled.h2`
  margin-bottom: 15px;
  border-bottom: 5px solid var(--blue-soft);
  font-size: 1.5rem;
`;

const ChartWrapper = styled.div``;

export default Chart;
