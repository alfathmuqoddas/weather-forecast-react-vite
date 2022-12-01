import React from "react";

const HighlightCard = ({ children }) => {
  return (
    <>
      <div className="col">
        <div
          className="p-2 border bg-light text-center shadow-sm border-0"
          style={{ minHeight: "150px", borderRadius: "1rem" }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default HighlightCard;
