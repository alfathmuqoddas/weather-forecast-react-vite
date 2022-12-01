import React from 'react';

const RightSide = ({ children }) => {
  return (
    <div className="col-md-8 p-3">
      <div
        className="card-body h-100 bg-secondary text-light"
        style={{ borderRadius: '1rem' }}
      >
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default RightSide;
