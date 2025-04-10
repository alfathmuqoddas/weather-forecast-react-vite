const HighlightWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log("render HighlightWrapper");
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">{children}</div>
  );
};

export default HighlightWrapper;
