class NewsUI {
    constructor() {
        this._container = document.querySelector(".news-container .row");
        this._defaultImage = "img/default-image.png";
    }

    addNews(news) {
        const template = this._newsTemplate(news);
        this._container.insertAdjacentHTML("afterbegin", template);
    }
/**
 * clearContainer - метод для очищення в розмітці новин 
 */
    clearContainer() {
        this._container.innerHTML = "";
    }

    /**
     * addEmptyMessage() - ф-ія по виводу повідомлення про відсутність новин
     */
    addEmptyMessage(){
        const search = document.querySelector(".search-container");
        const message = document.querySelector('.message');
        if(message) search.removeChild(message); 
		const template = this._emptyMessageTemplate();
        search.insertAdjacentHTML("afterbegin", template);
		setTimeout(() => {
            const curent_message = document.querySelector('.message');
            if(curent_message) search.removeChild(curent_message); 
        },10000);
    }
    
    _newsTemplate({urlToImage, url, title, description}) {
        return `
        <div class="col s12 l6"> 
            <div class="card">
                <div class="card-image">
                    <img src="${urlToImage || this._defaultImage}">
                </div>
                <div class="card-content">
                    <span class="card-title">${title}</span>
                    <p>${description || ""}</p>
                </div>
                <div class="card-action">
                    <a href="${url}" target="_blank">Read more</a>
                </div>
            </div>
        </div>
        `;
    }

    _emptyMessageTemplate() {
        return `
        <div class="message">
            <div class="card-panel red accent-1"
            <div class="card-panel>
                <span class="white-text">По Вашому запиту нiчого не знайдено!
                    <ol>Пропозиції:
                        <li>Переконайтеся, що всі слова написані правильно.</li>
                        <li>Спробуйте різні ключові слова.</li>
                        <li>Спробуйте більш загальні ключові слова.</li>
                    </ol>
                </span>
                </div>
            </div>
        </div>
		`;
    }
}

