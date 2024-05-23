/////ON SCROLL

$(document).on("scroll", function () {
  $(".block2, .hero").css({
    left: -1.3 * window.scrollY + "px",
    transition: "left 1.2s ease",
  });

  $(".hero img").css({
    opacity: "0%",
    transition: "opacity 1.2s ease",
  });

  $(".hero p").css({
    left: "10%",
    transition: "left 1.2s ease",
  });

  $(".subblockpics:nth-child(2").css({
    opacity: "100%",
    transition: " 1.2s ease",
    "transition-delay": "0.5s ease",
    "margin-left": "-30vw",
  });

  $(".subblockpics:nth-child(3").css({
    opacity: "100%",
    "margin-left": "-20vw",
    transition: " 1.2s ease",
    "transition-delay": "0.5s ease",
  });
});

/*MINIMALIST CALCULATION SCORE*/

/*transportation score value calculation*/

let transportationModeSummary = function () {
  let selectedTransport = document.querySelector(
    'input[name="answertransport"]:checked'
  );
  let scoreTransport = 0;
  try{
    if (!selectedTransport) {
        throw new Error("Please make your transport choice for proper calculation!");
    }
  if (selectedTransport) {
    switch (selectedTransport.value) {
      case "car":
        scoreTransport = 0;
        break;
      case "public transport":
        scoreTransport = 50;
        break;
      case "bicycle":
        scoreTransport = 100;
        break;
      default:
        scoreTransport = 0;
        break;
    }
  }

  return scoreTransport;}
  catch (error) {
    alert("An error occurred during the transport calculation:" + error);
    // return 0;
  } 

};

/*dietary choice  score value calculation*/

let dietaryChoiceSummary = function () {
  let selectedDiet = document.querySelector('input[name="answerdiet"]:checked');
  let scoreDiet = 0;

  try {
  if (!selectedDiet) {
    throw new Error("Please make your diet choice for proper calculation!") ;
  }     
    {    
    switch (selectedDiet.value) {
      case "snacks&cola":
        scoreDiet = 0;
        break;
      case "smartomnivore":
        scoreDiet = 50;
        break;
      case "vegan":
        scoreDiet = 100;
        break;
      default:
        scoreDiet = 0;
        break;
    }
  }

  return scoreDiet;
}catch (error) {
    alert("An error occurred during the diet calculation:" + error);
      //return 0;
  } 
};

/*energy consumption score calculation*/
let energyConsumers = document.getElementById("energyConsumers");
let energyConsumptionValue = document.getElementById("energyConsumptionValue");

let energyConsumptionSummary = function (
  energyConsumers,
  energyConsumptionValue
) {
  let scoreEnergy = 0;
  try {
  if (energyConsumers < 1 || !energyConsumers) {
    throw new Error("Please enter the valid number of people living at your place, you included!!!") ;
  }  else if (energyConsumers === 1) {
    if (energyConsumptionValue < 500) {
      scoreEnergy = 100;
    } else if (
      energyConsumptionValue >= 500 &&
      energyConsumptionValue <= 1000
    ) {
      scoreEnergy = 50;
    } else if (energyConsumptionValue >= 1001) {
      scoreEnergy = 0;
    }
  }

  if (energyConsumers === 2) {
    if (energyConsumptionValue < 1000) {
      scoreEnergy = 100;
    } else if (
      energyConsumptionValue >= 1000 &&
      energyConsumptionValue <= 1500
    ) {
      scoreEnergy = 50;
    } else if (energyConsumptionValue >= 1501) {
      scoreEnergy = 0;
    }
  }

  if (energyConsumers >= 3) {
    if (energyConsumptionValue < 1500) {
      scoreEnergy = 100;
    } else if (
      energyConsumptionValue >= 1500 &&
      energyConsumptionValue <= 3000
    ) {
      scoreEnergy = 50;
    } else if (energyConsumptionValue >= 3001) {
      scoreEnergy = 0;
    }
  }

  if (energyConsumers >= 6)
    // {throw new Error("Emmm there r so many of you! R u guys living in a hotel? The calculation fails");} 
  {     alert("Emmm there r so many of you! R u guys living in a hotel? But let's calculate it anyway!!!")
     }
  return scoreEnergy;
} catch (error) {
    alert("An error occurred during the energy consumption calculation:" + error);
    //return 0;
  } 
};

let buttonMinimalistScore = document.getElementById("button_minimalist_score");

