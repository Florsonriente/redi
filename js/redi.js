/////ON SCROLL

/**/$(document).on('scroll', function(){
   
    $('.block2, .hero').css({
        "left": Math.max(-(1.3*window.scrollY)) + "px",
        "transition": "left 1.2s ease"
    });

    $(".hero img").css({
      "opacity": "0%",
      "transition": "opacity 1.2s ease"
    });

   $(".hero p").css({
      "left": "10%",
      "transition": "left 1.2s ease",
      "opacity": "100%",
    });


    $(".subblockpics:nth-child(2").css({
      "opacity": "100%",
       "transition": " 1.2s ease",
      "transition-delay": "0.5s ease",
      "margin-left":"-30vw",
    });
    $(".subblockpics:nth-child(3").css({
      "opacity": "100%",
      "margin-left":"-20vw",
        "transition": " 1.2s ease",
      "transition-delay": "0.5s ease"
      
    });
 
});

/*MINIMALIST CALCULATION SCORE*/

let button = document.getElementById("button");

/*transportation score value calculation*/

let transportationModeSummary = function () {
    let selectedTransport = document.querySelector('input[name="answertransport"]:checked');
    let scoreTransport = 0;
if (selectedTransport){
  switch (selectedTransport.value) {
            case 'car': 
                scoreTransport = 0;
                break;
            case 'public transport':
                scoreTransport = 50;
                break;
            case 'bicycle':
                scoreTransport = 100;
                break;
            default:
                scoreTransport = 0;
                break;
        }
}

  return scoreTransport;
}

/*dietary choice  score value calculation*/

let dietaryChoiceSummary = function () {
    let selectedDiet = document.querySelector('input[name="answerdiet"]:checked');
    let scoreDiet = 0;
if (selectedDiet){
  switch (selectedDiet.value) {
            case 'snacks&cola': 
                scoreDiet = 0;
                break;
            case 'smartomnivore':
                scoreDiet = 50;
                break;
            case 'vegan':
                scoreDiet = 100;
                break;
            default:
                scoreDiet = 0;
                break;
        }
}

  return scoreDiet;
}

/*energy consumption score calculation*/
let energyConsumers = document.getElementById("energyConsumers");
let energyConsumptionValue = document.getElementById("energyConsumptionValue")

let energyConsumptionSummary = function(energyConsumers, energyConsumptionValue){
    let scoreEnergy = 0;
    if (energyConsumers <1) {
      alert ("Please enter the valid number of people living with u");
    }
    else if (energyConsumers === 1) {
        if (energyConsumptionValue <500) {scoreEnergy = 100;}
    else if (energyConsumptionValue >= 500 && energyConsumptionValue <= 1000) {scoreEnergy = 50;}
    else if (energyConsumptionValue >=1001) {scoreEnergy = 0;}
     }

     if (energyConsumers === 2) {
        if (energyConsumptionValue <1000) {scoreEnergy = 100;}
    else if (energyConsumptionValue >= 1000 && energyConsumptionValue <= 1500) {scoreEnergy = 50;}
    else if (energyConsumptionValue >=1501) {scoreEnergy = 0;}
     }
    

if (energyConsumers >= 3) {
    if (energyConsumptionValue <1500) {scoreEnergy = 100;}
else if (energyConsumptionValue >= 1500 && energyConsumptionValue <= 3000) {scoreEnergy = 50;}
else if (energyConsumptionValue >=3001) {scoreEnergy = 0;}
 }

  return scoreEnergy;
  };

button.addEventListener("click", () => {
  // ENERGY SCORE 
  let scoreEnergy = energyConsumptionSummary(parseInt(energyConsumers.value), parseInt(energyConsumptionValue.value));
  console.log('scoreEnergy !',scoreEnergy);

    //TRANSPORTATION SCORE
    let scoreTransport = transportationModeSummary();
    console.log('scoreTransport !',scoreTransport);
    
    //DIET SCORE
    let scoreDiet = dietaryChoiceSummary();
    console.log('scoreDiet !',scoreDiet);


     //FINAL AVERAGE SCORE FROM ALL INPUTS.
     let averageScore = Math.floor(Math.round((scoreEnergy + scoreTransport + scoreDiet)/3));
     document.getElementById("scoreValue").innerHTML=averageScore;


    console.log('averageScore !',averageScore);
         
});


