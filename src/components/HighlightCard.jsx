import React from 'react';

const HighlightCard = ({ children }) => {
  return (
    <>
      <div className="col">
        <div
          className="p-2 border bg-light text-center"
          style={{ minHeight: '150px', borderRadius: '1rem' }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default HighlightCard;
