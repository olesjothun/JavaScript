let ForecastArray;
let d = new Date();

//alert("Today's date is " + d);


function Mouseover(MyButton) {
	//let MyButton = document.getElementById('Div1');
	MyButton.style.border = "dashed orange 5px";
}

function Mouseout(MyButton) {
	//let MyButton = document.getElementById('Div1');
	MyButton.style.border = "solid green 2px";
}

async function GetForecast() {
	//let endpoint = "https://localhost:7065/Place";
	let endpoint = "https://localhost:7065/WeatherForecast?location=Oslo";
	let myStr = "";
	let myObject;
	var json_forecast = [];

	try {
		const response = await fetch(endpoint);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		json_forecast = await response.json();
		for (let i = 0; i < json_forecast.length; i++) {
			myStr = myStr + json_forecast[i].summary;
			myStr = myStr + json_forecast[i].location;	
		}
		document.getElementById("test1").innerHTML = myStr;
		//document.body.innerHTML = JSON.stringify(json_forecast);
		// console.log(json);
		myObject = new WeatherForecast("2024-08-01", 25, 60, "Fint vær", false, "Canterbury");
		json_forecast.push(myObject); // add the object to the array
		CreateGrid(json_forecast);
		
		

	} catch (error) {
		alert(error);
		myObject = new WeatherForecast("2024-08-01", 25, 60, "Fint vær", false, "Canterbury");
		json_forecast.push(myObject); // add the object to the array
		CreateGrid(json_forecast);
	}

	//alert("Today's date is " + d);
	//document.body.innerHTML = response;
	
}

function CreateGrid(json_data) {
	// Define the grid size
	const rows = json_data.length;
	const columns = 4;
	
	// Get the grid container element
	const gridContainer = document.getElementById('myGrid');
	while (gridContainer.firstChild)
		gridContainer.firstChild.remove();
	

	// Create the grid dynamically
	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < columns; j++) {
			// Create a grid item element
			const gridItem = document.createElement('div');
			gridItem.className = 'grid-item';
			switch (j) {
				case 0:
					gridItem.textContent = json_data[i].date;
					if (i == 0) {
						gridItem.setAttribute('onmouseover', "Mouseover(this)");
						gridItem.setAttribute('onmouseout', "Mouseout(this)");
						gridItem.style.cursor = "pointer";
					}
					break;
				case 1: 
					gridItem.textContent = json_data[i].summary;
					break;
				case 2:
					gridItem.textContent = json_data[i].temperatureC + "°C";					
						gridItem.style.textAlign = "right";
					break;
				case 3:
					gridItem.textContent = json_data[i].location;
					break;
				default:
					gridItem.textContent = `Cell ${i + 1}-${j + 1}`;
			}
			
			// Append the grid item to the grid container
			gridContainer.appendChild(gridItem);
		}
	}
}