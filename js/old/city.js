////////////CHECK AIR QUALITY 

/*const form = document.getElementById('city-form');
const resultDiv = document.getElementById('aqi');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;

    const location = await getCoordinates(city);
    if (location) {
        // Use the location object in your API request
        // Update the AQI value in the gauge
        resultDiv.textContent = "123"; // Replace with actual AQI value
    } else {
        resultDiv.textContent = "Unable to find coordinates for the given city.";
    }
});

async function getCoordinates(city) {
    /**
     * Converts a city name to latitude and longitude coordinates using the OpenStreetMap Nominatim API.
    
    const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.length > 0) {
        return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
    } else {
        return null;
    }
} 



}

*/