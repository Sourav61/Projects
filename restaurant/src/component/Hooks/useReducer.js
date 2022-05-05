import React, { useReducer, useState } from "react";
import "./style.css";

const reducer = (state, action) => {
	if (action.type == "INCR") {
		state += 1;
	}
	if (state > 0 && action.type == "DECR") {
		state -= 1;
	}
	return state;
};

const UseReducer = () => {
	const [state, dispatch] = useReducer(reducer, 10);

	return (
		<div>
			<div className="center_div">
				<p>{state}</p>
				<div className="button2" onClick={() => dispatch({ type: "INCR" })}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Incr
				</div>
				<div className="button2" onClick={() => dispatch({ type: "DECR" })}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Decr
				</div>
			</div>
		</div>
	);
};

export default UseReducer;
