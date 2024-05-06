function weightHeight(weight, height) {
    var bmi = Math.round(weight / (height * height));

    if (bmi < 18.5) {
        return ("Your BMI is " + bmi + ", so you are underweight");
    } else if (bmi < 24.9) {
        return ("Your BMI is " + bmi + ", so you are normal weight");
    } else if(bmi < 29.9) {
        return ("Your BMI is " + bmi + ", so you have are overweight ");
    } else if (bmi < 34.9) {
        return ("Your BMI is " + bmi + ", so you have are Obese ");
    } else if (bmi < 35.0) {
        return ("Your BMI is " + bmi + ", so you have are extremely obese ");
    }
}

function calculateBMI() {
    var weight = document.getElementById("weight").value;
    var height = document.getElementById("height").value;

    var result = weightHeight(weight, height);
    document.getElementById("result").innerText = result;
}