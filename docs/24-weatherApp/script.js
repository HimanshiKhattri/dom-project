API_KEY = '810bdade7d349b512a69ea2ba7b41a82';
END_POINT = 'https://api.openweathermap.org/data/2.5/weather';

// get dom el
const inputCity = document.getElementById('city');
const searchBtn = document.getElementById('searchBtn');
const statusEl = document.getElementById('status');
const resultSection = document.getElementById('result');
const cityName = document.getElementById('cityName');
const descEl = document.getElementById('desc');
const localTimeEl = document.getElementById('localTime');
const tempEl = document.getElementById('temp');
const tempIconEl = document.getElementById('icon');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const sunrise = document.getElementById('sunrise');
const sunset = document.getElementById('sunset');
const mapPlaceholderEl = document.getElementById('mapPlaceholder');


// hide result section
function hideResult() {
    resultSection.classList.add('hidden')
}

// show result section
function ShowResult() {
    resultSection.classList.remove('hidden');
}

// set status
function setStatus(msg , isError = false) {
    statusEl.textContent = msg;
    statusEl.style.color = isError ? '#ffbaba' : '';
}

// icon
function iconURL(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}

// formatTime
// function formatTime(tsSeconds, tzOffsetSec) {
//     const d = new Date((tsSeconds + tzOffsetSec) * 1000);  //to localTime
//     return d.toUTCString().slice(17, 22); // HH:MM format
// }


function formatTime(ts, offset) {
    const d = new Date((ts + offset) * 1000);

    return d.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'UTC'
    });
}

// localTime
function localTime(tzOffsetSec) {
    const nowUtc = Math.floor(Date.now() / 1000);
    return formatTime(nowUtc , tzOffsetSec);
}

//weather fetch for a city
async function fetchWeather(city) {
    try {
        setStatus('Loading…');
        hideResult();  //hide result section
        const url = `${END_POINT}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        if(!res.ok) {
           if(res.status === 404) {
            throw new Error('City Not Found');
           }
           throw new Error(`Network error ${res.status}`);
        }

        const data = await res.json();
        return data;
        
    } catch (error) {
        throw error;
    }

}

// render to UI
function renderWeather(data) {
    // data structure
    const {name, timezone, sys, wind, main, weather} = data;
    const w = weather && weather[0];
    cityName.textContent = `${name}, ${sys && sys.country ? sys.country : ''}`
    descEl.textContent = w ? (w.description || '').replace(/\b\w/g, s => s.toUpperCase()) : '';
    tempEl.textContent = main ? Math.floor(main.temp) : '-';
    tempIconEl.src = w ? iconURL(w.icon) : '';
    tempIconEl.alt = w ? w.description : 'weather'; 
    humidityEl.textContent = main ? main.humidity : '-';
    windEl.textContent = wind ? (wind.speed + 'm/s') : '-';
    sunrise.textContent = sys && sys.sunrise ? formatTime(sys.sunrise, timezone) + ' AM' : '-'; 
    sunset.textContent = sys && sys.sunset ? formatTime(sys.sunset , timezone) + ' PM' : '-';
    localTimeEl.textContent = localTime(timezone);
    ShowResult();
    setStatus('Weather Loaded');
}

// search 
async function doSearch() {
    const q = inputCity.value.trim();
    if(!q) {
        setStatus('Please enter a City.', true);
        return;
    }
    try {
        const data = await fetchWeather(q);
        renderWeather(data);
    } catch (error) {
        console.error(error);
        setStatus(error.message || 'Failed to fetch weather' , true);
    }

}

// console.log(fetchWeather("Lucknow"));
// Event
searchBtn.addEventListener('click' , doSearch);
inputCity.addEventListener('keydown' , (e) => {
    if(e.key === 'Enter') {
        doSearch();
    }
});