import { memo } from "react";

interface HighlightCardProps {
  title: string;
  body: number | string;
  unit: string;
  body2: React.ReactNode | string;
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
    <div className="relative p-4 bg-white text-center shadow-sm hover:shadow-md min-h-[150px] rounded-[28px] flex flex-col">
      {/* Title on top, centered */}
      <div className="absolute top-4 left-0 right-0">
        <p className="text-lg font-semibold">{title}</p>
      </div>

      {/* Centered Body */}
      <div className="flex flex-col justify-center items-center h-full">
        <div className="text-center">
          <span className="text-5xl">{body}</span> {unit}
        </div>
        {body2 && <div>{body2}</div>}
        {body3 && <div>{body3}</div>}
      </div>
    </div>
  );
};

export default memo(HighlightCard);
