import React from "react";

import { FilterBtn } from "./Looped/FilterBtn";

const Filter = ({ data, viewAll, clearAll, toggleFilter }) => {
	const actions = { toggleFilter };

	return (
		<div className='filter'>
			<div className='options'>
				{data.map((option, index) => (
					<FilterBtn key={index} {...option} {...actions} />
				))}
			</div>

			<div className='btn-collection'>
				<button className='view-all' title='View all' onClick={viewAll}>
					View All
				</button>
				<button className='clear' title='Clear filter' onClick={clearAll}>
					Clear
				</button>
			</div>
		</div>
	);
};

export default Filter;