// PLANET OPACITY VALUE BASED ON UNSER INPUT 

let slider = document.getElementById("inputplanet");
slider.min = 0;
slider.max = 100;

let updatePlanetOpacity = function() {
    let planetPicBlack = document.getElementById("planetpicblack");
    let planetPicGreen = document.getElementById("planetpicgreen");
    
    // Calculate opacity values based on the slider value
    let opacityValue = slider.value / 100;
    
    // Adjust opacity of image1 (planetPicBlack)
    planetPicBlack.style.opacity = 1 - opacityValue;
    
    // Adjust opacity of image2 (planetPicGreen)
    planetPicGreen.style.opacity = opacityValue;
};

updatePlanetOpacity();
slider.addEventListener("input", updatePlanetOpacity);




// SEE ACTIVITIES IMPACT FUNCTION

//////////////////CHECK-UNCHECK ACTIVITIES & DISPLAY/HIDE CARBON FACTS

console.log("privetik")


let activities = document.getElementsByClassName("activities");
let facts = document.getElementsByClassName("carbonfacts");


// Set all activities as checked by default
for (let i = 0; i < activities.length; i++) {
    activities[i].checked = true;
}

// Hide all carbon facts by default
for (let j = 0; j < facts.length; j++) {
    facts[j].style.display = "none";
    console.log("1")
}

let seeImpact = function() {
    let activities = document.getElementsByClassName("activities");
    let facts = document.getElementsByClassName("carbonfacts");
  
    // Loop through Activities checkboxes & display or hide crabon facts
    for (let i = 0; i < activities.length; i++) {
        if (!activities[i].checked) {
            facts[i].style.display = "block";   
            console.log("2")      
        } else {
            facts[i].style.display = "none";
        }
    }

};

seeImpact();

document.querySelectorAll('.activities').forEach(function(activities) {
    console.log("3")   
activities.addEventListener('input', seeImpact);
console.log("4")   
});

///// OPEN AND CLOSE EXPLANATION BOXES TO EACH CARBON FACT7
/**/

let buttonReadExplanations = document.querySelectorAll('.button_read_explanation');
let explanations = document.querySelectorAll('.explanations');
let closeButtons = document.querySelectorAll('.close_explanations');

function showExplanation(event) {
    let index = Array.from(buttonReadExplanations).indexOf(event.target);
    explanations[index].style.display = "flex";
    console.log("5")   
}

for (let i = 0; i < buttonReadExplanations.length; i++) {
    buttonReadExplanations[i].addEventListener('click', showExplanation);
    console.log("6")   
}

closeButtons.forEach(function(closeButton){
closeButton.addEventListener('click',function(){
    let index = Array.from(closeButtons).indexOf(closeButton);
    explanations[index].style.display="none";
});
console.log("7")   

});



//////////////////////////////////// RANDOM CARBON FACTS 


let carbonPhrases = ["Fire Extinguishers: With 10 kg of emitted carbon, you could potentially fill 2-5 fire extinguishers, depending on their size and CO2 content. 2-5 fire extinguishers could be not sufficient to extinguish a forest fire or a fire in a park, but probably to save a couple of trees. ", "Water Treatment: With 10 kg of emitted carbon, you could potentially treat approximately 20-50 cubic meters of water.The amount of water would be sufficient to supply the needs of approximately 9 to 35 medium-sized dogs for a month.", "Carbonated Water: With 10 kg of emitted carbon, you could potentially carbonate approximately 3,333 to 5,000 liters of beverage.  Carbonated water offers a sugar-free alternative to sodas and other sweetened drinks, allowing diabetics to enjoy a refreshing beverage without affecting their blood sugar levels. People with diabetes need to monitor their blood sugar levels carefully and may need to limit their intake of sugary beverages. If we assume an average daily consumption of 1 liter, then 3,333 to 5,000 liters would last between approximately 3 to 5 years for one person.",  "Algae Cultivation: With 10 kg of emitted carbon, you could potentially cultivate 5-10 kg of algae biomass. With 5-10 kg of algae biomass, it's plausible to produce several hundred to over a thousand bottles of dietary supplements, to support overall health and well-being, immune function, lower cholesterol levels, reduce inflammation, and support cardiovascular function, reducing the risk of heart disease.", "Greenhouse Cultivation: With 10 kg of emitted carbon, you could potentially enrich a greenhouse covering approximately 11.8 to 14.7 square meters. With such size of a greenhouse you can approximately cultivate approximately 15-20 tomato plants in a greenhouse of this size. Total yield of tomatoes from all plants in the greenhouse could range from approximately 75 kg to 200 kg, depending on the yield per plant and the number of plants grown.", "Enrich a greenhouse that can yield from 10kg to 25kg lettuce. Assuming you can grow approximately 50 lettuce plants in the greenhouse.So, considering the available space in the greenhouse, the total yield of lettuce from all plants could range from approximately 10 kg to 25 kg, depending on the yield per plant.", 
  "Cooling agent in scientific experiemnts. Dry ice, which is solid carbon dioxide (CO2), can be used as a cooling agent in various scientific experiments and applications. Perfect example of that is COVID-19 Vaccine. During the COVID-19 pandemic, dry ice played a crucial role in the distribution of mRNA vaccines, such as those developed by Pfizer-BioNTech and Moderna. These vaccines require ultra-low temperatures for storage and transportation, and dry ice was used to maintain the necessary cold chain.  This application of dry ice was vital in facilitating the rapid distribution of vaccines worldwide and controlling the spread of the virus."
]

