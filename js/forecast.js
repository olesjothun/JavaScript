import { WeatherForecast } from './WeaherForecastClass.js'
let json_forecast;
let d = new Date();

alert("Today's date is " + d);

async function GetForecast() {
	//let endpoint = "https://localhost:7065/Place";
	let endpoint = "https://localhost:7065/WeatherForecast?location=Oslo";

	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		json_forecast = await response.json();
		document.body.innerHTML = JSON.stringify(json_forecast);
		// console.log(json);
	} catch (error) {
		alert(error);
	}

	alert("Today's date is " + d);
	//document.body.innerHTML = response;
	
}