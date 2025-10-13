const input = document.querySelector('#input-field');
const uppercase = document.querySelector('.uppercase');
const lowercase = document.querySelector('.lowercase');
const capitalize = document.querySelector('.capitalize');
const bold = document.querySelector('.bold');
const italic = document.querySelector('.italic');
const underline = document.querySelector('.underline');
const output = document.querySelector('#output-field')

function reset() {
    output.style.fontStyle= "normal";
    output.style.fontWeight = "normal";
    output.style.textDecoration = "none";
    output.style.textTransform = "none";
}

uppercase.addEventListener('click', ()=> {
    reset();
    output.textContent = input.value.toUpperCase(); 
});

lowercase.addEventListener('click', ()=> {
    reset();
    output.textContent = input.value.toLowerCase(); 
});

capitalize.addEventListener('click', ()=> {
    output.textContent = input.value;
    output.style.textTransform = "capitalize";
});

bold.addEventListener('click', ()=> {
    reset();
    output.textContent = input.value;
    output.style.fontWeight = "bold";

});

italic.addEventListener('click', ()=> {
    reset();
    output.textContent = input.value;
    output.style.fontStyle = "italic";
});

underline.addEventListener('click', ()=> {
    reset();
     output.textContent = input.value;
     output.style.textDecoration = "underline";
});



// function toCapitalize(str) {
//   return str.replace(/\b\w/g, char => char.toUpperCase());
// }

