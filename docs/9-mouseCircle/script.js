const cursor = document.querySelector('.cursor');
const container = document.querySelector('.container')
// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];
// add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

container.addEventListener('mouseenter', () => {
  cursor.style.opacity = 0.8;
  

});

container.addEventListener('mousemove',(event) => {
  // console.log(event.clientX, event.clientY)
  cursorMove(event.clientX , event.clientY);
});

container.addEventListener('mouseleave' , () => {
  cursor.style.opacity = 0
});

const cursorMove = function(clientX , clientY) {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  cursor.style.backgroundColor = randomColor;
  cursor.style.left = clientX + "px";
  cursor.style.top = clientY + "px";
}

