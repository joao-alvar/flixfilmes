const APIKEY = "04c35731a5ee918f014970082a0088b1";
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const POSTERPATH = "https://image.tmdb.org/t/p/w370_and_h556_bestv2";

const main = document.querySelector("main");

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
        <span class="filme-nota">${vote_average}</span>
      </div>
      `;

    main.appendChild(filmeEl);
  });

  return respData;
}

getFilmes();
