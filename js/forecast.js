class WeatherForecast {

	date;

	temperatureC;

	temperatureF;

	summary;

	liveData;

	location;

	constructor() {
	}

}


let ForecastArray;
let d = new Date();

alert("Today's date is " + d);

async function GetForecast() {
	//let endpoint = "https://localhost:7065/Place";
	let endpoint = "https://localhost:7065/WeatherForecast?location=Oslo";
	let myStr;

	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		let json_forecast = await response.json();
		for (let i = 1; i < json_forecast.length; i++)
			myStr = myStr + json_forecast[i]["location"];
		document.body.innerHTML = myStr;
		//document.body.innerHTML = JSON.stringify(json_forecast);
		// console.log(json);
	} catch (error) {
		alert(error);
	}

	alert("Today's date is " + d);
	//document.body.innerHTML = response;
	
}