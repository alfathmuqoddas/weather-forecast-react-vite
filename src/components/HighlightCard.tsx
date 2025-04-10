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
    <div className="p-2  bg-white text-center shadow-sm hover:shadow-md min-h-[150px] rounded-[28px]">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col text-center justify-center items-center">
          <p>{title}</p>
          <div>
            <span className="text-5xl">{body}</span> {unit}
          </div>
          <div>{body2}</div>
          <div>{body3}</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightCard;
