export default function getRefs() {
  return {
    searchInput: document.querySelector('.search-form'),
    galleryList: document.querySelector('.js-gallery'),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
  }
}
