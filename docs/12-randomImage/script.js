
const baseURL = 'https://picsum.photos/'  ///**** used picsum photos for generating random images******/

// this url gives an image without using API
const container = document.querySelector('.content');

let rows = 7;

for(let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  img.src = `${baseURL}${randomSize()}/${randomSize()}`;
  container.appendChild(img);
}

function randomSize() {
  return Math.floor(Math.random() * 10 + 300);
}



