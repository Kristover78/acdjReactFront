import moment from "moment";

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
    let seances = require('./seancesData.json');
    let dtNow = new Date();
    let nextFound = false;
    let cptr = 0;
    const time = "20:00";
    seances.data.map((item) => {
        let momentDt = moment(`${item.date} ${time}`, 'YYYY-MM-DD HH:mm');
        item.date = momentDt.format();
        let currentDt = momentDt.toDate();
        if (currentDt< dtNow){
            item.status = 'Terminée';
        }
        if (currentDt >= dtNow && !nextFound){
            seances = {
                ...seances,
                current: cptr
            }
            nextFound = true;
        }
        cptr ++;
    });
    // T19:00:00.0Z
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
