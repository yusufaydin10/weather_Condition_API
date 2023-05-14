function animasyonyukle(Id, yol) {
  var Id = document.getElementById(Id);
  var animationOptions = {
    container: Id,
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: yol,
  };
  return lottie.loadAnimation(animationOptions);
}

// Lottie animasyonlarını yükleyin ve oynatın
// var animation1 = animasyonyukle("hareketli", "weatherr.json");
var animation2 = animasyonyukle("sekil", "../lotties/kar.json");
var animation3 = animasyonyukle("bulutt", "../lotties/bulut.json");
var animation4 = animasyonyukle("gunes", "../lotties/gunes.json");
var animation5 = animasyonyukle("yagmur", "../lotties/yagmur.json");
var animation6 = animasyonyukle("simsek", "../lotties/simsek.json");
var animation7 = animasyonyukle("gunes2", "../lotties/gunes2.json");
var animation8 = animasyonyukle("hava", "../lotties/hava.json");
var animation9 = animasyonyukle("degisen", "../lotties/degisen.json");
var animation10 = animasyonyukle("simsek2", "../lotties/simsek2.json");
var animation11 = animasyonyukle("hava2", "../lotties/hava2.json");

// const sekil = document.getElementById("sekil");
// lottie.loadAnimation1({
//   container: sekil,
//   renderer: "svg",
//   loop: true,
//   autoplay: true,
//   path: "sekill.json",
// });

const url = "https://api.openweathermap.org/data/2.5/";
const key = "2d57f078684d05f3fa32a1dc4ad8e273";

function tusKontrol() {
  HavaDurumuVerisi(aranansehir.value);
}

const aranansehir = document.getElementById("aranansehir");

const HavaDurumuVerisi = (sehir) => {
  fetch(`${url}weather?q=${sehir}&appid=${key}&units=metric&lang=tr`)
    .then((veri) => {
      return veri.json();
    })
    .then(Sonuc);
};

const Sonuc = (veri) => {
  var sehir = document.querySelector(".sehir");
  sehir.innerText = `${veri.name}`.toUpperCase();
  var sicaklik = document.querySelector(".sicaklik");
  sicaklik.innerText = Math.trunc(`${veri.main.temp}`) + "°";
  console.log(veri);

  var minmax = document.querySelector(".minmax");
  minmax.innerText =
    "E.Y SICAKLIK : " +
    Math.trunc(`${veri.main.temp_max}`) +
    "° E.D SICAKLIK : " +
    Math.trunc(`${veri.main.temp_min}`) +
    "°";

  var aciklama = document.querySelector(".aciklama");
  aciklama.innerText = `${veri.weather[0].description}`.toUpperCase();

  const havaicon = `${veri.weather[0].icon}`;
  const havaiconurl = `https://openweathermap.org/img/wn/${havaicon}@2x.png`;
  document.querySelector(".hava-icon").src = havaiconurl;
};
