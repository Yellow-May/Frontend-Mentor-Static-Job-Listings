import React, { createContext, useReducer } from "react";

// import AppReducer
import AppReducer from "./AppReducer";

// import data
import data from "./../data.json";

const filterOptions = [
  ...new Map(
    data.map((item) => [item.role, { name: item.role, on: true, type: "role" }])
  ).values(),
  ...new Map(
    data.map((item) => [
      item.level,
      { name: item.level, on: true, type: "level" },
    ])
  ).values(),
  ...new Map(
    data
      .reduce((a, itemLang) => a.concat(itemLang.languages), [])
      .map((item) => [item, { name: item, on: true, type: "languages" }])
  ).values(),
  ...new Map(
    data
      .reduce((a, itemTool) => a.concat(itemTool.tools), [])
      .map((item) => [item, { name: item, on: true, type: "tools" }])
  ).values(),
];

// state initiation
const initialState = {
  filterData: filterOptions,
  jobData: data,
};

// create shop context
export const JobContext = createContext(initialState);

// create shop provider
export const JobProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const toggleBtnSwitch = (option) => {
    dispatch({
      type: "TOGGLE_SWITCH",
      payload: option,
    });
  };

  const clearJobs = () => {
    dispatch({
      type: "CLEAR_JOBS",
    });
  };

  const viewAllJobs = () => {
    dispatch({
      type: "VIEW_ALL_JOBS",
    });
  };

  return (
    <JobContext.Provider
      value={{
        filterData: state.filterData,
        jobData: state.jobData,
        toggleBtnSwitch,
        clearJobs,
        viewAllJobs,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
