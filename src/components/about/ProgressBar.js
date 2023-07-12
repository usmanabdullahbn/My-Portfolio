import React from 'react';

const ProgressBar = ({ percentage }) => {
  const progressBarStyle = {
    width: `${percentage}%`,
    backgroundColor: '#3498db',
    height: '10px',
    borderRadius: '4px',
  };

  const textStyle = {
    color: '#000',
    fontSize: '18px',
    fontWeight: 'bold',

  };

  return (
    <div>
   <div style={{
    backgroundColor: "#666",
    borderRadius: '4px',
   }}>
   <div style={progressBarStyle}></div>
   </div>
      <div style={textStyle}>{percentage}%</div>
    </div>
  );
};

export default ProgressBar;
