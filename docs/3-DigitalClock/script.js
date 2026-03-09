const clock = document.getElementById('clock');
const dateEl = document.getElementById('date');

setInterval(() => {
    const date = new Date();
    clock.innerText = date.toLocaleTimeString();
   
    
} );

const date = new Date();
dateEl.innerText = date.toDateString();


