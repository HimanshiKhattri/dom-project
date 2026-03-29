const quotes = [
  "The best way to predict the future is to create it.",
  "Dream big and dare to fail.",
  "Don’t count the days, make the days count.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Happiness depends upon ourselves."
];

const qouteObject = document.getElementById("qt-obj");
const btnQtObj = document.getElementById("btn-qt-obj");
const qouteApi = document.getElementById("qt-api");
const btnQtApi = document.getElementById ("btn-qt-api");


// by math.random

btnQtObj.addEventListener("click" , () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    qouteObject.innerText = quotes[randomIndex]
});  

// by fetch api

btnQtApi.addEventListener("click" , getQouteApi);

async function getQouteApi() {
  try {
    const response = await fetch("https://api.api-ninjas.com/v2/randomquotes?categories=success,wisdom" , {
        headers: {
            'X-Api-Key' : '4UlpUx7uinoAIMyNxPSyAU7smgTh0pUkYjefiArf'
        }
    });
    const data = await response.json()
    qouteApi.innerText = data[0].quote
    
  } catch (error) {
    qouteApi.innerText = "oops couldn't fetch the api";
  }  
}