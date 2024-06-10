/////ON SCROLL--------------------------------------------------------------------------------------------------

$(document).on("scroll", function () {
  //setTimeout(function(){
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
   // "margin-left": "-30vw",
  });

  $(".subblockpics:nth-child(3").css({
    opacity: "100%",
   // "margin-left": "-20vw",
    transition: " 1.2s ease",
    "transition-delay": "0.5s ease",
  });
  //}, 500);
});

//COOL CURSOR--------------------------------------------------------------------------------------------------
var smallCircleCursor = document.getElementById("small_circle_cursor");
document.body.addEventListener("mousemove", function (e) {
  smallCircleCursor.style.left = e.clientX + "px";
  smallCircleCursor.style.top = e.clientY + "px";
  //cursor.style.border = '1px solid black'; // Change border to red
  //cursor.style.background = 'black'; //
});

var middleCircleCursor = document.getElementById("middle_circle_cursor");
document.body.addEventListener("mousemove", function (e) {
  middleCircleCursor.style.left = e.clientX + "px";
  middleCircleCursor.style.top = e.clientY + "px";
  //cursor.style.border = '1px solid black'; // Change border to red
  //cursor.style.background = 'black'; //
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

//RANDOM CARBON FACTS-------------------------------------------------------------------------------------------------

let carbonPhrases = [
  "you could potentially fill 2-5 fire extinguishers to<span> save a couple of trees.</span> ",
  "you could potentially treat approximately <span>up to 50 cubic meters of water </span> sufficient for up to <span>35 medium-sized dogs for a month.</span>",
  "you could potentially carbonate approximately <span> to 5,0 liters of carbonated beverage</span>. It would be approximately enough for 1 week for drinking water for a person with <span> diabetes</span> who needs to <span> monitor his blood sugar levels </span>carefully.",
  "you could potentially cultivate <span>5-10 kg of algae biomass to produce thousand bottles</span> of dietary supplements, <span> to lower cholesterol levels, reduce inflammation, and support cardiovascular function, reducing the risk of heart disease.</span>",
  "you could potentially enrich a greenhouse covering approximately to 14.7 square meters & cultivate approximately 15-20 tomato plants meaning producing  <span>up to 200 kg of tomatoes.</span> ",
  "you could produce <span>dry ice for scientific experiments & rapid distribution of vaccines worldwide</span>. During the COVID-19 pandemic, dry ice played a crucial role in the distribution of mRNA vaccines and controlling the spread of the virus.",
  "you could potentially supply CO2 for <span>multiple hours of surgical procedures</span>",
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

//QUESTIONS TO SPEAK
// function speakCo2() {
//   var carbonFactsPageQuestions = document.getElementById(
//     "carbonfactspage_questions"
//   );
//   var utterance = new SpeechSynthesisUtterance(
//     carbonFactsPageQuestions.innerHTML
//   );
//   speechSynthesis.speak(utterance);
// }
// speakCo2();
