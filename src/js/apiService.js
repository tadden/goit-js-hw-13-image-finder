import settings from "./settings"

export default class ImagesApiService {
    constructor() {
        
        this.searchQuery = ''
        this.page = 1
    
    }

    fetchGallery() {
        const url = `${settings.BASE_URL}/?image_type=${settings.IMAGE_TYPE}&orientation=${settings.ORIENTATION}&q=${this.searchQuery}&page=${this.page}&per_page=${settings.QUANTITY_PER_PAGE}&key=${settings.KEY}`
        
        return fetch(url).then(response => response.json()).then(console.log)
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
