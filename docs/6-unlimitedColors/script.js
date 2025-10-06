const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
let intervalId = null;

const bgChange = function() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

startbtn.addEventListener('click', function() {
    if(!intervalId) {
        intervalId = setInterval( bgChange , 1000 );    
    }           
});

stopbtn.addEventListener('click' , function() {
    clearInterval(intervalId);
    intervalId = null;
});




