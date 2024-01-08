import React from "react";
import { LineChart, Line, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TinyLineChart = ({ data, strokeColor }) => {

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload; // Extracting the data point
      return (
        <div className="custom-tooltip">
          <p className="label">{dataPoint.name}</p>
          <p className="data">{dataPoint.value}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <ResponsiveContainer>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        style={{ cursor: 'pointer' }}
      >
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Line
          name={data[0].title}
          type="monotone"
          dataKey="value"
          stroke={ strokeColor||"#8884d8"}
          strokeWidth={3}
          activeDot={{ r: 3, isAnimationActive: false }} // Disable vertical lines on hover
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TinyLineChart;
