const main = document.querySelector("main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

getFilmes();

async function getFilmes() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  console.log(respData);

  respData.results.forEach((movie) => {
    const { poster_path, title, vote_average } = movie;

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
      `;

    main.appendChild(filmeEl);
  });

  return respData;
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
});
