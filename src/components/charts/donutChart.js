import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const DonutChart = ({ chartData, colors }) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          paddingAngle={10}
          label
        >
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend
          verticalAlign="middle"
          align="right"
          layout="vertical"
          wrapperStyle={{ right: '30px', top: '50%', transform: 'translate(0, -50%)' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DonutChart;
