"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ArrowLeftRight } from "lucide-react"; // optional icon
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

function Searchbar() {
  const tripTypes = [
    { id: "one-way", label: "One Way" },
    { id: "round-trip", label: "Round Trip" },
    { id: "multi-leg-flight", label: "Multi-leg flight" },
  ];
  const [directOnly, setDirectOnly] = useState(true); // state for Direct Only flights
  const [selectedTripType, setSelectedTripType] = useState(tripTypes[0].id);
  const [from, setFrom] = useState({
    code: "EBL - Erbil, IQ",
    airport: "Erbil International Airport",
  });
  const [to, setTo] = useState({
    code: "DXB - Dubai, AE",
    airport: "Dubai International Airport",
  });

  const [multiCity, setMultiCity] = useState([
    { from: "EBL - Erbil, IQ", to: "DXB - Dubai, AE" },
  ]);

  const swapLocations = () => {
    const temp = { ...from };
    setFrom(to);
    setTo(temp);
  };

  const addCity = () => {
    setMultiCity((prevCities) => [...prevCities, { from: "", to: "" }]);
  };

  const handleCityChange = (
    index: number,
    type: "from" | "to",
    value: string
  ) => {
    const newCities = [...multiCity];
    newCities[index][type] = value;
    setMultiCity(newCities);
  };

  const handleDirectOnlyChange = () => {
    setDirectOnly(!directOnly); // toggle the directOnly state
  };

  return (
    <div className="border border-gray-200 rounded-md p-6">
      <RadioGroup
        value={selectedTripType}
        onValueChange={setSelectedTripType}
        className="flex items-center gap-4 px-6"
      >
        {tripTypes.map((trip) => (
          <div key={trip.id} className="flex items-center gap-2">
            <RadioGroupItem value={trip.id} id={trip.id} />
            <Label
              htmlFor={trip.id}
              className={`${
                selectedTripType === trip.id
                  ? "text-primary font-semibold"
                  : "text-gray-400"
              } text-base`}
            >
              {trip.label}
            </Label>
          </div>
        ))}
      </RadioGroup>

      <div className="flex items-center flex-wrap gap-4 mt-6">
        {/* FROM */}
        {selectedTripType !== "multi-leg-flight" && (
          <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
            <h3 className="text-accent text-lg">{from.code}</h3>
            <p className="text-muted text-sm">{from.airport}</p>
          </div>
        )}

        {/* SWITCH BUTTON */}
        {selectedTripType !== "multi-leg-flight" && (
          <button
            type="button"
            onClick={swapLocations}
            className="p-2 rounded-full bg-white border border-gray-300 text-primary hover:bg-card"
          >
            <ArrowLeftRight className="w-5 h-5" />
          </button>
        )}

        {/* TO */}
        {selectedTripType !== "multi-leg-flight" && (
          <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
            <h3 className="text-accent text-lg">{to.code}</h3>
            <p className="text-muted text-sm">{to.airport}</p>
          </div>
        )}

        {/* MULTI-leg-flight - Multiple Destinations */}
        {selectedTripType === "multi-leg-flight" &&
          multiCity.map((city, index) => (
            <div key={index} className="flex items-center gap-4 w-full">
              <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
                <Input
                  type="text"
                  value={city.from}
                  onChange={(e) =>
                    handleCityChange(index, "from", e.target.value)
                  }
                  className="text-lg"
                  placeholder="From"
                />
              </div>

              <button
                type="button"
                onClick={() => swapLocations()}
                className="p-2 rounded-full border border-gray-300 bg-white text-primary hover:bg-card"
              >
                <ArrowLeftRight className="w-5 h-5" />
              </button>

              <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
                <Input
                  type="text"
                  value={city.to}
                  onChange={(e) =>
                    handleCityChange(index, "to", e.target.value)
                  }
                  className="text-lg"
                  placeholder="To"
                />
              </div>
            </div>
          ))}

        {/* Button to Add More Cities */}
        {selectedTripType === "multi-leg-flight" && (
          <button
            onClick={addCity}
            className="mt-4 text-sm py-2 w-full border border-gray-300 bg-white rounded-md hover:bg-gray-200"
          >
            Add Another City
          </button>
        )}

        <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
          <h3 className="text-accent text-lg">12 Feb’ 2025</h3>
          <p className="text-muted text-sm">Wednesday</p>
        </div>

        {selectedTripType === "round-trip" && (
          <button className="flex-1 text-sm py-2 w-full">
            Click to add a return flight for better discounts
          </button>
        )}

        <div className="border border-gray-300 bg-white rounded-md px-4 py-2 flex-1 min-w-[200px]">
          <h3 className="text-accent text-lg">Travellers & Class</h3>
          <p className="text-muted text-sm">1 Traveler / Eco</p>
        </div>

        <Button className="h-16 px-8 text-lg text-white font-semibold cursor-pointer">
          Search Flight
        </Button>
      </div>
      <div className="flex items-center gap-2 mt-6 px-6">
        <Checkbox
          id="direct-only"
          checked={directOnly}
          onClick={handleDirectOnlyChange}
          className="h-5 w-5"
        />
        <Label htmlFor="direct-only" className="text-sm text-muted">
          Direct only flight{" "}
        </Label>
      </div>
    </div>
  );
}

export default Searchbar;
