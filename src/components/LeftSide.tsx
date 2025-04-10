const LeftSide = ({ children }: { children: React.ReactNode }) => {
  console.log("render LeftSide");
  return <div className="md:w-2/6">{children}</div>;
};

export default LeftSide;
