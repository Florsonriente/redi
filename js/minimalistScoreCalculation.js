//MINIMALIST CALCULATION SCORE-----------------------------------------------------------------------------------

/*transportation score value calculation*/
console.log('minimal Score!!!');

const getTransportationModeSummary = function () {
  const selectedTransport = document.querySelector(
    'input[name="answertransport"]:checked'
  );
  let scoreTransport = 0;
  try {
    if (!selectedTransport) {
      throw new Error(
        "Please make your transport choice for proper calculation!"
      );
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

    return scoreTransport;
  } catch (error) {
    alert("An error occurred during the transport calculation:" + error);
  }
};

/*dietary choice  score value calculation*/

const getDietaryChoiceSummary = function () {
  const selectedDiet = document.querySelector(
    'input[name="answerdiet"]:checked'
  );
  let scoreDiet = 0;

  try {
    if (!selectedDiet) {
      throw new Error("Please make your diet choice for proper calculation!");
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
  } catch (error) {
    alert("An error occurred during the diet calculation:" + error);
  }
};

/*energy consumption score calculation*/
const energyConsumers = document.getElementById("energyConsumers");
const energyConsumptionValue = document.getElementById(
  "energyConsumptionValue"
);

const getEnergyConsumptionSummary = function (
  energyConsumers,
  energyConsumptionValue
) {
  let scoreEnergy = 0;
  try {
    if (energyConsumers < 1 || !energyConsumers) {
      throw new Error(
        "Please enter the valid number of people living at your place, you included!!!"
      );
    } else if (energyConsumers === 1) {
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

    if (energyConsumers >= 6) {
      // {throw new Error("Emmm there r so many of you! R u guys living in a hotel? The calculation fails");}
      alert(
        "Emmm there r so many of you! R u guys living in a hotel? But let's calculate it anyway!!!"
      );
    }
    return scoreEnergy;
  } catch (error) {
    alert(
      "An error occurred during the energy consumption calculation:" + error
    );
  }
};

const buttonMinimalistScore = document.getElementById(
  "button_minimalist_score"
);

buttonMinimalistScore.addEventListener("click", () => {
  // ENERGY SCORE
  const scoreEnergy = getEnergyConsumptionSummary(
    parseInt(energyConsumers.value),
    parseInt(energyConsumptionValue.value)
  );
  console.log("scoreEnergy is", scoreEnergy);

  //TRANSPORTATION SCORE
  const scoreTransport = getTransportationModeSummary();
  console.log("scoreTransport is", scoreTransport);

  //DIET SCORE
  const scoreDiet = getDietaryChoiceSummary();
  console.log("scoreDiet is", scoreDiet);

  //FINAL AVERAGE SCORE FROM ALL INPUTS.
  const averageScore = Math.floor(
    Math.round((scoreEnergy + scoreTransport + scoreDiet) / 3)
  );
  console.log("averageScore is", averageScore);

  printScoreAfterCountdown(4, 1, averageScore);
});

function printScoreAfterCountdown(from, to, score) {
  let start = from;
  let end = to;
  let intervalId = null;

  if (!intervalId) {
    intervalId = setInterval(() => {
      if (start === end && intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        document.getElementById("scoreValue").innerHTML = score;
      } else {
        --start;
        document.getElementById("scoreValue").innerHTML = start;
      }
    }, 300);
  }
}
