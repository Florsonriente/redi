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

    let words = p.innerHTML.split(" ");
    console.log(words[0].length);
    //if (words[0].length >=20)
    words.forEach((word) => {
      if (word.length >= 20) {
        alert(
          "Oh I see you are in a flow, but can u pls write more accurately?"
        );
      }
    });

     function speak() {
       var utterance = new SpeechSynthesisUtterance(p.innerHTML);
       speechSynthesis.speak(utterance);
     }
    speak();

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

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  const data = localStorage.getItem("data");
  if (data) {
    listContainer.innerHTML = data;
  }
}

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