buttonMinimalistScore.addEventListener("click", () => {
  // ENERGY SCORE
  let scoreEnergy = energyConsumptionSummary(
    parseInt(energyConsumers.value),
    parseInt(energyConsumptionValue.value)
  );
  console.log('scoreEnergy is', scoreEnergy);

  //TRANSPORTATION SCORE
  let scoreTransport = transportationModeSummary();
  console.log('scoreTransport is', scoreTransport)

  //DIET SCORE
  let scoreDiet = dietaryChoiceSummary();
  console.log('scoreDiet is', scoreDiet)

  //FINAL AVERAGE SCORE FROM ALL INPUTS.
  let averageScore = Math.floor(
    Math.round((scoreEnergy + scoreTransport + scoreDiet) / 3)
  );
  console.log('averageScore is', averageScore)

  document.getElementById("scoreValue").innerHTML = averageScore;
});

// PLANET OPACITY VALUE BASED ON UNSER INPUT

let inputSlider = document.getElementById("inputplanet");

let updatePlanetOpacity = function () {
  let planetPicBlack = document.getElementById("planetpicblack");
  let planetPicGreen = document.getElementById("planetpicgreen");

  // Calculate opacity values based on the slider value
  let opacityValue = inputSlider.value / 100;

  // Adjust opacity of image1 (planetPicBlack)
  planetPicBlack.style.opacity = 1 - opacityValue;

  // Adjust opacity of image2 (planetPicGreen)
  planetPicGreen.style.opacity = opacityValue;
};

updatePlanetOpacity();
inputSlider.addEventListener("input", updatePlanetOpacity);

// SEE ACTIVITIES IMPACT FUNCTION

//////////////////CHECK-UNCHECK ACTIVITIES & DISPLAY/HIDE CARBON FACTS

let activities = document.getElementsByClassName("activities");
let facts = document.getElementsByClassName("carbonfacts");

// Set all activities as checked by default
for (let i = 0; i < activities.length; i++) {
  activities[i].checked = true;
}

// Hide all carbon facts by default
for (let j = 0; j < facts.length; j++) {
  facts[j].style.display = "none";
}

let seeImpact = function () {
//   let activities = document.getElementsByClassName("activities");
//   let facts = document.getElementsByClassName("carbonfacts");

  // Loop through Activities checkboxes & display or hide carbon facts
  for (let i = 0; i < activities.length; i++) {
    if (!activities[i].checked) {
      facts[i].style.display = "block";
        } else {
      facts[i].style.display = "none";
    }
  }
};

seeImpact();

document.querySelectorAll(".activities").forEach(function (activities) {
   
  activities.addEventListener("input", seeImpact);
});

console.log('Activities ', activities);
if (Array.isArray(activities)) {
    console.log('activities is an array');
  } else {
    console.log('activities  is not an array');
  }

///// OPEN AND CLOSE EXPLANATION BOXES TO EACH CARBON FACT7

let buttonReadExplanations = document.querySelectorAll(
  ".button_read_explanation"
);

/*if (Array.isArray(buttonReadExplanations)) {
    console.log('buttonReadExplanations is an array');
  } else {
    console.log('buttonReadExplanations is not an array');
  }*/
  
let explanations = document.querySelectorAll(".explanations");
let closeButtons = document.querySelectorAll(".close_explanations");

function showExplanation(event) {
  let index = Array.from(buttonReadExplanations).indexOf(event.target);
  explanations[index].style.display = "flex";
}

/**/for (let i = 0; i < buttonReadExplanations.length; i++) {
  buttonReadExplanations[i].addEventListener("click", showExplanation);
  
}

for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", closeExplanation);
  function closeExplanation(){
    explanations[i].style.display="none";
  }
}

 /* buttonReadExplanations.forEach(function(button) {
    console.log('Button ', button);
    button.addEventListener("click", showExplanation);
  });
closeButtons.forEach(function (closeButton, index) {
  closeButton.addEventListener("click", function () {
    explanations[index].style.display = "none";
  });
});*/





//////////////////////////////////// RANDOM CARBON FACTS

