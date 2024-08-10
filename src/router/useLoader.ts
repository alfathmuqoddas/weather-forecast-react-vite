import { json } from "react-router-dom";

interface LocationParams {
  location: string;
}

export default async function useLoader({
  params,
}: {
  params: LocationParams;
}) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${params.location}&appid=4018b500122ee53a2b2b0ccc505a5ae4&units=metric`
  );
  const data = await response.json();
  return json(data);
}
