import React from "react";

import Header from "./components/Header";
import Filter from "./components/Filter";
import Main from "./components/Main";

import data from "./data";
import "./app.css";

const App = () => {
	const { jobdata, filterdata } = data();

	const [jobstate, setjobstate] = React.useState(jobdata);
	const [filters, setfilters] = React.useState(filterdata);

	const viewAll = () => {
		setfilters(
			filterdata.map(e => {
				e.on = true;
				return e;
			})
		);
		setjobstate(jobdata);
	};

	const clearAll = () => {
		setfilters(
			filterdata.map(e => {
				e.on = false;
				return e;
			})
		);
		setjobstate([]);
	};

	const role_level_filter = (name, on, type) =>
		on
			? setjobstate(jobstate.filter(e => e[type] !== name))
			: setjobstate(
					[...new Set([...jobstate, ...jobdata.filter(e => e[type] === name)])].sort((a, b) =>
						a.id > b.id ? 1 : -1
					)
			  );

	const langs_tools_filter = (name, on, type) =>
		on
			? setjobstate(jobstate.filter(e => !e[type].includes(name)))
			: setjobstate(
					[...new Set([...jobstate, ...jobdata.filter(e => e[type].includes(name))])].sort(
						(a, b) => (a.id > b.id ? 1 : -1)
					)
			  );

	const toggleFilter = (name, on, type) => {
		setfilters(
			filters.map(e => {
				if (e.name === name) e.on = !on;
				return e;
			})
		);

		type === "role" && role_level_filter(name, on, type);
		type === "level" && role_level_filter(name, on, type);
		type === "languages" && langs_tools_filter(name, on, type);
		type === "tools" && langs_tools_filter(name, on, type);
	};

	const actions = { viewAll, clearAll, toggleFilter };

	return (
		<>
			<Header />
			<Filter data={filters} {...actions} />
			<Main data={jobstate} />
		</>
	);
};

export default App;
