import jobdata from "./data.json";

const data = () => {
	const filterdata = [
		...new Map(
			jobdata.map(item => [item.role, { name: item.role, on: true, type: "role" }])
		).values(),
		...new Map(
			jobdata.map(item => [item.level, { name: item.level, on: true, type: "level" }])
		).values(),
		...new Map(
			jobdata
				.reduce((a, itemLang) => a.concat(itemLang.languages), [])
				.map(item => [item, { name: item, on: true, type: "languages" }])
		).values(),
		...new Map(
			jobdata
				.reduce((a, itemTool) => a.concat(itemTool.tools), [])
				.map(item => [item, { name: item, on: true, type: "tools" }])
		).values(),
	];

	return {
		jobdata,
		filterdata,
	};
};

export default data;
