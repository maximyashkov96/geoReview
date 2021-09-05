import { createForm } from "./geoReview";

let myMap;


function initMap() {
    ymaps.ready(() => {
         myMap = new ymaps.Map('map', {
            center: [55.76, 37.64], 
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myMap.clusterer = new ymaps.Clusterer({
            groupByCoordinates: true,
            clusterDisableClickZoom: true,
            clusterOpenBalloonOnClick: false,
        }),
        myMap.events.add('click', function(e) {
            const coords = e.get('coords');
            myMap.balloon.open(coords, createForm(coords).innerHTML);
        });
    });
}

export {
    initMap
}
