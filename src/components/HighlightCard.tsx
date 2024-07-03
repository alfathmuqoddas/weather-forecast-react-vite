interface HighlightCardProps {
  title: string;
  body: number | string;
  unit: string;
  body2: React.ReactNode;
  body3: React.ReactNode | string;
}

const HighlightCard: React.FC<HighlightCardProps> = ({
  title,
  body,
  unit,
  body2,
  body3,
}) => {
  return (
    <>
      <div className="col">
        <div
          className="p-2 border bg-light text-center shadow-sm border-0"
          style={{ minHeight: "150px", borderRadius: "28px" }}
        >
          <p>{title}</p>
          <div>
            <span className="display-3">{body}</span> {unit}
          </div>
          <div>{body2}</div>
          <div>{body3}</div>
        </div>
      </div>
    </>
  );
};

export default HighlightCard;
