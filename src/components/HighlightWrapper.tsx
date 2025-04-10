const HighlightWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log("render HighlightWrapper");
  return (
    <div className="row row-cols-2 row-cols-md-3 text-dark g-3 pt-4">
      {children}
    </div>
  );
};

export default HighlightWrapper;
