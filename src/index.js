import './sass/main.scss';
// import ImagesApiService from './js/apiService';
// import getRefs from './js/refs';
// import LoadMoreBtn from './js/load-more-btn';
// import imageTemplate from './templates/imgTemplate.hbs';

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

const refs = {
  searchInput: document.querySelector('.search-form'),
  searchBtn: document.querySelector('.search-btn'),
  galleryList: document.querySelector('.gallery js-gallery'),
};


refs.searchBtn.addEventListener('submit', onSearch)


function onSearch(e) {
  e.preventDefault();
  console.log("hello!")  
}
// fetch('https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=23635277-6f81df1acb0b4fe12e608e34f')
//     .then(response => response.json())
//     .then(console.log);