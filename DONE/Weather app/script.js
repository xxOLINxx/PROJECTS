let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";
const convertButton = document.getElementById('convertButton');
let spans = document.querySelectorAll('#degree');

const gettingName = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  return FULL_URL;
}

const gettingData = async (link) => {
  const data = await fetch(link);
  const json = await data.json();
  //DOM
  document.getElementById('cityName').innerText = `${json.name}, ${json.sys.country}`;
  document.getElementById('temp').innerText = convertingDegrees(json.main.temp).toFixed(2);
  document.getElementById('mintemp').innerText = convertingDegrees(json.main.temp_min).toFixed(2);
  document.getElementById('maxtemp').innerText = convertingDegrees(json.main.temp_max).toFixed(2);
  document.getElementById('main').innerText = json.weather[0].main;
}

const convertingDegrees = (value) => {
  if (convertButton.value == 1){
    return (value - 32) * (5/9);
  } else {
    return value;
  }
}

document.querySelector('input').addEventListener("keydown", function (e){
  if (e.key == "Enter"){
    gettingData(gettingName(inputCity.value));
  }
})

const convertor = (menu) => {
  if (menu == 1){
      spans.forEach(span => {
        span.innerText = "F";
      })
      convertButton.innerHTML = "&#176;F";
      convertButton.value = 0;
    } else {
      spans.forEach(span => {
        span.innerText = "C";
      })
      convertButton.innerHTML = "&#176;C";
      convertButton.value = 1;
    }
    gettingData(gettingName(inputCity.value))
}

