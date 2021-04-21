import React from "react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
} from "recharts";

import { ChartContainer, ChartWrapper, ChartHeader } from "./ChartElements";

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

export default Chart;
