import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { tripTypes } from "@/app/_components/searchbar/trip-types";

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
      className="flex items-center flex-wrap gap-4 md:px-6"
    >
      {tripTypes.map((trip) => (
        <div key={trip.id} className="flex items-center cursor-pointer">
          <RadioGroupItem value={trip.id} id={trip.id} />
          <Label
            htmlFor={trip.id}
            className={`${
              selectedTripType === trip.id
                ? "text-primary font-semibold"
                : "text-[#AAAAAA]"
            } text-base cursor-pointer pl-2`}
          >
            {trip.label}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
export default TripTypeSelector;
