import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Location {
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

const LocationSelector = ({
  from,
  to,
  onSwap,
  onChangeFrom,
  onChangeTo,
  suggestions,
}: LocationSelectorProps) => {
  return (
    <div className="flex items-center gap-2 flex-wrap relative">
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

export default LocationSelector;
const LocationBox = ({
  placeholder,
  suggestions,
  value,
  onChange,
  excludeCode,
}: LocationBoxProps) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
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

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex-1 h-[65px]" ref={dropdownRef}>
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
