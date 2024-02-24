import React from "react";

const RightSide = ({ children }) => {
  return (
    <div className="col-md-8">
      <div
        className="card-body h-100 bg-light text-light p-4"
        style={{ borderRadius: "28px" }}
      >
        {children}
      </div>
    </div>
  );
};

export default RightSide;
