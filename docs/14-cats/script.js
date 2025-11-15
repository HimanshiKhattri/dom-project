const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const catContainer = document.querySelector('.container')

// handle end point with fetch

btn.addEventListener('click' , () => {
    catContainer.innerHTML = '';
    fetch(url)
    .then(response => {
        if(!response.ok) {
            throw new Error('Network response error')
        }
        return response.json();
    })
    .then(data => {
        // console.log(data[0].url)
        imageContainer(data[0].url);
    })
    .catch(Error => {
        catContainer.textContent = `Error: ${Error.message}`
    })
});

function imageContainer(ImageUrl) {
    const cats = document.createElement('div');
    cats.classList.add('cats');
    catContainer.appendChild(cats);
    cats.innerHTML = `<div class = "random_cats">
                        <img src="${ImageUrl}" alt = "random cat">
                        </div>`
}

