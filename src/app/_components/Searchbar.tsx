"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

interface Location {
  code: string;
  airport: string;
  city: string;
  countryCode: string;
}

interface LocationSelectorProps {
  from: Location | null;
  to: Location | null;
  onSwap: () => void;
  onChangeFrom: (location: Location | null) => void;
  onChangeTo: (location: Location | null) => void;
  suggestions: Location[];
}
interface LocationBoxProps {
  placeholder: string;
  suggestions: Location[];
  value: Location | null;
  onChange: (location: Location | null) => void;
  excludeCode?: string | null;
}
const tripTypes = [
  { id: "one-way", label: "One Way" },
  { id: "round-trip", label: "Round Trip" },
  { id: "multi-leg-flight", label: "Multi-leg flight" },
];

// const from = { code: "CAI", airport: "Cairo International Airport" };
// const to = { code: "DXB", airport: "Dubai International Airport" };

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
  // const [directOnly, setDirectOnly] = useState(true); // state for Direct Only flights
  const [selectedTripType, setSelectedTripType] = useState(tripTypes[0].id);
  const [from, setFrom] = useState<Location | null>(null);
  const [to, setTo] = useState<Location | null>(null);

  // const [multiCity, setMultiCity] = useState([
  //   { from: "EBL - Erbil, IQ", to: "DXB - Dubai, AE" },
  // ]);

  const onSwap = () => {
    const temp = from ? { ...from } : null;
    setFrom(to);
    setTo(temp);
  };

  // const addCity = () => {
  //   setMultiCity((prevCities) => [...prevCities, { from: "", to: "" }]);
  // };

  // const handleCityChange = (
  //   index: number,
  //   type: "from" | "to",
  //   value: string
  // ) => {
  //   const newCities = [...multiCity];
  //   newCities[index][type] = value;
  //   setMultiCity(newCities);
  // };

  // const handleDirectOnlyChange = () => {
  //   setDirectOnly(!directOnly); // toggle the directOnly state
  // };
  let content;

  switch (selectedTripType) {
    case "one-way":
      content = (
        <LocationSelector
          from={from}
          to={to}
          onSwap={onSwap}
          onChangeFrom={(loc) => setFrom(loc)}
          onChangeTo={(loc) => setTo(loc)}
          suggestions={airportSuggestions}
        />
      );
      break;
    case "round-trip":
      content = <div>round-trip</div>;
      break;
    case "multi-leg-flight":
      content = <div>multi-leg-flight</div>;
      break;
    default:
      content = null;
      break;
  }

  return (
    <div className="border border-[#DBDDE0] rounded-md p-6">
      <TripTypeSelector
        selectedTripType={selectedTripType}
        setSelectedTripType={setSelectedTripType}
      />
      <div className="flex items-center gap-4 flex-wrap mt-4">
        {content}
        <Button className="h-16 px-8 text-lg text-white font-semibold cursor-pointer">
          Search Flight
        </Button>
      </div>
    </div>
  );
}

export default Searchbar;

export const LocationSelector = ({
  from,
  to,
  onSwap,
  onChangeFrom,
  onChangeTo,
  suggestions,
}: LocationSelectorProps) => {
  return (
    <div className="flex items-center gap-4 flex-wrap  relative">
      <LocationBox
        placeholder="Leaving from"
        value={from}
        onChange={onChangeFrom}
        suggestions={suggestions}
        excludeCode={to?.code}
      />
      <button
        type="button"
        onClick={onSwap}
        className="w-8 h-8 element-center rounded-[10px] absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border border-[#DBDDE0] text-primary hover:bg-card cursor-pointer"
      >
        <Image
          src="/images/icons/arrows.svg"
          alt="arrows icon"
          width={16}
          height={16}
        />
      </button>
      <LocationBox
        placeholder="Going to"
        value={to}
        onChange={onChangeTo}
        suggestions={suggestions}
        excludeCode={from?.code}
      />
    </div>
  );
};

function TripTypeSelector({
  selectedTripType,
  setSelectedTripType,
}: {
  selectedTripType: string;
  setSelectedTripType: (value: string) => void;
}) {
  return (
    <RadioGroup
      value={selectedTripType}
      onValueChange={setSelectedTripType}
      className="flex items-center gap-4 px-6"
    >
      {tripTypes.map((trip) => (
        <div key={trip.id} className="flex items-center gap-2 cursor-pointer">
          <RadioGroupItem value={trip.id} id={trip.id} />
          <Label
            htmlFor={trip.id}
            className={`${
              selectedTripType === trip.id
                ? "text-primary font-semibold"
                : "text-[#AAAAAA]"
            } text-base `}
          >
            {trip.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

// function DirectOnlyCheckbox({
//   directOnly,
//   handleDirectOnlyChange,
// }: {
//   directOnly: boolean;
//   handleDirectOnlyChange: () => void;
// }) {
//   return (
//     <div className="flex items-center gap-2 mt-6 px-6">
//       <Checkbox
//         id="direct-only"
//         checked={directOnly}
//         onClick={handleDirectOnlyChange}
//         className="h-5 w-5"
//       />
//       <Label htmlFor="direct-only" className="text-sm text-[#A1A1A1]">
//         Direct only flight
//       </Label>
//     </div>
//   );
// }
const LocationBox = ({
  placeholder,
  suggestions,
  value,
  onChange,
  excludeCode,
}: LocationBoxProps) => {
  const [query, setQuery] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  // Sync query with value
  useEffect(() => {
    if (value) {
      setQuery(`${value.code} - ${value.city}, ${value.countryCode}`);
    } else {
      setQuery("");
    }
  }, [value]);

  const filteredSuggestions = suggestions
    .filter((loc) =>
      `${loc.code} ${loc.city} ${loc.airport}`
        .toLowerCase()
        .includes(query.toLowerCase())
    )
    .filter((loc) => loc.code !== excludeCode);

  const handleSelect = (loc: Location) => {
    onChange(loc);
    setShowDropdown(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setShowDropdown(true);
    if (value) {
      onChange(null); // Clear selected value if typing again
    }
  };
  return (
    <div className="relative flex-1 h-[65px] ">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        placeholder={placeholder}
        className="w-full h-full border border-[#DBDDE0] bg-white rounded-md px-4 py-2 text-base focus:outline-none"
      />

      {showDropdown && filteredSuggestions.length > 0 && (
        <ul className="absolute z-10 bg-white border border-[#DBDDE0] mt-1 rounded-md w-full max-h-60 overflow-auto shadow-sm">
          {filteredSuggestions.map((loc) => (
            <li
              key={loc.code}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSelect(loc)}
            >
              <strong>{loc.code}</strong> - {loc.city}, {loc.countryCode}
              <div className="text-muted text-xs">{loc.airport}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
