// SEE ACTIVITIES IMPACT FUNCTION

//////////////////CHECK-UNCHECK ACTIVITIES & DISPLAY/HIDE CARBON FACTS

const activities = document.getElementsByClassName("activities");
const facts = document.getElementsByClassName("carbonfacts");
const explanations = document.querySelectorAll(".explanations");
const closeButtons = document.querySelectorAll(".close_explanations");
const buttonReadExplanations = document.querySelectorAll(
    ".button_read_explanation"
  );
const buttonGetSavedCarbon = document.querySelector(".get_saved_carbon");
const showSavedCarbon = document.querySelector(".show_saved_carbon");
  
// Set all activities as checked by default
for (let i = 0; i < activities.length; i++) {
  activities[i].checked = true;
}

// Hide all carbon facts by default
for (let j = 0; j < facts.length; j++) {
  facts[j].style.display = "none";
}

const showImpact = function () {

  // Loop through Activities checkboxes & display or hide carbon facts
  for (let i = 0; i < activities.length; i++) {
    if (!activities[i].checked) {
      facts[i].style.display = "block";
    } else {
      facts[i].style.display = "none";
    }
  }
};

showImpact();

document.querySelectorAll(".activities").forEach(activity => {
  activity.addEventListener("input", showImpact);
});


///// OPEN AND CLOSE EXPLANATION BOXES TO EACH CARBON FACT

function showExplanation(event) {
  const index = Array.from(buttonReadExplanations).indexOf(event.target);
  explanations[index].style.display = "flex";
}

/*for (let i = 0; i < buttonReadExplanations.length; i++) {
  buttonReadExplanations[i].addEventListener("click", showExplanation);
}*/
buttonReadExplanations.forEach(button => {
    button.addEventListener("click", showExplanation);
  });


  /*closeButtons.forEach((closeButton, i) => {
    closeButton.addEventListener("click", closeExplanation);
    function closeExplanation() {
        explanations[i].style.display = "none";
      }
  })*/



for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", closeExplanation);
  function closeExplanation() {
    explanations[i].style.display = "none";
  }
}


/////////////////SUM UP SAVED CO2


const getSavedCarbon = function () {
  const activityValue = [0.945, 0.27, 5.4, 4.6, 0.547, 0.05];
  const sumSavedCarbon = Array.from(activities).reduce((sum, element, index) => {
    if (!element.checked) {
      sum = sum + activityValue[index];
    }
    //return Math.floor(Math.round(summ));
    return Number(sum.toFixed(2));
  }, 0);

  console.log("Result:");
  showSavedCarbon.innerHTML = sumSavedCarbon + "kg";
  //sumSavedCarbon.style.fontsize = "13em";
  //sumSavedCarbon.style.margintop = "0.5em";
  return sumSavedCarbon;
};

buttonGetSavedCarbon.addEventListener("click", getSavedCarbon);

/*document.querySelectorAll(".activities").forEach(activities=> {
    activities.addEventListener("input", getSavedCarbon);
  });*/