// Create instance
const newsService = new NewsService(new CustomHttp());
const newsUI = new NewsUI();

// UI elements
const countrySelect = document.querySelector(".country");
const categorySelect = document.querySelector(".category");
const searchInput = document.querySelector(".search");
const form = document.querySelector(".form");
const close = document.querySelector(".close");

const callback = (res) => {
    const { articles, totalResults } = res;
    if(!totalResults) newsUI.addEmptyMessage();
    newsUI.clearContainer();
    articles.forEach(news => newsUI.addNews(news));
};

/**
 * @param {Text} country - регіон для запиту новин
 * @param {Text} category - категорія новин
 */
const getCountryTechnolodyHandler = () => {
    const country = countrySelect.value;
    const category = categorySelect.value;
    searchInput.value = '';
    newsService.fetchTopHeadlines(callback, country,category);
};

const getSearchHandler = (e) => {
    e.preventDefault();
    const search = searchInput.value;
    newsService.fetchSeachNews(callback, search);
};



countrySelect.addEventListener("change", getCountryTechnolodyHandler);
categorySelect.addEventListener("change", getCountryTechnolodyHandler);
form.addEventListener("submit", getSearchHandler);
close.addEventListener("click", () => {
    searchInput.value = '';
    getCountryTechnolodyHandler();
});
window.addEventListener("load", getCountryTechnolodyHandler);
