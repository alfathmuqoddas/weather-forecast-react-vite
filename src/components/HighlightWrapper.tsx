import { memo } from "react";

const HighlightWrapper = ({ children }: { children: React.ReactNode }) => {
  console.log("render HighlightWrapper");
  return (
    <div className="flex flex-grow">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{children}</div>
    </div>
  );
};

export default memo(HighlightWrapper);
