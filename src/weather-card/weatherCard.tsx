export function WeatherCard() {
  return (
    <div className="bg-gray-300 flex flex-row w-48 m-2 rounded-md shadow-md">
      <div className="p-2">
        <h3>molnigt</h3>
        <img src="src\assets\sun.svg" alt="weather" />
      </div>
      <div className="border-l p-2">
        <h2>Stockholm</h2>
        <h3>dag</h3>
        <h1>temp</h1>
      </div>
    </div>
  );
}
