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
  console.log("render DailyCard");
  return (
    <div className="p-2 text-center shadow-sm rounded-[28px]">
      <p>{day}</p>
      <figure className="w-full">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`}
          width="50"
          height="50"
          alt="daily-weather-icon"
          className="mx-auto"
        />
      </figure>
      <p>
        {temp}° {feels}°
      </p>
    </div>
  );
};

export default DailyCard;
