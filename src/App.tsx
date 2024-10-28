import { WeatherCard } from "./weather-card/weatherCard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const API_KEY = "194e08bef0674fc4a1685417242810";
const location = "Stockholm";
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <WeatherCard apiKey={API_KEY} location={location} />
      </QueryClientProvider>
    </>
  );
}

export default App;
