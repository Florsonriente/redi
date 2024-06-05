//AIR QUALITY GOT FROM THE CITY from input form WRITTEN BY THE USER: 3 steps:

// 1) STEP 1: GET THE lat and lon coordinates (for API url) from the city input from the user
// 2) STEP 2: integrate the lat and lon from the city into API Key url and get the air quality 
// 3) STEP 3 : do the styling of the needle, of the clouds and the h2 content describing the air quality 

// STEP 1: GET THE lat and lon coordinates (for API url) from the city input from the user


//STEP 1a:   /* Converts a city name to latitude and longitude coordinates using the OpenStreetMap Nominatim API, the first city from the object: */

async function getCoordinates(city) {

    const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
    const response = await fetch(url);
    const cities = await response.json();
    console.log("cities:", cities); // Log the data 
    if (cities.length > 0) {
        // Find the element with the highest importance
        const importanceArray = cities.map(city => city.importance);
  
        // Use the spread operator to pass the array elements as individual arguments to Math.max
        const maxImportance = Math.max(...importanceArray);
        
        // Find the index of the element with the highest importance
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
  
  //STEP 2a: integrates the data from the API into the url that we need for our Air Quality API url 
  
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
  
      // Construct the URL with the actual latitude and longitude
      url = `https://cors-anywhere.herokuapp.com/https://api.ambeedata.com/latest/by-lat-lng?lat=${location.lat}&lng=${location.lon}`;
   
  
      // Call the API with the updated URL
      fetchAndUpdateAirQuality(url, locationName);
      //aqiDescription.textContent = locationName;
    } else {
      aqiDescription.textContent = "Unable to find coordinates for the given city. Please try again!";
    
    }
  });
  
  //STEP 2b: calls our Air Quality API with correct url
  
  // function fetchAndUpdateAirQuality(url, locationName) {
  
      
  //   // Define your API key
  //   const api_key =
  //     //"1b5d859b6824861a56ffd2a5d3a1a827705605b7e6d91dd98333914220dcf651";
  //     "bf5065e8187b79be1d6e99b3ec2823ff430f81079d4e9af613967b6e71a975b9";
  
  //   // Set headers with your API key
  //   const headers = {
  //     "x-api-key": api_key,
  //     "Content-type": "application/json",
  //   };
  
  //   const options = {
  //     method: "GET",
  //     headers: headers,
  //   };
  
  //   fetch(url, options)
  //     .then((response) => {
  //       if (response.ok) return response.json();
  //       throw new Error("Network response was not ok.");
  //     })
  //     .then((data) => {
  //       const airQuality = data?.stations?.[0]?.AQI;
  //       if (airQuality !== undefined) {
  //         updateAirQualityCloudGaugeDescription(airQuality, locationName);
  //       } else {
  //         throw new Error("Invalid data received from the API");
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching air quality data:", error));
  // }


  async function fetchAndUpdateAirQuality(url, locationName) {
    // Define your API key
    const api_key = "bf5065e8187b79be1d6e99b3ec2823ff430f81079d4e9af613967b6e71a975b9";
  
    // Set headers with your API key
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
  
      const data = await response.json();
      const airQuality = data?.stations?.[0]?.AQI;
  
      // Log the air quality to the console
      console.log("Air Quality:", airQuality);
  
      if (airQuality !== undefined) {
        updateAirQualityCloudGaugeDescription(airQuality, locationName);
      } else {
        throw new Error("Invalid data received from the API");
      }
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  }
  
  
  // 3) STEP 3 : do the styling of the needle, of the clouds and the h2 content describing the air quality 
  
  // Function to update the air quality gauge
  function updateAirQualityCloudGaugeDescription(aqi, locationName) {
    const needle = document.querySelector(".needle");
    const aqiSpan = document.getElementById("aqi");
    const aqiDescription = document.getElementById("airquality_description");
    
  
    // Rotate the needle based on the AQI value
    const rotation = (aqi / 500) * 180; // Assuming AQI ranges from 0 to 500
    needle.style.transform = `rotate(${rotation}deg)`;
    aqiSpan.textContent = `${aqi}`;
  
    ////// Function to update the clouds and the h2 text content based on the got from the Air Quality data
  
    let clouds = document.getElementById("image_wrapper");
  

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
      clouds.style.filter = "invert(1) brightness(0)";
      aqiDescription.textContent = `${prefix} Unhealthy. Children, active adults, and people with respiratory disease, such as asthma, should limit prolonged outdoor exertion.`;
    } else if (aqi <= 300) {
        clouds.style.filter = "invert(1) brightness(0)";
      aqiDescription.textContent = `${prefix} Very Unhealthy. Children, active adults, and people with respiratory disease, such as asthma, should avoid outdoor exertion; everyone else should limit outdoor exertion.`;
    } else if (aqi <= 500) {
        clouds.style.filter = "invert(1) brightness(0)";
      aqiDescription.textContent = `${prefix} Hazardous. Everyone should avoid all physical activity outdoors.`;
    }
  }