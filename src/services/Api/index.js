
export function getServiceBaseUrl(){
    return 'http://localhost:8082';
}

export function getNewsData(){
    console.log("API: getNewsData");
    const articles = require('./articledata.json');
    /*function successCallback(res) {return res.data};
    function failureCallback(){return Promise.resolve(championsTestData)};
    return axios.get(getServiceBaseUrl()+'/api/public/card/champion/all')
        .then(successCallback, failureCallback);*/
    return articles;
}

export function getSeancesList(){
    console.log("API: getSeancesList");
    const seances = require('./seancesData.json');
    /*function successCallback(res) {return res.data};
    function failureCallback(){return Promise.resolve(championsTestData)};
    return axios.get(getServiceBaseUrl()+'/api/public/card/champion/all')
        .then(successCallback, failureCallback);*/
    //return fetch('data/products.json').then(res => res.json()).then(d => d.data);
    return seances;
}

export function getLudothequeData(){
    console.log("API: getLudothequeData");
    const games = require('./ludothequedata.json');
    return games;
}

export function getInfosFromApiWithPage(currentPage) {
    const url =
        'https://localhost:8082/api/event/all/' +
        currentPage;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
