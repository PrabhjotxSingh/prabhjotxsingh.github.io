let averageSleep = [7, 8, 9, 5, 4, 7, 8, 8];
let energetic = 2;
let anxious = 1;
let motivated = 3;
let relaxed = 1;
let tired = 1;

var now = new Date();
var datetime = now.toLocaleString();

document.getElementById("datetime").innerHTML = datetime;

document.querySelectorAll('input[name="mood"]').forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const circle = document
      .getElementById("moodCircle")
      .querySelector("circle");

    let fillColor = "gray";

    if (checkbox.checked) {
      switch (checkbox.value) {
        case "energetic":
          fillColor = "green";
          break;
        case "anxious":
          fillColor = "red";
          break;
        case "motivated":
          fillColor = "green";
          break;
        case "relaxed":
          fillColor = "green";
          break;
        case "tired":
          fillColor = "red";
          break;
      }
    }

    circle.setAttribute("fill", fillColor);
  });
});

function sleepAvg(nums) {
  const total = nums.reduce((sum, num) => sum + num, 0);
  return total / nums.length;
}

function calculateData() {
  const average = sleepAvg(averageSleep);
  document.getElementById(
    "avgsleep"
  ).textContent = `The sleep average is: ${average}`;
  document.getElementById(
    "avgmood"
  ).textContent = `Energetic: ${energetic}, Anxious: ${anxious}, Motivated: ${motivated}, Relaxed: ${relaxed}, Tired: ${tired}`;
}

function updateData() {
  const form = document.getElementById("entryForm");
  const sleepInput = document.getElementById("sleep").value;
  const moodInputs = form.querySelectorAll('input[name="mood"]');
  let moodSelected = false;

  averageSleep.push(parseFloat(sleepInput));

  moodInputs.forEach((input) => {
    if (input.checked) {
      switch (input.value) {
        case "energetic":
          energetic++;
          break;
        case "anxious":
          anxious++;
          break;
        case "motivated":
          motivated++;
          break;
        case "relaxed":
          relaxed++;
          break;
        case "tired":
          tired++;
          break;
      }
      moodSelected = true;
    }
  });

  if (!moodSelected) {
    alert("Please select a mood.");
    return;
  }

  calculateData();
}

document
  .getElementById("entryForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    updateData();
  });

window.onload = calculateData;
