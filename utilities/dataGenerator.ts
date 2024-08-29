import dayjs from "dayjs";

// Define city names, airlines, and airline codes
const cityNames = [
  "New York",
  "London",
  "Paris",
  "Tokyo",
  "Sydney",
  "Berlin",
  "Toronto",
  "Rome",
  "Dubai",
  "Singapore",
];

const airlines = ["Turkish Airlines"];
const airlineCodes = ["TK"];

// Helper function to get a random city, optionally excluding a specific city
export const getRandomCity = (excludeCity: string | null = null): string => {
  let city: string;
  do {
    city = cityNames[Math.floor(Math.random() * cityNames.length)];
  } while (city === excludeCity);
  return city;
};

// Helper function to round minutes to the nearest 30
const roundMinutes = (minutes: number): number => {
  let rounded = Math.round(minutes / 30) * 30;

  if (rounded === 60) {
    rounded = 0; // Avoid "60m"
  }

  return rounded;
};

// Generate a random time with rounded minutes
export const getRandomTime = (): string => {
  const hours = Math.floor(Math.random() * 12) + 1; // 1 to 12 hours
  const minutes = roundMinutes(Math.floor(Math.random() * 60)); // Round minutes to nearest 30
  const period = Math.random() < 0.5 ? "AM" : "PM"; // Randomly choose AM or PM
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )} ${period}`;
};

// Generate a random flight duration with rounded minutes
export const getRandomFlightDuration = (): { hours: number; minutes: number; formatted: string } => {
  const hours = Math.floor(Math.random() * 5) + 1; // 1 to 5 hours
  const minutes = roundMinutes(Math.floor(Math.random() * 60)); // Round minutes to nearest 30
  return { hours, minutes, formatted: `${hours}h ${minutes}m` };
};

// Generate random flight
export const generateRandomFlight = (index: number) => {
  const airlineIndex = Math.floor(Math.random() * airlines.length);
  const flightDuration = getRandomFlightDuration();

  // Ensure different cities for fromCity and toCity
  const fromCity = getRandomCity();
  const toCity = getRandomCity(fromCity);

  // Generate random takeoff date and time
  const takeoffDate = dayjs().add(Math.floor(Math.random() * 30), "day");
  const takeoffTime = getRandomTime();
  const takeoffDateTime = dayjs(
    `${takeoffDate.format("YYYY-MM-DD")} ${takeoffTime}`,
    "YYYY-MM-DD h:mm A"
  );

  // Calculate landing time using the same logic as takeoff time
  const landingTime = getRandomTime();
  const landingDateTime = dayjs(
    `${takeoffDate.format("YYYY-MM-DD")} ${landingTime}`,
    "YYYY-MM-DD h:mm A"
  );

  // Ensure the landing date is one day after the takeoff date
  const landingDate = takeoffDate.add(1, "day");

  return {
    id: `flight-${index}`,
    flightNumber: `${airlineCodes[airlineIndex]} ${String(index + 1).padStart(
      4,
      "0"
    )}`,
    airline: airlines[airlineIndex],
    fromCity,
    toCity,
    takeoffTime: takeoffTime,
    landingTime: landingTime,
    takeoffDate: takeoffDate.format("D MMM YYYY"),
    landingDate: landingDate.format("D MMM YYYY"),
    flightDuration: flightDuration.formatted,
  };
};
