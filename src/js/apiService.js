
export default class ImagesApiService {
    constructor() {      
        this.searchQuery = '';
        this.API_KEY = '23521074-c1847750f84d7ba2d97c15f75';
        this.BASE_URL = 'https://pixabay.com/api/';
        this.page = 1;
    }

    fetchImages() {

        const url = `${this.BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=8&key=${this.API_KEY}`               
        return fetch(url).then(response => response.json())
            .then(data => {
                this.incrementPage();
                return data.hits
            })
    }

    get query() {
        return this.searchQuery;
    }
    set query(newQuery) {
        return this.searchQuery = newQuery;
    }

    incrementPage() {
        this.page += 1
    }

    resetPage() {
        this.page = 1
    }

}
