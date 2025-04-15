"use client";
import React from "react";
import ReactDatePicker, { DateObject } from "react-multi-date-picker";
import "react-multi-date-picker/styles/colors/green.css";

type DatePickerProps = {
  selectedDate: DateObject[];
  setSelectedDate: (date: DateObject[]) => void;
  placeholder?: string;
};
function DatePicker({
  selectedDate,
  setSelectedDate,
  placeholder,
}: DatePickerProps) {
  return (
    <ReactDatePicker
      value={selectedDate}
      onChange={(newValue: DateObject[]) => setSelectedDate(newValue)}
      range
      numberOfMonths={2}
      format="DD/MM/YYYY"
      placeholder={placeholder || "Select date range"}
      showOtherDays
      className="green"
      inputClass="w-full h-[65px] border border-[#DBDDE0] bg-white rounded-md px-4 py-2 text-base focus:outline-none"
    />
  );
}

export default DatePicker;
