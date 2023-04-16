//variables
const BASE_URL = "https://superheroapi.com/api.php/1666312750554777"
const image = document.getElementById('imageDiv');
const stats = document.getElementById('statsDiv');
const heroInput = document.getElementById('heroInput');

//functions
const getRandomHero = (id) => {
    const url = `${BASE_URL}/${id}`;
    fetch(url)
    .then(data => data.json())
    .then(json => {
        stats.innerHTML = "";
        image.innerText = json.name;
        image.innerHTML = `<p>${json.name}</p><img src="${json.image.url}" width=230 height=230>`;
        Object.keys(json.powerstats).map(item => {
            stats.innerHTML += `<p style="margin:0;">${item}: ${json.powerstats[item]}</p>`;
        })
        }
    )
}

const getHero = (name) => {
    const url = `${BASE_URL}/search/${name}`;
    fetch(url)
    .then(data => data.json())
    .then(json => {
        stats.innerHTML = "";
        image.innerText = json.results[0].name;
        image.innerHTML = `<p>${json.results[0].name}</p><img src="${json.results[0].image.url}" width=230 height=230>`;
        Object.keys(json.results[0].powerstats).map(item => {
            stats.innerHTML += `<p style="margin:0;">${item}: ${json.results[0].powerstats[item]}</p>`;
        })
    })
}