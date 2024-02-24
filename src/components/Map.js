
import React, { useState } from "react";
import Map, { NavigationControl } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from "react-map-gl";
import "./Map.css"

function Maps(){
    const [lng , setLng] = useState(76.379997)
    const [lat , setLat] = useState(30.340000)

    return(
       <>
       <div>
           <Map mapboxAccessToken="pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQwMmZkNjMwc2xpMmxvZXBtdzBwM3ppIn0.fUvZwkLLejPGBt_9BwPyZQ"
                style={{ width: "100vw", height: "100vh" }}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 10 // Adding zoom level to have a better view of the marker
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
           >
               <Marker latitude={lat} longitude={lng} />
               <div style={{ position: 'absolute', right: 0 }}>
                   <NavigationControl />
               </div>
           </Map>
       </div>
       </>
    )
}

export default Maps;

/*
import React, { useState } from "react";
import Map, { NavigationControl } from "react-map-gl"
import 'mapbox-gl/dist/mapbox-gl.css'
import { Marker } from "react-map-gl";
import "./Map.css"
import mapboxgl from "mapbox-gl";
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

function Maps(){
    const [lng , setLng] = useState(76.379997)
    const [lat , setLat] = useState(30.340000)

    // Initialize the Mapbox directions object
    mapboxgl.accessToken = 'pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQwMmZkNjMwc2xpMmxvZXBtdzBwM3ppIn0.fUvZwkLLejPGBt_9BwPyZQ';
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    });

    return(
       <>
       <div>
           <Map mapboxApiAccessToken={mapboxgl.accessToken}
                style={{ width: "100%", height: "100vh" }}
                center={[lng, lat]}
                zoom={10}
           >
               <Marker latitude={lat} longitude={lng} />
               <div style={{ position: 'absolute', top: 10, right: 10 }}>
                   <NavigationControl />
               </div>
               <div id="directions" style={{ position: 'absolute', top: 10, left: 10, maxWidth: '400px' }}></div>
           </Map>
       </div>
       </>
    )
}

export default Maps;

*/