const HighlightWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log("render HighlightWrapper");
  return (
    <div className="grid grid-cols-2 md:grid-cols-md-3 text-dark gap-2 pt-4">
      {children}
    </div>
  );
};

export default HighlightWrapper;
