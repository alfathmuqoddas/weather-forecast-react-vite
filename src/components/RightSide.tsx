const RightSide = ({ children }: { children: React.ReactNode }) => {
  console.log("render RightSide");
  return (
    <div className="md:w-4/6">
      <div className="flex flex-col gap-8 justify-between h-full bg-neutral-50 font-light p-4 rounded-[28px]">
        {children}
      </div>
    </div>
  );
};

export default RightSide;
