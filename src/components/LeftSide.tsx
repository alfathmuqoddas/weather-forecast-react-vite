const LeftSide = ({ children }: { children: React.ReactNode }) => {
  console.log("render LeftSide");
  return <div className="col-md-4 p-4">{children}</div>;
};

export default LeftSide;
