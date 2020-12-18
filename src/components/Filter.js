import React, { useContext } from "react";

import { JobContext } from "./../context/JobContext";

import { FilterBtn } from "./Looped/FilterBtn";

const Filter = () => {
  const { filterData, toggleBtnSwitch, clearJobs, viewAllJobs } = useContext(
    JobContext
  );

  return (
    <div className="filter">
      <div className="options">
        {filterData.map((option, index) => (
          <FilterBtn key={index} {...option} event1={toggleBtnSwitch} />
        ))}
      </div>

      <div className="btn-collection">
        <button className="view-all" title="View all" onClick={viewAllJobs}>
          View All
        </button>
        <button className="clear" title="Clear filter" onClick={clearJobs}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
