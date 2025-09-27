// console.log("Welcome to color changer project");

 const buttons =document.querySelectorAll('.button');

 buttons.forEach(button => {
    button.addEventListener('click', () => {
        const color = window.getComputedStyle(button).backgroundColor;
        document.body.style.backgroundColor = color;
    });

 });

