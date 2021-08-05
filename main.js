const main = document.querySelector("main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

getFilmes(APIURL);

async function getFilmes(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  mostrarFilmes(respData.results);
}

function mostrarFilmes(movies) {
  main.innerHTML = "";
  movies.forEach((movie) => {
    const { poster_path, title, vote_average, overview, release_date } = movie;

    const filmeEl = document.createElement("div");
    filmeEl.classList.add("filmes");

    filmeEl.innerHTML = `
    <div class="filmes-wrap">
          <img
            src="${POSTERPATH + poster_path}"
            alt="${title}"
          />
          <div class="sinopse">
          <span class="realese-data">${release_date}</span>
          <p class="sinopse-p">${overview}</p>
          </div>
          </div>
          <div class="filmes-info">
            <h3 class="filme-titulos">${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          `;

    main.appendChild(filmeEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
    getFilmes(SEARCHAPI + searchTerm);

    search.value = "";
  }
});

// document
//   .getElementById("meus-favoritos")
//   .addEventListener("click", function () {
//     alert("hello");
//   });

// window.addEventListener("load", function () {
//   var mover = document.getElementById("meus-favoritos");

//   mover.addEventListener("click", function (event) {
//     alert("hello");
//   });
// });

// var el = document.querySelector(".meus-favoritos");
// if (el) {
//   el.addEventListener("click", meusFavoritos);
// }

// function meusFavoritos() {
//   console.log("it works eurekaaa");
// }

function toggleMenu() {
  toggle.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const toggle = document.querySelector("#menu");
const navMenu = document.querySelector("nav");

toggle.onclick = function toggleMenu() {
  toggle.classList.toggle("active");
  navMenu.classList.toggle("active");
};
