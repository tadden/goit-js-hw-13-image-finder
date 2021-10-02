export default function getRefs() {
  return {
    searchInput: document.querySelector('.search-form'),
    searchBtn : document.querySelector('.search-btn'),
    galleryList: document.querySelector('.gallery js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
  }
}
