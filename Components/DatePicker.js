import React, { useState } from "react";
import { DateRangePicker, DateRange } from "react-date-range";
import { UsersIcon } from "@heroicons/react/solid";
const Calender = ({
  handleReset,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  peoples,
  setPeoples,
  handleSearchRedirect
}) => {
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleChange = (range) => {
    setStartDate(range?.selection.startDate);
    setEndDate(range?.selection.endDate);
  };

  return (
    <div
      className={"flex flex-col col-span-3 items-center mx-auto mb-5 mt-3  "}
    >
      <div className="hidden sm:block">
        <DateRangePicker
          ranges={[selectionRange]}
          onChange={handleChange}
          rangeColors={["#FD5B61"]}
          minDate={new Date()}
        />
      </div>
      <div className="block sm:hidden">
        <DateRange
          ranges={[selectionRange]}
          onChange={handleChange}
          rangeColors={["#FD5B61"]}
          minDate={new Date()}
        />
      </div>
      <div className="flex items-center border-b my-2 pb-2 w-full">
        <h1 className="flex-grow text-xl font-semibold">Number of guests</h1>
        <UsersIcon className="h-6" />
        <input
          type="number"
          min="1"
          className="w-12 px-1 mx-5 text-lg outline-none text-red-400 bg-transparent "
          value={peoples}
          onChange={(e) => setPeoples(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-between px-10 w-full text-xl">
        <button className="text-gray-500" onClick={handleReset}>
          Cancel
        </button>
        <button className="text-red-400" onClick={handleSearchRedirect}>Search</button>
      </div>
    </div>
  );
};

export default Calender;
