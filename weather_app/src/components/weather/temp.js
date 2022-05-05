import React, { useState, useEffect } from "react";
import "./style.css";
import WeatherCard from "./weatherCard";

const Temp = () => {
	const [searchValue, setSearchValue] = useState("Chandigarh");

	const [tempInfo, setTempInfo] = useState({});

	const getWeatherInfo = async () => {
		try {
			let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=ec44a768bc00d95cee883cae2bfb6b79`;

			const res = await fetch(url);
			const data = await res.json();

			const { temp, humidity, pressure } = data.main;

			const { main: weathermood } = data.weather[0];

			const { name } = data;

			const { speed } = data.wind;

			const { country, sunset, sunrise } = data.sys;

			const myNewWeatherInfo = {
				temp,
				humidity,
				pressure,
				weathermood,
				country,
				name,
				speed,
				sunset,
			};

			setTempInfo(myNewWeatherInfo);

			console.log(temp);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getWeatherInfo();
	}, []);

	return (
		<>
			<div className="wrap">
				<div className="search">
					<input
						type="text"
						placeholder="Search..."
						autoFocus
						id="search"
						className="searchTerm"
						value={searchValue}
						onChange={(e) => setSearchValue(e.target.value)}
					/>
					<button
						className="searchButton"
						type="button"
						onClick={getWeatherInfo}
					>
						Search
					</button>
				</div>
			</div>

			{/* temp card */}

			<WeatherCard tempInfo={tempInfo} />
		</>
	);
};

export default Temp;
