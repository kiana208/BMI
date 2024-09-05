const weight = document.getElementById("weight");
const height = document.getElementById("height");
const gender = document.getElementById("gender");
const result = document.getElementById("result");
const interpretation = document.getElementById("interpretation");

function calculateBMI() {
  if (!weight.value || !height.value) {
    result.innerHTML = "Please enter your weight and height.";
    interpretation.innerHTML = "";
    return;
  }

  if (!gender.value) {
    result.innerHTML = "Please select your gender.";
    interpretation.innerHTML = "";
    return;
  }

  const bmi = weight.value / ((height.value / 100) ** 2);
  result.innerHTML = `Your BMI is: ${bmi.toFixed(2)}`;
  interpretation.innerHTML = interpretBMI(bmi);
}

function interpretBMI(bmi) {
  if (gender.value === "male") {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  }

  if (gender.value === "female") {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 24.9) return "Normal weight";
    if (bmi < 29.9) return "Overweight";
    return "Obese";
  }
  
  return "Please select a valid gender.";
}


function reload() {
  result.innerHTML = "";
  interpretation.innerHTML = "";
  weight.value = "";
  height.value = "";
  gender.value = "";
}
