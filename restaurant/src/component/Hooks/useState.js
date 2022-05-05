import React, { useState } from "react";
import "./style.css";


const UseState = () => {
	const [myNum, setmyNum] = useState(10);

	return (
		<div>
			<div className="center_div">
				<p>{myNum}</p>
				<div className="button2" onClick={() => setmyNum(myNum + 1)}>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					Incr
				</div>
				<div
					className="button2"
					onClick={() => (myNum > 0 ? setmyNum(myNum - 1) : setmyNum(0))}
				>
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

export default UseState;
