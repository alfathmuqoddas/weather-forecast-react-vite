import React from "react";

const HighlightWrapper = ({ children }) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 text-dark g-2 pt-4">
      {children}
    </div>
  );
};

export default HighlightWrapper;
