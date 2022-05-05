import React, { useState, useEffect } from "react";
import "./style.css";
const UseEffect = () => {
	const [myNum, setmyNum] = useState(10);

	useEffect(() => {
		document.title = `chats(${myNum})`;
	});

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

export default UseEffect;
