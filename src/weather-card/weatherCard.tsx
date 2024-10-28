import { useQuery } from "@tanstack/react-query";

type WeatherCardProps = {
  apiKey: string;
  location: string;
};

export function WeatherCard({ apiKey, location }: WeatherCardProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["weather"],
    queryFn: async () => {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`
      );
      if (!response.ok) {
        throw new Error("Could not fetch people from api");
      }
      console.log(response);
      return response.json();
    },
  });
  if (isLoading) return <div>Laddar...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gray-300 flex flex-row w-48 m-2 rounded-md shadow-md">
      <div className="p-2">
        <h3 className="">{data.current.condition.text}</h3>
        <img src={data.current.condition.icon} alt="weather" />
      </div>
      <div className="border-l p-2">
        <h2>{data.location.name} </h2>
        <h3>{data.location.localtime}</h3>
        <h1>{data.current.temp_c}</h1>
      </div>
    </div>
  );
}
