const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const btnPrev = document.querySelector('.prev');
const btnNxt = document.querySelector('.next');
const dotsBox = document.querySelector('.dots')


let index = 0;
let dots = [];



// slideshow function
function slideShow(i) {
    if(i < 0) {
        index = images.length - 1;
        console.log(index);
    } else if (i >= images.length) {
        index = 0;
    } else {
        index = i;

    }

    slides.style.transform = `translateX(${-index * 100}%)`;
    updateDots()
}

// button event
btnPrev.addEventListener("click" ,() => {
    slideShow(index - 1)
});

btnNxt.addEventListener("click" ,() => {
    slideShow(index + 1)
});


// creat dots dynamically
images.forEach(( _ , i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if(i === 0) dot.classList.add('active');
    dot.addEventListener("click" , () => {
        slideShow(i);
    });
    dotsBox.appendChild(dot);
    dots.push(dot)
} );

// update dots
function updateDots() {
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

// auto slide 
setInterval(() => {
    slideShow(index + 1)
} , 5000);