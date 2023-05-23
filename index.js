let weightInput = document.getElementById("weights");
let heightInput = document.getElementById("heights");
let calculatorButton = document.querySelector(".btn-button");
let result = document.getElementById("result");
let category = document.getElementById("category-statement");
let bmi, height, weight;

calculatorButton.addEventListener("click", () => {

  height = heightInput.value;
  weight = weightInput.value;
  bmi = weight /Math.pow(height/100, 2).toFixed(1);
  result.innerText = bmi;

  if (bmi < 18.5) {
    category.innerText = "Underweight";
    result.style.color = "red";
  } else if ((bmi >= 18.5) && (bmi <= 24.9)) {
    category.innerText = "Normal weight";
    result.style.color = "green";
  } else if ((bmi >= 25) && (bmi <= 29.9)) {
    category.innerText = "Overweight";
    result.style.color = "red";
  } else {
    category.innerText = "Obese";
    result.style.color = "red";
  }
});
let remove=document.getElementById("heights")
let remove1=document.getElementById("weights")
let del=()=>{
    remove.value="";
    category.innerText="";
    result.innerText="";
    remove1.value="";
}

