const dayEl = document.getElementById('day');
const minEl = document.getElementById('minute');
const hrEl = document.getElementById('hour');
const secEl = document.getElementById('second');
const countdownEl = document.getElementById('countdown');

// targeting new year
const target = new Date('Jan 1, 2027 00:00:00').getTime();

function updateTime() {
    const now = new Date().getTime();
    const difference = target-now

    if(difference <= 0) {
        countdownEl.innerHTML = `<h2>HAPPY NEW YEAR </h2>`;
    }

    const day = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((difference / (1000 * 60)) % 60);
    const second = Math.floor((difference / 1000) % 60)

    dayEl.innerText = day;
    hrEl.innerText = hour;
    minEl.innerText = minute;
    secEl.innerText = second;

}


setInterval(updateTime , 1000);