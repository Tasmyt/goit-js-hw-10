!function(){var e="https://api.thecatapi.com/v1",n="live_XKa66qKxxyiMOdXAIWhnua9NnnDJ9cM4Ra5gNLnpo1gJEnN0YXAxAqy0CRvdBh9j";var t={fetchBreeds:function(){return fetch("".concat(e,"/breeds?api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))},fetchCatByBreed:function(t){return fetch("".concat(e,"/images/search?breed_ids=").concat(t,"&api_key=").concat(n)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()}))}},c=document.querySelector(".breed-select"),r=document.querySelector(".cat-info"),a=document.querySelector(".loader"),o=document.querySelector(".error");function i(){o.classList.remove("hidden"),a.classList.add("hidden")}c.classList.add("hidden"),o.classList.add("hidden"),console.log("hello"),c.addEventListener("change",(function(e){var n=e.currentTarget.value;a.classList.remove("hidden"),t.fetchCatByBreed(n).then((function(e){return r.innerHTML=e.map((function(e){var n=e.url,t=e.breeds[0],c=t.description,r=t.temperament,a=t.name;return'<img src="'.concat(n,'" class="image" "alt="').concat(a,'">\n      <h2>').concat(a,"</h2>\n      <p>").concat(c,"</p>\n      <h3>Temperament: </h3>\n      <p>").concat(r,"</p>")})).join("")})).then((function(){return a.classList.add("hidden")})).catch((function(){return i()}))})),t.fetchBreeds().then((function(e){return c.innerHTML=e.map((function(e){var n=e.id,t=e.name;return"<option value= ".concat(n,">").concat(t,"</option>")})).join("")})).then((function(){c.classList.remove("hidden"),a.classList.add("hidden")})).catch((function(){return i()}))}();
//# sourceMappingURL=index.c421e27d.js.map