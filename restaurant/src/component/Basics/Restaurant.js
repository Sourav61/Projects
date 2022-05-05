import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi";

import MenuCard from "./MenuCard";

import Navbar from "./Navbar";

const uniqueList = [
	...new Set(
		Menu.map((element) => {
			return element.category;
		})
	),
	"All",
];

console.log(uniqueList);

const Restaurant = () => {
	const [menuData, setmenuData] = useState(Menu);
	const [menuList, setmenuList] = useState(uniqueList);

	const filterItem = (category) => {
		if (category === "All") {
			setmenuData(Menu);

			return;
		}

		const updatedList = Menu.filter((element) => {
			return element.category === category;
		});

		setmenuData(updatedList);
	};

	return (
		<>
			<Navbar filterItem={filterItem} menuList={menuList} />
			<MenuCard menuData={menuData} />
		</>
	);
};

export default Restaurant;