let buttonCarbon = document.getElementById('button_carbon_facts');
let carbonPhrase = document.querySelector('.carbontext h2');

function carbonFactsSelector(){
  let randomCarbonfact = Math.floor(Math.random() * carbonPhrases.length);
  return carbonPhrases[randomCarbonfact];
}

function showCarbonFact(){
  carbonPhrase.innerHTML = carbonFactsSelector();
  buttonCarbon.innerHTML = "Another fact";
  //button.style.cursor = "default";
}

buttonCarbon.addEventListener('click', showCarbonFact);

/////////////////SUM UP SAVED CO2

/*

let activity1 = document.getElementById("activity1");
let activity2 = document.getElementById("activity2");
let activity3 = document.getElementById("activity3");*/

let buttonGetSavedCarbon = document.querySelector(".get_saved_carbon");
let showSavedCarbon = document.querySelector(".show_saved_carbon");
//let activities = document.querySelectorAll('.activities');


let getSavedCarbon = function (){
    const activityValue = [0.945,0.27,5.4,4.6,1.5,0.05];
    let sumSavedCarbon = Array.from(activities).reduce((summ, element, index) => {
        if(!element.checked) {
            summ = summ + activityValue[index]
        }
        //return Math.floor(Math.round(summ));
       return Number(summ.toFixed(2));
    }, 0)

    console.log('Result: ')
    showSavedCarbon.innerHTML = sumSavedCarbon + "kg";
    sumSavedCarbon.style.fontsize ="13em";
    sumSavedCarbon.style.margintop="0.5em";
    return sumSavedCarbon;
}


buttonGetSavedCarbon.addEventListener('click', getSavedCarbon);



//console.log(carbonFactLight1)



////// TO DO LIST

const inputBox = document.getElementById("input_box");
const listContainer = document.getElementById("list_container");
function addTask(){
    if (inputBox.value === ''){
        alert ("Lets think out some task for u");
    }
    else {
        let p = document.createElement("p");
        p.innerHTML= inputBox.value;
        listContainer.appendChild(p);

        let closeToDoListTask = document.createElement("closeToDoListTask");
        closeToDoListTask.innerHTML = "\u00d7";
        p.appendChild(closeToDoListTask)

        p.classList.add("checked");
        const deco = toDoListBackgroundsSelector();
        p.style=deco.style;
        p.size = deco.size;
        p.color = deco.color;
        p.setAttribute("draggable", true);
        p.addEventListener("dragover", dragOver);
p.addEventListener("drop", drop);
          }
    inputBox.value='';
    saveData();
    

}


//////////////////////////DRAG AND DROP TO SO LIST


/*listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "CLOSETODOLISTTASK"){
        e.target.parentElement.remove();
        saveData();
        }
   
}, false )*/


listContainer.addEventListener("click", function(e){

    if(e.target.tagName === "CLOSETODOLISTTASK"){
        e.target.parentElement.remove();
        saveData();
    }
    
}, false )


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}


/////TO DO LIST DIFFERENT BACKGROUNDS

