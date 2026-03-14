const displayInput = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equals");

let currentInput = "";

// add num or operator to display
buttons.forEach(button => {
    button.addEventListener("click" , () => {
        currentInput += button.textContent;
        displayInput.value = currentInput;
    });
});

// clear input
clearBtn.addEventListener("click" , () => {
    currentInput = "";
    displayInput.value = "";
});

// result

equalBtn.addEventListener("click" , () => {
    try {
        currentInput = eval(currentInput);
        displayInput.value = currentInput;
        
    } catch  {
        displayInput.value = "Error";
        currentInput = "";
    }

});