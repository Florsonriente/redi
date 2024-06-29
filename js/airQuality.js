//AIR QUALITY GOT FROM THE CITY from input form WRITTEN BY THE USER: 

 // Make the AirQuality Request event happen by submitting the form in air quality page=> "start" with async event the "Get Coordinates" function  (step 1) 
  
 const form = document.getElementById("city-form");
 form.addEventListener("submit", async (event) => {
   event.preventDefault();

   let locationName;
   let url; 
   const city = document.getElementById("city-input").value;
   const aqiDescription = document.getElementById("airquality_description");
 
   const location = await getCoordinates(city);
   if (location) {
     locationName = location.display_name;
     url = `https://cors-anywhere.herokuapp.com/https://api.ambeedata.com/latest/by-lat-lng?lat=${location.lat}&lng=${location.lon}`;
  
     // Call the Air Quality API request with the updated URL from the get Coordinates city function
     fetchAndUpdateAirQuality(url, locationName);
   
   } else {
     aqiDescription.textContent = "Unable to find coordinates for the given city. Please try again!";
   
   }
 });


 // step1:
 /* Converts a city name written down by the user, to latitude and longitude coordinates using the OpenStreetMap Nominatim API, the first city from the object: */

async function getCoordinates(city) {

  const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
  const response = await fetch(url);//get /is fetch, post is create a resorce from the client
  const cities = await response.json();
  console.log("cities:", cities); 
  if (cities.length>0) {
      
      const importanceArray = cities.map(city => city.importance);
      const maxImportance = Math.max(...importanceArray);
      const indexOfHighestImportance = cities.findIndex(city => city.importance === maxImportance);
      
      return { 
          lat: parseFloat(cities[indexOfHighestImportance].lat), 
          lon: parseFloat(cities[indexOfHighestImportance].lon), 
          display_name: cities[indexOfHighestImportance].display_name
      };
  } else {
      return null;
  }
}
 
  // step 2: gets the AirQuality Index from the data got from the Get Coordiantes Function
  
  async function fetchAndUpdateAirQuality(url, locationName) {

    const api_key = "bf5065e8187b79be1d6e99b3ec2823ff430f81079d4e9af613967b6e71a975b9";
    const headers = {
      "x-api-key": api_key,
      "Content-type": "application/json",
    };
    const options = {
      method: "GET",
      headers: headers,
    };
  
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
  
      const airQualityIndex = await response.json();
      const airQuality = airQualityIndex?.stations?.[0]?.AQI;
      console.log("Air Quality:", airQuality);
  
      if (airQuality !== undefined) {
        updateAirQualityCloudGaugeDescription(airQuality, locationName);
      } else {
        throw new Error("Invalid data received from the API");
      }
    } catch (error) {
      console.error("Error fetching air quality data:", error);
      alert("Hey! Thanks for trying this feature! Unfortunately to be able to have this feature in my portfolio, I need to pay for this data to Ambee data provider. Feel free to go to Inspect tools and check the complex code or just go to my personal webpage https://florsonriente.github.io/alona/about.html and watch showreel;-)");
    }
  }
  
  
  // 3) STEP 3 : do the styling of the needle, of the clouds and the h2 content describing the air quality 
  
  // Function to update the air quality gauge & the needle based on the AQI value
    function updateAirQualityCloudGaugeDescription(aqi, locationName) {
    
    const needle = document.querySelector(".needle");
    const aqiSpan = document.getElementById("aqi");
    const aqiDescription = document.getElementById("airquality_description");
    const rotation = (aqi / 500) * 180; // AQI ranges from 0 to 500
    let clouds = document.getElementById("image_wrapper");


    needle.style.transform = `rotate(${rotation}deg)`;
    aqiSpan.textContent = `${aqi}`;
  
    // Update the clouds and the h2 text content based on the got from the Air Quality data
  
    clouds.style.filter = "blur(9px)";
    const prefix = `The air quality index in ${locationName} is ${aqi} and it means that the air quality is`
  
    if (aqi <= 50) {
      clouds.style.filter = "invert(0) brightness(1) blur(9px)";
      aqiDescription.textContent = `${prefix} good. Nevertheless we can still think about the ways to make it better!`;
    } else if (aqi <= 100) {
      clouds.style.filter = "invert(0) brightness(0.5) blur(9px)";
      aqiDescription.textContent = `${prefix} moderate. Usually sensitive individuals should consider limiting prolonged outdoor exertion.`;
    } else if (aqi <= 150) {
      clouds.style.filter = "invert(0) brightness(0.3) blur(9px)";
      aqiDescription.textContent = `${prefix} Unhealthy for Sensitive Groups. Children, active adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.`;
    } else if (aqi <= 200) {
      clouds.style.filter = "invert(1) brightness(0) blur(9px)";
      aqiDescription.textContent = `${prefix} Unhealthy. Children, active adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.`;
    } else if (aqi <= 300) {
        clouds.style.filter = "invert(1) brightness(0) blur(9px)";
      aqiDescription.textContent = `${prefix} Very Unhealthy. Children, active adults, and people with respiratory disease, such as asthma, should avoid outdoor exertion; everyone else should limit outdoor exertion.`;
    } else if (aqi <= 500) {
        clouds.style.filter = "invert(1) brightness(0) blur(9px)";
      aqiDescription.textContent = `${prefix} Hazardous. Everyone should avoid all physical activity outdoors.`;
    }
  }