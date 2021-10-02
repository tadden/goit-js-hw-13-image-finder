import './sass/main.scss';
import imgTemplate from './templates/img-template.hbs';
import ImagesApiService from './js/apiService';
import getRefs from './js/refs';
// import LoadMoreBtn from './js/load-more-btn';

// const debounce = require('lodash.debounce')

// Подключение плагина  PNotify
// import { alert, notice, info, success, error, defaultModules } from '@pnotify/core/dist/PNotify.js'
// import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
// import '@pnotify/core/dist/PNotify.css'
// import '@pnotify/core/dist/BrightTheme.css'
// defaultModules.set(PNotifyMobile, {})

// // Настройка плагина  PNotify
// import { defaults } from '@pnotify/core'
// defaults.width = '400px'
// defaults.delay = '3000'

const refs = getRefs();

refs.searchBtn.addEventListener('click', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

const imagesApiService = new ImagesApiService()

function onSearch(e) {
  e.preventDefault();
  imagesApiService.query = e.currentTarget.value
  imagesApiService.resetPage();
  imagesApiService.fetchImages().then(rendering);
}

function onLoadMore(e) {
  imagesApiService.fetchImages().then(rendering);
}

function rendering(hits) {
  refs.galleryList.insertAdjacentHTML('beforeend', imgTemplate(hits))
}

