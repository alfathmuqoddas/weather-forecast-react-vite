const WeatherCard = ({ children }: { children: React.ReactNode }) => {
  console.log("render WeatherCard");
  return (
    <div className="blur-effect rounded-[28px]">
      <div className="flex flex-col md:flex-row">{children}</div>
    </div>
  );
};

export default WeatherCard;
