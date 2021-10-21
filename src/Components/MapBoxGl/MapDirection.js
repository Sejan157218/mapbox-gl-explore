import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
mapboxgl.accessToken = 'pk.eyJ1Ijoic2VqYW43MDkwIiwiYSI6ImNrdjBxaTJsMTJkZXoybm1wZjc5OW1qMjgifQ.cmX8AAIYafWgd1SfuYeMXA';

const MapDirection = () => {
    useEffect(()=>{
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [90.421485, 23.808805],
            zoom: 14
            });
             
            map.addControl(
            new MapboxDirections({
            accessToken: mapboxgl.accessToken
            }),
            'top-left'
            );
    },[])
    return (
        <div>
            <div id="map"></div>
        </div>
    );
};

export default MapDirection;