interface HighlightWrapperProps {
  children: React.ReactNode;
}

const HighlightWrapper: React.FC<HighlightWrapperProps> = ({ children }) => {
  return (
    <div className="row row-cols-2 row-cols-md-3 text-dark g-3 pt-4">
      {children}
    </div>
  );
};

export default HighlightWrapper;
