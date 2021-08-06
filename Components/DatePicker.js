import React, { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { UsersIcon } from "@heroicons/react/solid";
const Calender = ({ handleReset }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [peoples, setPeoples] = useState(1);
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleChange = (range) => {
    console.log(range);
    setStartDate(range?.selection.startDate);
    setEndDate(range?.selection.endDate);
  };

  return (
    <div
      className={
        "flex flex-col col-span-3 items-center mx-auto mb-5 mt-3 flex-grow "
      }
    >
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleChange}
        rangeColors={["#FD5B61"]}
        minDate={new Date()}
      />
      <div className="flex items-center border-b my-2 pb-2 w-full">
        <h1 className="flex-grow text-xl font-semibold">Number of guests</h1>
        <UsersIcon className="h-6" />
        <input
          type="number"
          min="1"
          className="w-12 px-2 mr-2 text-lg outline-none text-red-400 "
          value={peoples}
          onChange={(e) => setPeoples(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between px-10 w-full text-xl">
        <button className="text-gray-500" onClick={handleReset}>
          Cancel
        </button>
        <button className="text-red-400">Search</button>
      </div>
    </div>
  );
};

export default Calender;
