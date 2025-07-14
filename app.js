const urlAdress =
  "https://newsapi.org/v2/everything?q=apple&from=2025-07-13&to=2025-07-13&sortBy=popularity&apiKey=c97a3ce916e344208df1c867748b6a35";
const containerNews = document.querySelector(".container-news");
const sideNewsContainer = document.querySelector(".side-news-container");
const updateBtn = document.querySelector(".update-btn");
const getNews = async () => {
  try {
    const response = await fetch(urlAdress, {
      method: "GET",
    });
    const data = await response.json();
    const articles = data.articles;
    app(articles);
  } catch (error) {
    console.log("Error while getting data");
  }
};
getNews();
updateBtn.addEventListener("click", () => {
  containerNews.innerHTML = "";
  sideNewsContainer.innerHTML = "";
  getNews();
});
function app(articles) {
  firstArticle = articles[0];
  sideNewsContainer.innerHTML = `
    <img src="${firstArticle.urlToImage}"alt="tesla-img" class="side-img"/>
  `;
  let newsNo = 10;
  for (let i = 0; i < newsNo; ++i) {
    const article = articles[i];
    containerNews.innerHTML += `
    <div class="news">
      <h4>${article.title || "Titlu Indisponibil"} </h4>
      <p>${article.content || "Continut Indisponbil"}</p>
      <img src="${article.urlToImage} " alt="news-image">
      <p>${article.publishedAt}</p>
    </div>
   `;
  }
  let sideNewsNo = 20;
  for (let j = 0; j < sideNewsNo; ++j) {
    const sideArticle = articles[j];
    sideNewsContainer.innerHTML += `
    <div class="side-news">
        <h2 class="side-news-title">${
          sideArticle.title || "Titlu Indisponibil"
        } </h2>
        <p>${sideArticle.content || "Continut Indisponibil"}</p>
      </div>
    `;
  }
}
