const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const API_KEY = "api_key=60d4e9516b614a32bca88bb472697003";
const BASE_URL = "https://api.themoviedb.org/3/";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const API_URL = BASE_URL + "discover/movie?sort_by=popularity.desc&" + API_KEY;
moviesInfo(API_URL);
function moviesInfo(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      data.results.forEach((element) => {
        const el = document.createElement("div");
        const image = document.createElement("img");
        const text = document.createElement("h2");
        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        main.appendChild(el);
      });
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";
});
const searchTerm = search.value;
if (searchTerm) {
  moviesInfo(API_URL + searchTerm);
  search.value = "";
}
