import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TinyLineChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <Tooltip
            formatter={(value) => [value, 'Your Custom Unit']}
          />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={3} activeDot={{ r: 3 }} />
        </LineChart>
        </ResponsiveContainer>
    );
};

export default TinyLineChart;
