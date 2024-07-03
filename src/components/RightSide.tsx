interface RightSideProps {
  children: React.ReactNode;
}

const RightSide: React.FC<RightSideProps> = ({ children }) => {
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
