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