let carbonPhrases = [
  "Fire Extinguishers: With 10 kg of emitted carbon, you could potentially fill 2-5 fire extinguishers, depending on their size and CO2 content. 2-5 fire extinguishers could be not sufficient to extinguish a forest fire or a fire in a park, but probably to save a couple of trees. ",
  "Water Treatment: With 10 kg of emitted carbon, you could potentially treat approximately 20-50 cubic meters of water.The amount of water would be sufficient to supply the needs of approximately 9 to 35 medium-sized dogs for a month.",
  "Carbonated Water: With 10 kg of emitted carbon, you could potentially carbonate approximately 3,3 to 5,0 liters of beverage. It would be approximately enough for 4 years for drinking water for a person with diabetes who needs to monitor his blood sugar levels carefully.",
  "Algae Cultivation: With 10 kg of emitted carbon, you could potentially cultivate 5-10 kg of algae biomass with which it's plausible to produce several hundred to over a thousand bottles of dietary supplements, to support overall health and well-being, immune function, lower cholesterol levels, reduce inflammation, and support cardiovascular function, reducing the risk of heart disease.",
  "Greenhouse Cultivation: With 10 kg of emitted carbon, you could potentially enrich a greenhouse covering approximately 11.8 to 14.7 square meters. With such size of a greenhouse you can approximately cultivate approximately 15-20 tomato plants meaning producing up to 200 kg of tomatoes. ",
  "Enrich a greenhouse that can yield from 10kg to 25kg lettuce. Assuming you can grow approximately 50 lettuce plants in the greenhouse meaning producing up to 25 kg of lettuce.",
  "Cooling agent in scientific experiemnts. Dry ice, which is solid carbon dioxide (CO2), can be used as a cooling agent in various scientific experiments and applications. Perfect example of that is COVID-19 Vaccine. During the COVID-19 pandemic, dry ice played a crucial role in the distribution of mRNA vaccines, such as those developed by Pfizer-BioNTech and Moderna. These vaccines require ultra-low temperatures for storage and transportation, and dry ice was used to maintain the necessary cold chain.  This application of dry ice was vital in facilitating the rapid distribution of vaccines worldwide and controlling the spread of the virus.",
  "Medical Applications: The amount of CO2 used in medical procedures varies based on factors such as procedure duration and patient characteristics.As an example, in laparoscopic surgery, approximately 5-10 liters of CO2 may be used per hour of surgery. With 10 kg of emitted carbon, you could potentially supply CO2 for multiple hours of surgical procedures",
];

let buttonCarbon = document.getElementById("button_carbon_facts");
let carbonPhrase = document.querySelector(".carbontext h2");

function carbonFactsSelector() {
  let randomCarbonfact = Math.floor(Math.random() * carbonPhrases.length);
  return carbonPhrases[randomCarbonfact];
}

function showCarbonFact() {
  carbonPhrase.innerHTML = carbonFactsSelector();
  buttonCarbon.innerHTML = "Another fact";
  //button.style.cursor = "default";
}

buttonCarbon.addEventListener("click", showCarbonFact);

/////////////////SUM UP SAVED CO2

let buttonGetSavedCarbon = document.querySelector(".get_saved_carbon");
let showSavedCarbon = document.querySelector(".show_saved_carbon");
//let activities = document.querySelectorAll('.activities');

let getSavedCarbon = function () {
  const activityValue = [0.945, 0.27, 5.4, 4.6, 1.5, 0.05];
  let sumSavedCarbon = Array.from(activities).reduce((sum, element, index) => {
    if (!element.checked) {
      sum = sum + activityValue[index];
    }
    //return Math.floor(Math.round(summ));
    return Number(sum.toFixed(2));
  }, 0);

  console.log("Result: ");
  showSavedCarbon.innerHTML = sumSavedCarbon + "kg";
  sumSavedCarbon.style.fontsize = "13em";
  //sumSavedCarbon.style.margintop = "0.5em";
  return sumSavedCarbon;
};

buttonGetSavedCarbon.addEventListener("click", getSavedCarbon);

/*document.querySelectorAll(".activities").forEach(function (activities) {
    activities.addEventListener("input", getSavedCarbon);
  });*/


////////////////////////////////// AIR QUALITY

const form = document.getElementById("city-form");
const resultDiv = document.getElementById("result_coordinates");

async function getCoordinates(city) {
  /*
   * Converts a city name to latitude and longitude coordinates using the OpenStreetMap Nominatim API.
   * Logs the retrieved data regardless of the length.
   */
  const url = `https://nominatim.openstreetmap.org/search?q=${city}&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data); // Log the data regardless of the length
  if (data.length > 0) {
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  } else {
    return null;
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const cityInput = document.getElementById("city-input");
  const city = cityInput.value;

  const location = await getCoordinates(city);
  if (location) {
    const lat = location.lat;
    const lon = location.lon;

    // Construct the URL with the actual latitude and longitude
    const url = `https://cors-anywhere.herokuapp.com/https://api.ambeedata.com/latest/by-lat-lng?lat=${lat}&lng=${lon}`;

    // Call the API with the updated URL
    fetchAndUpdateAirQuality(url);
  } else {
    resultDiv.textContent = "Unable to find coordinates for the given city.";
  }
});

