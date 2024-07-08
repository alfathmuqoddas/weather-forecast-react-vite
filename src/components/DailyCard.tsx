const DailyCard = ({
  day,
  temp,
  feels,
  icon,
}: {
  day: string;
  temp: string;
  feels: string;
  icon: string;
}) => {
  return (
    <div className="col">
      <div
        className="p-2 border bg-light text-center shadow-sm border-0"
        style={{ borderRadius: "28px" }}
      >
        <p>{day}</p>
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          width="50"
          height="50"
          alt="daily-weather-icon"
        />
        <p>
          {temp}° {feels}°
        </p>
      </div>
    </div>
  );
};

export default DailyCard;
