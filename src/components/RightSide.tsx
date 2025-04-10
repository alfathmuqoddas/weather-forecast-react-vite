const RightSide = ({ children }: { children: React.ReactNode }) => {
  console.log("render RightSide");
  return (
    <div className="md:w-4/6">
      <div className="h-full bg-white font-light p-4 rounded-[28px]">
        {children}
      </div>
    </div>
  );
};

export default RightSide;
