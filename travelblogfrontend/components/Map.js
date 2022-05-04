import {useEffect, useRef} from "react";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({longitude, latitude}) => {
    const NEXT_PUBLIC_MAP_API = 'pk.eyJ1IjoibWduZWRrbyIsImEiOiJjbDJyYncycGcwMWxpM2JzM3Y1YXZyOXU1In0.LPJqCBddq8C7TYgeYNYpbg';

    mapboxgl.accessToken = NEXT_PUBLIC_MAP_API;

    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current)
            return;

        if (longitude, latitude) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [longitude, latitude],
                zoom: 5
            })
        }

    }, [longitude, latitude])

    return (
        <div ref={mapContainer} className="map"/>
    )
}

export default Map;
