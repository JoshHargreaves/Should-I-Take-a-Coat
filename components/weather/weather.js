
export default function Home({results}) {
    const WeatherCodes = {
        "0": {
           "description": "Sunny",
           "statement": "0"
        },
        "1": {
            "description": "Mainly Sunny",
            "statement": "0"
         },
         "2": {
            "description": "Party Cloudy",
            "statement": "0"
         },
         "3": {
            "description": "Cloudy",
            "statement": "0"
         },
         "45": {
            "description": "Foggy",
            "statement": "0"
         },
         "48": {
            "description": "Foggy",
            "statement": "0"
         },
         "51": {
            "description": "Light Drizzle",
            "statement": "3"
         },
         "53": {
            "description": "Drizzle",
            "statement": "3"
         },
         "55": {
            "description": "Heavy Drizzle",
            "statement": "4"
         },
         "56": {
            "description": "Light Freezing drizzle",
            "statement": "3"
         },
         "57": {
            "description": "Freezing drizzle",
            "statement": "3"
         },
         "61": {
            "description": "light rain",
            "statement": "3"
         },
         "63": {
            "description": "Rain",
            "statement": "4"
         },
         "65": {
            "description": "Heavy Rain",
            "statement": "5"
         },
         "66": {
            "description": "Light freezing rain",
            "statement": "4"
         },
         "67": {
            "description": "Freezing rain",
            "statement": "4"
         },
         "71": {
            "description": "Light snow",
            "statement": "4"
         },
         "73": {
            "description": "Snow ",
            "statement": "5"
         },
         "75": {
            "description": "Heavy Snow",
            "statement": "5"
         },
         "77": {
            "description": "Snow grains",
            "statement": "4"
         },
         "80": {
            "description": "Light Showers",
            "statement": "3"
         },
         "81": {
            "description": "Showers",
            "statement": "4"
         },
         "82": {
            "description": "Heavy Showers",
            "statement": "5"
         },
         "85": {
            "description": "Snow Showers",
            "statement": "4"
         },
         "86": {
            "description": "Heavy Snow",
            "statement": "4"
         },
         "95": {
            "description": "Thunderstorm",
            "statement": "6"
         },
         "96": {
            "description": "Thunderstorm with hail",
            "statement": "6"
         },
         "99": {
            "description": "Thunderstorm with heavy hail",
            "statement": "6"
         },
    }

    const statements = {
        "0": "Bea.....utiful Day ....No need for a coat!!",
        "1": "If you feel the cold take a coat",
        "2": "It's Cold i would take a coat",
        "3": "Take a coat if you don't want to get a tiny bit wet or out for a while!",
        "4": "Take a coat if you don't want to get wet!",
        "5": "Take a coat unless you want to get drenched!",
        "6": "Do you really need to go outside? Theres a STORM!! TAKE A COAT"
    }
    var statementCode = WeatherCodes[results.current_weather.weathercode]["statement"];
    var statement = statements[statementCode];

	return (
		<div>
			<main>
            <div className="border-4 border-solid border-gray-900 rounded-lg p-20">
          <h1 className="text-5xl text-slate-50 font-bold ">
            {statement}
          </h1>
          </div>

			</main>
		</div>
	);
}