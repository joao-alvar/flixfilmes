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
    const { poster_path, title, vote_average, overview } = movie;

    const filmeEl = document.createElement("div");
    filmeEl.classList.add("filmes");

    filmeEl.innerHTML = `
          <img
            src="${POSTERPATH + poster_path}"
            alt="${title}"
          />
          <div class="filmes-info">
            <h3 class="filme-titulos">${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
          </div>
          <div class="sinopse">
          <h3 class="sinopse-titulo">Sinopse <span class="meus-favoritos"><i class="far fa-heart"></i></span></h3>
          <p class="sinopse-p">${overview}</p>
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

const reloadtButton = document.querySelector(".logo");
// Reload everything:
function reload() {
  reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);
