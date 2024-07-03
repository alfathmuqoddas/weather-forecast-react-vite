interface LeftSideProps {
  children: React.ReactNode;
}

const LeftSide: React.FC<LeftSideProps> = ({ children }) => {
  return <div className="col-md-4 p-4">{children}</div>;
};

export default LeftSide;
