import React from "react";

export const FilterBtn = ({ name, on, type, toggleFilter }) => {
	return (
		<button
			className='option'
			name={name.toLowerCase()}
			title={name + " option"}
			onClick={() => toggleFilter(name, on, type)}
			style={{
				background: on && "var(--Desaturated-Dark-Cyan)",
				color: on && "#fff",
				boxShadow: on && "0.1rem 0.1rem 0.25rem rgba(70, 70, 70, 1)",
				transform: on && "scale(1)",
			}}>
			{name}
		</button>
	);
};
