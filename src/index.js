import './css/styles.css';
import API from './cat-api';
const markup = document.querySelector('.breed-select');
const catInfoMarkup = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const errInfo = document.querySelector('.error');
markup.classList.add('hidden');
errInfo.classList.add('hidden');

console.log('hello');

markup.addEventListener('change', onSelect);
API.fetchBreeds()
    .then((data) => (markup.innerHTML = creatSelect(data)))
    .then(() => {
        markup.classList.remove('hidden');
        loader.classList.add('hidden')
    })
    .catch(() => ifCatch());

function creatSelect(arr) {
    return arr.map(({id, name}) => `<option value= ${id}>${name}</option>`)
    .join('')
}

function onSelect(e) {
    const id = e.currentTarget.value;
    loader.classList.remove('hidden');
    API.fetchCatByBreed(id)
        .then((data) => (catInfoMarkup.innerHTML = creatCatData(data)))
        .then(() => loader.classList.add('hidden'))
        .catch(() => ifCatch());
    
}
function creatCatData(arr) {
    
    return arr.map(({ url, breeds: {[0]: { description, temperament, name }}}) =>
        `<img src="${url}" class="image" "alt="${name}">
      <h2>${name}</h2>
      <p>${description}</p>
      <h3>Temperament: </h3>
      <p>${temperament}</p>`)
        .join('');
}

function ifCatch() {
    errInfo.classList.remove('hidden');
    loader.classList.add('hidden')
}
