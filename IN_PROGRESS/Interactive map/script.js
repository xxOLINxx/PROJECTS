const map = L.map('map').setView([49.74196437917727, 13.365186534332542], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// adding marker

// hriste v lucni
const markerLucni = L.marker([49.75460761416636, 13.389108020761466]).addTo(map);
markerLucni.bindPopup('Hello world');

// hotel ibis
let ibisTemplate = `
    <h1 class="template-h1">Hotel IBIS</h1>
    <div class="template-wrapper">
    <div class="left">
    <img src="pictures/ibis.jpg" class="template-image"/>
    </div>
    <div class="right">
    <p>
    vsdfgsdfgsdgsdgsdgsdgsdfgsdgsdgsdgsdgsdgsdgsdgsdgsd
    </p>
    </div>
</div>
`
const markerIbis = L.marker([49.72509145010219, 13.327203611886718]).addTo(map);
markerIbis.bindPopup(ibisTemplate);

// hotel Marriott
const markerMariott = L.marker([49.74855314066368, 13.381562916491971]).addTo(map);
markerMariott.bindPopup();

// hotel Vienna house
const markerVienna = L.marker([49.74582909117203, 13.386963975377626]).addTo(map);
markerVienna.bindPopup();

// namesti
const markerNamesti = L.marker([49.74699695171426, 13.37747555603402]).addTo(map);
markerNamesti.bindPopup();