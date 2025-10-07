// use indicator width
const indicator = document.querySelector('.scroll-indicator .progress')

window.addEventListener('scroll' , () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100; 
    indicator.style.width = `${scrolled}%`;
});
