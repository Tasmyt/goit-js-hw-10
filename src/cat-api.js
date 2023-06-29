

// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_XKa66qKxxyiMOdXAIWhnua9NnnDJ9cM4Ra5gNLnpo1gJEnN0YXAxAqy0CRvdBh9j";

const BASE_URL = `https://api.thecatapi.com/v1`;
const api_key = 'live_XKa66qKxxyiMOdXAIWhnua9NnnDJ9cM4Ra5gNLnpo1gJEnN0YXAxAqy0CRvdBh9j';

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds?api_key=${api_key}`) 
         .then(resp => {
            if (!resp.ok) { throw new Error(resp.statusText) }
            return resp.json()
    })
}
function fetchCatByBreed(id) {
    
    return fetch(`${BASE_URL}/images/search?breed_ids=${id}&api_key=${api_key}`) 
         .then(resp => {
            if (!resp.ok) { throw new Error(resp.statusText) }
            return resp.json()
    })
    
};
export default {
    fetchBreeds,
    fetchCatByBreed
};


