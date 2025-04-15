"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

import { DateObject } from "react-multi-date-picker";
import DatePicker from "@/components/ui/data-picker";
import TripTypeSelector from "@/app/_components/searchbar/trip-type-selector";
import { tripTypes } from "@/app/_components/searchbar/trip-types";
import LocationSelector, {
  Location,
} from "@/app/_components/searchbar/location-selector";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const airportSuggestions = [
  {
    code: "DXB",
    city: "Dubai",
    countryCode: "AE",
    airport: "Dubai International Airport",
  },
  {
    code: "JFK",
    city: "New York",
    countryCode: "US",
    airport: "John F. Kennedy International Airport",
  },
  {
    code: "LHR",
    city: "London",
    countryCode: "GB",
    airport: "London Heathrow Airport",
  },
  {
    code: "CDG",
    city: "Paris",
    countryCode: "FR",
    airport: "Charles de Gaulle Airport",
  },
  {
    code: "HND",
    city: "Tokyo",
    countryCode: "JP",
    airport: "Tokyo Haneda Airport",
  },
  {
    code: "FRA",
    city: "Frankfurt",
    countryCode: "DE",
    airport: "Frankfurt am Main Airport",
  },
  {
    code: "CAI",
    city: "Cairo",
    countryCode: "EG",
    airport: "Cairo International Airport",
  },
  {
    code: "IST",
    city: "Istanbul",
    countryCode: "TR",
    airport: "Istanbul Airport",
  },
  {
    code: "SIN",
    city: "Singapore",
    countryCode: "SG",
    airport: "Singapore Changi Airport",
  },
  {
    code: "SYD",
    city: "Sydney",
    countryCode: "AU",
    airport: "Sydney Kingsford Smith Airport",
  },
];
function Searchbar() {
  const [directOnly, setDirectOnly] = useState(true);
  const [selectedDepartureDate, setSelectedDepartureDate] = useState<
    DateObject[]
  >([]);
  const [selectedRetrunDate, setSelectedRetrunDate] = useState<DateObject[]>(
    []
  );
  const [selectedTripType, setSelectedTripType] = useState(tripTypes[0].id);
  const [from, setFrom] = useState<Location | null>(null);
  const [to, setTo] = useState<Location | null>(null);

  const onSwap = () => {
    const temp = from ? { ...from } : null;
    setFrom(to);
    setTo(temp);
  };

  const handleDirectOnlyChange = () => {
    setDirectOnly(!directOnly);
  };

  let content;
  switch (selectedTripType) {
    case "one-way":
      content = (
        <DatePicker
          selectedDate={selectedDepartureDate}
          setSelectedDate={setSelectedDepartureDate}
          placeholder="Departure Date"
        />
      );
      break;
    case "round-trip":
      content = (
        <>
          <DatePicker
            selectedDate={selectedDepartureDate}
            setSelectedDate={setSelectedDepartureDate}
            placeholder="Departure Date"
          />
          <DatePicker
            selectedDate={selectedRetrunDate}
            setSelectedDate={setSelectedRetrunDate}
            placeholder="Return Date"
          />
        </>
      );
      break;
    case "multi-leg-flight":
      content = <div>multi-leg-flight</div>;
      break;
    default:
      content = null;
      break;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Searching...");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-[#DBDDE0] rounded-md p-6"
    >
      <TripTypeSelector
        selectedTripType={selectedTripType}
        setSelectedTripType={setSelectedTripType}
      />
      <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-4">
        <LocationSelector
          from={from}
          to={to}
          onSwap={onSwap}
          onChangeFrom={(loc) => setFrom(loc)}
          onChangeTo={(loc) => setTo(loc)}
          suggestions={airportSuggestions}
        />
        {content}
        <Button
          type="submit"
          className="w-full lg:w-auto h-16 px-6 lg:px-8 text-lg text-white font-semibold cursor-pointer"
        >
          Search Flight
        </Button>
      </div>
      <DirectOnlyCheckbox
        directOnly={directOnly}
        handleDirectOnlyChange={handleDirectOnlyChange}
      />
    </form>
  );
}

export default Searchbar;

function DirectOnlyCheckbox({
  directOnly,
  handleDirectOnlyChange,
}: {
  directOnly: boolean;
  handleDirectOnlyChange: () => void;
}) {
  return (
    <div className="flex items-center gap-2 mt-6 md:px-6">
      <Checkbox
        id="direct-only"
        checked={directOnly}
        onClick={handleDirectOnlyChange}
        className="h-5 w-5"
      />
      <Label htmlFor="direct-only" className="text-sm text-muted font-medium">
        Direct only flight
      </Label>
    </div>
  );
}