/*let toDoListBackgrounds = [
    'url("./nature/ammonra_a_professional_white_zen_minimalist_aesthetic_desktop_w_f26dfeb7-278d-43a8-a87a-7dbba0c08202.png")',
    'url("./nature/dark_voyager_Create_a_highly_aesthetic_and_Instagram-worthy_ima_babcfd24-e26c-4b01-960c-19c414ffaac7.png")',
    'url("./nature/neuromur_Abstract_white_studio_background_for_product_presentat_4010bc83-3753-4f97-94fb-de8fbb231fb4.png")'
];
*/
const toDoListBackgrounds = [

    {
      style: "background: radial-gradient(circle, transparent 20%, #556645 20%, #556645 80%, transparent 80%, transparent) 0% 0% / 52px 52px, radial-gradient(circle, transparent 20%, #556645 20%, #556645 80%, transparent 80%, transparent) 26px 26px / 52px 52px, linear-gradient(#849c0b 2px, transparent 2px) 0px -1px / 26px 26px, linear-gradient(90deg, #849c0b 2px, #556645 2px) -1px 0px / 26px 26px #556645",
      size: "background-size: 52px 52px, 52px 52px, 26px 26px, 26px 26px",
      color: "background-color: #556645"
    },
    {
        style: "background: radial-gradient(circle, transparent 20%, #a8a398 20%, #a8a398 80%, transparent 80%, transparent) 0% 0% / 52px 52px, radial-gradient(circle, transparent 20%, #a8a398 20%, #a8a398 80%, transparent 80%, transparent) 26px 26px / 52px 52px, linear-gradient(#849c0b 2px, transparent 2px) 0px -1px / 26px 26px, linear-gradient(90deg, #39513e 2px, #a8a398 2px) -1px 0px / 26px 26px #a8a398",
        size: "background-size: 52px 52px, 52px 52px, 26px 26px, 26px 26px",
        color: "background-color: #a8a398"
      }/**/
  ];






function toDoListBackgroundsSelector(){
    const index = Math.floor(Math.random() * toDoListBackgrounds.length);
    return toDoListBackgrounds[index];
  }
  const toDoListPage = document.querySelector(".to_do_list_page");
  console.log(toDoListPage);
  function dragOver(e) {
    e.preventDefault();
}
function drop(e) {
    e.preventDefault();
}




////////////////////////////////// AIR QUALITY

const form = document.getElementById('city-form');
const resultDiv = document.getElementById('result_coordinates');

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

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const cityInput = document.getElementById('city-input');
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
    const api_key = '1b5d859b6824861a56ffd2a5d3a1a827705605b7e6d91dd98333914220dcf651';

    // Set headers with your API key
    const headers = {
        'x-api-key': api_key,
        'Content-type': 'application/json'
    };

    const options = {
        method: 'GET',
        headers: headers
    };

    fetch(url, options)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            const airQuality = data?.stations?.[0]?.AQI;
            if (airQuality !== undefined) {
                updateGauge(airQuality);
            } else {
                throw new Error('Invalid data received from the API');
            }
        })
        .catch(error => console.error('Error fetching air quality data:', error));
}

// Function to update the air quality gauge
function updateGauge(aqi) {
    const needle = document.querySelector('.needle');
    const aqiSpan = document.getElementById('aqi');

    // Rotate the needle based on the AQI value
    const rotation = (aqi / 500) * 180; // Assuming AQI ranges from 0 to 500
    needle.style.transform = `rotate(${rotation}deg)`;

    aqiSpan.textContent = `${aqi}`;

    // Log aqiSpan for testing purposes
    console.log(aqiSpan);


////// AIR QUALITY CLOUDS STYLING

let clouds = document.getElementById("image_wrapper")

clouds.style.filter = "invert(0)";
clouds.style.filter = "brightness(1)";
clouds.style.filter = "blur(9px)";

if (aqi <= 40) {clouds.style.filter = "invert(0) brightness(1) blur(9px)"; }
else if (aqi <= 80) {clouds.style.filter = "invert(0) brightness(0.5) blur(9px)";}
else if (aqi <= 150) {clouds.style.filter = "invert(0) brightness(0.3) blur(9px)";}
else {clouds.style.filter = "invert(1) brightness(0)";}


}