function fetchAndUpdateAirQuality(url) {
  // Define your API key
  const api_key =
    "1b5d859b6824861a56ffd2a5d3a1a827705605b7e6d91dd98333914220dcf651";

  // Set headers with your API key
  const headers = {
    "x-api-key": api_key,
    "Content-type": "application/json",
  };

  const options = {
    method: "GET",
    headers: headers,
  };

  fetch(url, options)
    .then((response) => {
      if (response.ok) return response.json();
      throw new Error("Network response was not ok.");
    })
    .then((data) => {
      const airQuality = data?.stations?.[0]?.AQI;
      if (airQuality !== undefined) {
        updateGauge(airQuality);
      } else {
        throw new Error("Invalid data received from the API");
      }
    })
    .catch((error) => console.error("Error fetching air quality data:", error));
}

// Function to update the air quality gauge
function updateGauge(aqi) {
  const needle = document.querySelector(".needle");
  const aqiSpan = document.getElementById("aqi");

  // Rotate the needle based on the AQI value
  const rotation = (aqi / 500) * 180; // Assuming AQI ranges from 0 to 500
  needle.style.transform = `rotate(${rotation}deg)`;

  aqiSpan.textContent = `${aqi}`;

  // Log aqiSpan for testing purposes
  console.log(aqiSpan);

  ////// AIR QUALITY CLOUDS STYLING

  let clouds = document.getElementById("image_wrapper");

  clouds.style.filter = "invert(0)";
  clouds.style.filter = "brightness(1)";
  clouds.style.filter = "blur(9px)";

  if (aqi <= 40) {
    clouds.style.filter = "invert(0) brightness(1) blur(9px)";
  } else if (aqi <= 80) {
    clouds.style.filter = "invert(0) brightness(0.5) blur(9px)";
  } else if (aqi <= 150) {
    clouds.style.filter = "invert(0) brightness(0.3) blur(9px)";
  } else {
    clouds.style.filter = "invert(1) brightness(0)";
  }
}

////// TO DO LIST

const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
function addTask() {
  if (inputBox.value === "") {
    alert("Lets think out some task for u");
  } else {
    let p = document.createElement("p");
    p.innerHTML = inputBox.value;
    listContainer.appendChild(p);

    console.log(p.innerHTML.length);
    let words = p.innerHTML.split(' ');
    console.log(words[0].length);
    //if (words[0].length >=20) 
 words.forEach(word => {
    if (word.length >=20)  {
        alert("Oh I see you are in a flow, but can u pls write more accurately?");
    }
 });

    let closeToDoListTask = document.createElement("span");
    closeToDoListTask.innerHTML = "\u00d7";
    closeToDoListTask.id = "closeToDoListTask";
    p.appendChild(closeToDoListTask);

    p.classList.add("written_task");
    const deco = toDoListBackgroundsSelector();
    p.style.backgroundImage = deco.image;
    p.style.backgroundSize = deco.size;
    p.style.backgroundColor = deco.color;

    inputBox.value = "";
    saveData();
  }
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//     const data = localStorage.getItem("data");
//   if (data){
//     listContainer.innerHTML=data;
//   }
//}

document.addEventListener("DOMContentLoaded", showTask);
/////TO DO LIST DIFFERENT BACKGROUNDS

/*let toDoListBackgrounds = [
    'url("./nature/ammonra_a_professional_white_zen_minimalist_aesthetic_desktop_w_f26dfeb7-278d-43a8-a87a-7dbba0c08202.png")',
    'url("./nature/dark_voyager_Create_a_highly_aesthetic_and_Instagram-worthy_ima_babcfd24-e26c-4b01-960c-19c414ffaac7.png")',
    'url("./nature/neuromur_Abstract_white_studio_background_for_product_presentat_4010bc83-3753-4f97-94fb-de8fbb231fb4.png")'
];
*/
const toDoListBackgrounds = [
  {
    image: "radial-gradient(#39513E 2px, transparent 2px)",
    size: "32px 32px",
    color: "#E4E4ED",
  },
  {
    image: "radial-gradient(#E4E4ED 2px, transparent 2px)",
    size: "32px 32px",
    color: "#958369",
  },
  {
    image: "radial-gradient(#E4E4ED 2px, transparent 2px)",
    size: "32px 32px",
    color: "#E4E4ED",
  },
];

function toDoListBackgroundsSelector() {
  const index = Math.floor(Math.random() * toDoListBackgrounds.length);
  return toDoListBackgrounds[index];
}


////COOL CURSOR
var cursor = document.getElementById("cursor");
document.body.addEventListener("mousemove", function(e) {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    //cursor.style.border = '1px solid black'; // Change border to red
    //cursor.style.background = 'black'; // 
});