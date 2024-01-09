import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tooltip';

const TinyBarChart = ({ chartData, colors }) => {
  const neumorphicFilter = 'drop-shadow(4px 0px 1px #0f0f0f) drop-shadow(-4px 0px 2px #3b3b3b)';
  const barBorderColor = '#888'; // Choose your desired border color
  const barBorderWidth = 4; // Choose your desired border width

  // State to control the initial animation
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
      setAnimationComplete(true);

  }, []);

  return (
    <div className='bar-chart-container'>
      {chartData.map((data, index) => (
        <div className='bar-column' key={index}>
          <div className='bar'>
            <div
              data-tooltip-id="my-tooltip"
              data-tooltip-content={data.value}
              data-tooltip-place="top"
              data-tooltip-delay-hide={1000}
              className={`bar-fill ${animationComplete ? 'animate' : ''}`}
              style={{
                height: `${animationComplete ?  (data.value / Math.max(...chartData.map(item => item.value))) * 100 : '0'}%`,
              }} // Add data-tip attribute for react-tooltip
            />
          </div>
          <div className='bar-title'>{data.name.charAt(0)}{data.name.charAt(1)}{data.name.charAt(2)}</div>
        </div>
      ))}
      <Tooltip id="my-tooltip" />
    </div>
  );
};

export default TinyBarChart;
