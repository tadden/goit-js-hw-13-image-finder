import './sass/main.scss';
import imgTemplate from './templates/img-template.hbs';
import ImagesApiService from './js/apiService';
import getRefs from './js/refs';
import LoadMoreBtn from './js/load-more-btn';

const debounce = require('lodash.debounce')

import { alert, defaultModules } from '@pnotify/core/dist/PNotify.js'
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js'
import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css'
defaultModules.set(PNotifyMobile, {})

// Настройка плагина  PNotify
import { defaults } from '@pnotify/core'
defaults.width = '400px'
defaults.delay = '3000'

const refs = getRefs();

const apiService = new ImagesApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

function onSearch(e) {
  e.preventDefault();
  apiService.query = e.target.value.trim();
  apiService.resetPage();
  
  if (!apiService.query) {
    clearImageContainer();
    return alert('Please input something')
  }

  loadMoreBtn.show();
  loadMoreBtn.disable();

  clearImageContainer();
  apiService.fetchImages().then(rendering).catch(onFetchError)
}

function onLoadMore(e) {
  loadMoreBtn.disable();
  apiService.fetchImages().then(rendering).catch(onFetchError);
  
}

function rendering(img) {
  loadMoreBtn.enable()
    refs.galleryList.insertAdjacentHTML('beforeend', imgTemplate(img));
  }
  
  

function clearImageContainer () {
    refs.galleryList.innerHTML = '';
}


function onFetchError(err) {
  refs.imagesContainer.innerHTML = ''
  loadMoreBtn.hide()
  error({ text: 'Server error \n Please try again later' })
}

loadMoreBtn.refs.button.addEventListener('click', onLoadMore)
refs.searchInput.addEventListener('input', debounce(onSearch, 1000))