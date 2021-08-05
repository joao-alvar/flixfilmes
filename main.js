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
          <h4 class="sinopse-titulo">sinopse</h4>
          ${overview}</div>
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
