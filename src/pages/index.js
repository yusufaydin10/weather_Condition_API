function lottie_Load(lottie_Id, lottie_Path) {
  var lottie_Id = document.getElementById(lottie_Id);
  var lottie_options = {
    container: lottie_Id,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: lottie_Path,
  };

  return lottie.loadAnimation(lottie_options);
}
var animation1 = lottie_Load("lottie_1", "../lotties/lottie_1.json");
var animation2 = lottie_Load("lottie_2", "../lotties/lottie_2.json");
var animation3 = lottie_Load("lottie_3", "../lotties/lottie_3.json");
var animation4 = lottie_Load("lottie_4", "../lotties/lottie_4.json");
var animation5 = lottie_Load("lottie_5", "../lotties/lottie_5.json");
var animation6 = lottie_Load("lottie_6", "../lotties/lottie_6.json");
var animation7 = lottie_Load("lottie_7", "../lotties/lottie_7.json");
var animation8 = lottie_Load("lottie_8", "../lotties/lottie_8.json");
var animation9 = lottie_Load("lottie_9", "../lotties/lottie_9.json");
var animation10 = lottie_Load("lottie_10", "../lotties/lottie_10.json");

const url = "https://api.openweathermap.org/data/2.5/";
const key = "2d57f078684d05f3fa32a1dc4ad8e273";

function search_Key() {
  weather_data(city_Search.value);
}
const city_Search = document.getElementById("city_Search");

const weather_data = (city) => {
  fetch(`${url}weather?q=${city}&appid=${key}&units=metric&lang=tr`)
    .then((data) => {
      return data.json();
    })
    .then(result);
};

result = (data) => {
  var city = document.querySelector(".city");
  city.innerText = `${data.name}`.toUpperCase();
  var temperature = document.querySelector(".temperature");
  temperature.innerText = Math.trunc(`${data.main.temp}`) + "°";

  var min_Max_Temperature = document.querySelector(".min_Max_Temperature");
  min_Max_Temperature.innerText =
    "E.Y SICAKLIK : " +
    Math.trunc(`${data.main.temp_max}`) +
    "° E.D SICAKLIK : " +
    Math.trunc(`${data.main.temp_min}`) +
    "°";

  var information = document.querySelector(".information");
  information.innerText = `${data.weather[0].description}`.toUpperCase();

  const weather_Icons = `${data.weather[0].icon}`;
  const weather_Icons_Url = `https://openweathermap.org/img/wn/${weather_Icons}@2x.png`;
  document.querySelector(".weather_Icon").src = weather_Icons_Url;
};
