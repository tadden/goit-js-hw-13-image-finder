import './sass/main.scss';
import ImagesApiService from './js/apiService';
import refs from './js/refs';
import LoadMoreBtn from './js/load-more-btn';
import imageTemplate from './templates/imgTemplate.hbs'


const imagesApiService = new ImagesApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchInput.addEventListener('input', onSearch)


function onSearch(e) {
    // refs.galleryList.innerHTML = ''
    // imagesApiService.resetPage();
    imagesApiService.query = e.target.value;
    imagesApiService.fetchGallery().then(appendImageMarkup)

    // LoadMoreBtn.show()
}

function appendImageMarkup(images) {
       refs.galleryList.insertAdjacentHTML('beforeend', imageTemplate(images));

    }   



// function onFetchError(err) {
//   refs.imagesContainer.innerHTML = ''
//   loadMoreBtn.hide()
//   error({ text: 'Server error \n Please try again later' })
// }