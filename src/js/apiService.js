
// export default class ImagesApiService {
//     constructor() {      
//         this.searchQuery = ''
//         this.page = 1
//         this.BASE_URL = 'https://pixabay.com/api/',
//         this.IMAGE_TYPE = 'photo',
//         this.ORIENTATION = 'horizontal',
//         this.QUANTITY_PER_PAGE = 12,
//         this.KEY = '23635277-6f81df1acb0b4fe12e608e34f'
//     }

//     fetchGallery() {

//         const url = `${this.BASE_URL}?image_type=${this.IMAGE_TYPE}&orientation=${this.ORIENTATION}&q=${this.searchQuery}&page=${this.page}&per_page=${this.QUANTITY_PER_PAGE}&key=${this.KEY}`
        
//         return fetch(url).then(response => response.json()).then(console.log)
//     }

//     get query() {
//         return this.searchQuery;
//     }
//     set query(newQuery) {
//         return this.searchQuery = newQuery;
//     }

//     incrementPage() {
//         this.page += 1
//     }

//     resetPage() {
//         this.page = 1
//     }

// }
