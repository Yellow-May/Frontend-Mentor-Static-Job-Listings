import React from "react";
import JobItem from "./Looped/JobItem";

const Main = ({ data }) => {
	return (
		<main>
			{data.map(job => (
				<JobItem key={job.id} {...job} />
			))}
		</main>
	);
};

export default Main;
