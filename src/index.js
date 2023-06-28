import API from './cat-api';
const markup = document.querySelector('.breed-select');
const catInfoMarkup = document.querySelector('.cat-info');
markup.addEventListener('change', onSelect);
API.fetchBreeds()
    .then((data) => (markup.innerHTML = creatSelect(data)))
    .catch(err => console.log(err));

function creatSelect(arr) {
    return arr.map(({id, name}) => `<option value= ${id}>${name}</option>`)
    .join('')
}

function onSelect(e) {
    const id = e.currentTarget.value;
    
    API.fetchCatByBreed(id)
        .then((data) => (catInfoMarkup.innerHTML = creatCatData(data)))
        .catch(err => console.log(err));
    
}
function creatCatData(arr) {
    console.log(arr);
    return arr.map(({ url, breeds: { description, temperament, name }  }) =>
     `<img src="${url}" alt="${name}">
      <h2>${name}</h2>
      <p>${description}</p>
      <h3>temperament: </h3>
      <p>${temperament}</p>`)
        .join('');
    
}