import React, { useContext } from "react";

import { JobContext } from "./../context/JobContext";

import JobItem from "./Looped/JobItem";

const Main = () => {
  const { jobData } = useContext(JobContext);

  return (
    <main>
      {jobData.map((job) => (
        <JobItem key={job.id} {...job} />
      ))}
    </main>
  );
};

export default Main;
