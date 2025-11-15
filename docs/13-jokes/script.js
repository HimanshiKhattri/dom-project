const url = 'https://api.chucknorris.io/jokes/random';
const jokeBtn = document.querySelector('.btn');
const JokeDisplay  = document.querySelector('#display-joke');


// handle this end point with XMLHttpRequest
// jokeBtn.addEventListener('click' , () => {
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET' , url, true);

//     xhr.onload = function() {
//     if(xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         JokeDisplay.textContent = data.value;
//     } else {
//         JokeDisplay.textContent = "Error loading jokes"
        
//     }
// }

// xhr.onerror = function () {
//         JokeDisplay.textContent = "Request failed!";
//     };

// xhr.send();
// });


// handle this end point with promises

// function getData(url) {
//     return new Promise((resolve , reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET' , url , true);

//         xhr.onload = function() {
//             if(xhr.status === 200) {
//                 resolve(JSON.parse(xhr.responseText));
//             } else {
//                 reject("Error " + xhr.status);
//             }
//         };

//         xhr.onerror = function() {
//             reject('network error');
//         }

//         xhr.send();

//     });
// }

// jokeBtn.addEventListener('click' , () => {
//     getData(url)
//     .then(data => {
//         JokeDisplay.textContent = data.value;
//     })
//     .catch(err => {
//         JokeDisplay.textContent = err;

//     });
// });


// handle the case of race condition

// let currentRequestId = 0;

// function getDataRaceProtection() {
//     const requestId = ++currentRequestId;  // it should be unique
//     // console.log(requestId)
//     return new Promise((resolve , reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open('GET' , url , true);

//         xhr.onload = function() {
//             if(xhr.status === 200 && requestId === currentRequestId) {
//                 resolve(JSON.parse(xhr.responseText));
//             }
//         }

//         xhr.onerror = function() {
//             if(requestId === currentRequestId) {
//                 reject('network error');
//             }
//         }

//         xhr.send();
//     });
// }

// jokeBtn.addEventListener('click' , () => {
//     JokeDisplay.textContent = "loading.."
//     getDataRaceProtection(url)
//     .then(data => {
//         JokeDisplay.textContent = data.value;
//     })
//     .catch(err => {
//         JokeDisplay.textContent = err;
//     }) 
// });


// handle end point with fetch 

// jokeBtn.addEventListener('click' , () => {
//     fetch(url)
//     .then(Response => {
//         if(!Response.ok) {
//             throw new Error('network response error');    
//         }
//         return Response.json();
//     })
//     .then(data => {
//         JokeDisplay.textContent = data.value;
//     })
//     .catch(Error => {
//         JokeDisplay.textContent = `Error: ${Error.message}`;
//     });
// });

// handle end point using async await
jokeBtn.addEventListener('click' , () => {
    getJoke()
});

async function getJoke() {
    try {
        const response = await fetch(url);
        if(!response.ok) {
        throw new Error('network response error');   
        }
        const data = await response.json();
        JokeDisplay.textContent = data.value;    
    } catch (error) {
        JokeDisplay.textContent = "Error : " + error.message;    
    }  
}

