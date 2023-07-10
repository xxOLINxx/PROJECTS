const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
let image_width;
let fontSize;
let zoom;

if(vw > 600){
    image_width = 250
    fontSize = 16
    zoom = 13
} else{
    image_width = 180
    fontSize = 14
    zoom = 12
}

const map = L.map('map').setView([49.74196437917727, 13.365186534332542], zoom);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);


//template for everything
let template = (name, text, picture) => {
   let x =  `
    <div class="template-wrapper">
    <h2 class="template-heading" style="font-size:${fontSize * 1.6}px">${name}</h2>
    <div class="tempalte-content" style="width:${image_width}px">
    <img src="${picture}" alt="picture of the place" class="template-picture" width=${image_width}>
    <p class="template-text" style="font-size:${fontSize}px;width:${image_width}">${text}</p>
    </div>
    </div>
    `
    return x
} 

// hotel ibis
let googleMap = `https://www.google.com/maps/place/Hotel+ibis+Plze%C5%88/@
49.7228825,13.3241099,15.75z/data=!4m13!1m2!2m1!1sibis!3m9!1s0x470aede9a9c
e6e6d:0x8e51b7118f4e2207!5m2!4m1!1i2!8m2!3d49.7250938!4d13.3272072!15sCgRp
YmlzWgYiBGliaXOSAQVob3RlbJoB
JENoZERTVWhOTUc5blMwVkpRMEZuU1VSek9FbHBPVEpCUlJBQuABAA!16s%2Fg%2F1vq9k_mz`

let ibisText = `Link for the wepage of the hotel
<strong><a href="https://www.hotelibisplzen.cz/en/" target="_blank">here</a></strong>. You can find this place on
    adress <strong><a href="${googleMap}" target="_blank">Univerzitní 65</a></strong>.`

    const markerIbis = L.marker([49.72509145010219, 13.327203611886718]).addTo(map);
markerIbis.bindPopup(template("hotel IBIS", ibisText,"pictures/ibis.jpg"));





// hotel Marriott
googleMap = `https://www.google.com/maps/place/Courtyard+b
y+Marriott+Pilsen/@49.7485401,13.3812928,19.25z/data=!4m13!1m2!2m
1!1smarriott!3m9!1s0x470af1ef997f5db1:0xa4048e0d18dc3c89!5m2!4m1!1
i2!8m2!3d49.748559!4d13.3815618!15sCghtYXJyaW90dCI
DiAEBWgoiCG1hcnJpb3R0kgEFaG90ZWzgAQA!16s%2Fg%2F1hc41rx4h`

let marriottText = `Link for the wepage of the hotel
<strong><a target="_blank" href="https://www.marriott.com/en-us/hotels/prgpz-courtyard-p
ilsen/overview/?scid=00bac83c-e2ae-47ac-a320-a6f8f82bb36d&gclid=CjwKCAjw3POhBhBQEiwAqTCuB
pxfE3rIrC5UaPAOVoTIQ9J2ARepAv2VCHD9vcyoOyrVbvt5hlgFKRoCnzwQAvD_BwE&gclsrc=aw.d
s">here</a></strong>. Headquarters will be located inside this hotel. You can find this place on
    adress <strong><a href="${googleMap}" target="_blank">sady 5. května 57</a></strong>.`
const markerMariott = L.marker([49.74855314066368, 13.381562916491971]).addTo(map);
markerMariott.bindPopup(template("hotel Marriott", marriottText,"pictures/marriott.png"));




// hotel Vienna house
googleMap = `https://www.google.com/maps/place/Vienna+House+Easy
+by+Wyndham+Pilsen/@49.7458415,13.3843575,17z/data=!3m1!4b1!4m9!3
m8!1s0x470af1e7b5332fa1:0x8bc9bbb49a5133b1!5m2!4m1!1i2!8m2!3d49.7
458415!4d13.3869324!16s%2Fg%2F1w_vl_3y`

let viennaText = `Link for the wepage of the hotel
<strong><a target="_blank" href="https://www.guestreservations.com/angelo-by-vienna-house
-pilsen/booking?gclid=CjwKCAjw3POhBhBQEiwAqTCuBo78Cy6cr2A61Dtn2VveHzvC1MxilXKOdAZfAphf2so
9sSJEPoWIvBoCRLAQAvD_BwE">here</a></strong>. You can find this place on
    adress <strong><a href="${googleMap}" target="_blank">U Prazdroje 2720</a></strong>.`
const markerVienna = L.marker([49.74582909117203, 13.386963975377626]).addTo(map);
markerVienna.bindPopup(template("Vienna House", viennaText,"pictures/vienna_house.jpg"));




// namesti
googleMap = `https://www.google.com/maps/p
lace/N%C3%A1m%C4%9Bst%C3%AD+Republiky,+Plz
e%C5%88/@49.7470529,13.3762436,17.75z/data
=!4m6!3m5!1s0x470af17e4d73aea9:0x9fa1c2f550
e4daee!8m2!3d49.7467733!4d13.3777404!16zL20vMGd4NGZm`

let namestiText = `This is
<strong>Republic Square</strong> and the finals of the tournames will be held here.
    Adress is <strong><a href="${googleMap}" target="_blank">301 00 Plzeň 3</a></strong>.`
const markerNamesti = L.marker([49.74699695171426, 13.37747555603402]).addTo(map);
markerNamesti.bindPopup(template('Final archery range<br><span class="date">22nd and 23rd July</span>', namestiText,"pictures/namesti.jpg"));




// hriste v lucni
googleMap = `https://www.google.com/maps/place/Fotbalov%C3%BD+Stadi
on+Lu%C4%8Dn%C3%AD/@49.7548941,13.3886487,18z/data=!4m6!3m5!1s0x470a
f1eb0e45eb15:0xbd73355f05a89153!8m2!3d49.7553673!4d13.3902556!16s%2Fg%2F11fx913t5q`

let lucniText = `First stage of the tournamet will be held here. You can find it on adress
<strong><a href="${googleMap}" target="_blank">Luční 645/54</a></strong>.`
const markerLucni = L.marker([49.757859, 13.388880]).addTo(map);
markerLucni.bindPopup(template('1st archery range<br><span class="date">17th-21st July</span>', lucniText,"pictures/lucni.jpg"));

// catering Lucni
let cateringText = ``
const markerCatering = L.marker([49.756813, 13.390129]).addTo(map);
markerCatering.bindPopup(template('Catering', cateringText,"pictures/lucni.jpg"));

//equipment storage
let equipmentText = ``
const markerEquipment = L.marker([49.756565, 13.390530]).addTo(map); 
markerEquipment.bindPopup(template('Equipment storage', equipmentText,"pictures/lucni.jpg"));

// roots
