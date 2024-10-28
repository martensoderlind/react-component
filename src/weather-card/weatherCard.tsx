import { useQuery } from "@tanstack/react-query";

type WeatherCardProps = {
  apiKey: string;
  location: string;
};

const FetchWeatherData = (apiKey: string, location: string) => {
  return useQuery({
    queryKey: ["weather", location],
    queryFn: async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Could not fetch people from api");
      }
      return response.json();
    },
  });
};

export function WeatherCard({ apiKey, location }: WeatherCardProps) {
  const { data, isLoading, error } = FetchWeatherData(apiKey, location);

  if (isLoading)
    return (
      <div className="bg-gray-300 w-52 h-24 rounded-md shadow-md text-center">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="bg-gray-300 w-52 h-24 rounded-md shadow-md text-center">
        Error: {error.message}
      </div>
    );

  return (
    <div className="bg-slate-400 flex flex-row w-60 h-24 m-2 rounded-md shadow-md">
      <div className="p-2">
        <h3 className="font-medium text-lg">{data.current.condition.text}</h3>
        <img src={data.current.condition.icon} alt="weather" />
      </div>
      <div className="border-l p-2">
        <h2 className="font-bold text-lg ">{data.location.name} </h2>
        <h3 className="font-light text-xs">{data.location.localtime}</h3>
        <h1 className="font-normal text-lg py-1">{data.current.temp_c} °C</h1>
      </div>
    </div>
  );
}
