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
  console.log("render HighlightCard");
  return (
    <>
      <div className="flex flex-col text-center">
        <div className="p-2 text-center shadow-sm min-h-[150px] rounded-[28px]">
          <p>{title}</p>
          <div>
            <span className="text-5xl">{body}</span> {unit}
          </div>
          <div>{body2}</div>
          <div>{body3}</div>
        </div>
      </div>
    </>
  );
};

export default HighlightCard;
