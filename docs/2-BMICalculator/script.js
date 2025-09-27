const btn = document.getElementById('btn');
const result = document.getElementById('results');

btn.addEventListener('click', function() {
const heightInCM = parseFloat(document.getElementById('height').value);
const weight = parseFloat(document.getElementById('weight').value);

  if( !heightInCM || !weight || heightInCM <= 0 || weight <= 0) return alert("please enter valid height or weight.")

    const height = heightInCM / 100;
    const bmi = weight / (height ** 2);
    const bmiResult = Math.round(bmi * 100) / 100;

    if(bmiResult < 18.60) {
        result.innerHTML = `your BMI is ${bmiResult} and you are underweight.`
    } else if (bmiResult >= 18.60 && bmiResult <= 24.90) {
        result.innerHTML = `your BMI is ${bmiResult} and you are normal weight.`

    } else {
        result.innerHTML = `your BMI is ${bmiResult} and you are overweight.`

    }
});

