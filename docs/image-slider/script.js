const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const btnPrev = document.querySelector('.prev');
const btnNxt = document.querySelector('.next');
const dotsBox = document.querySelector('dots')

// console.log(typeof(slides))
// console.log(typeof(images))
// console.log(images)
// console.log(images.length)

let index = 0;

// slideshow function
function slideShow(i) {
    if(i < 0) {
        console.log(i)
        console.log(images.length)
        index = images.length - 1;
        console.log(index);
    } else if (i >= images.length) {
        index = 0;
        console.log(index)
    } else {
        index = i;
        console.log(index)
    }

    slides.style.transform = `translateX(${-index * 100}%)`;
}

// button event
btnPrev.addEventListener("click" ,() => {
    slideShow(index - 1)
})

btnNxt.addEventListener("click" ,() => {
    slideShow(index + 1)
})