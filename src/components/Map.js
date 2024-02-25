
import React, { useState, useEffect } from "react";
import Map, { NavigationControl, Marker } from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "./Map.css";
// import Navbar from "./Navbar";

function Maps() {
    const [lng , setLng] = useState(76.379997);
    const [lat , setLat] = useState(30.340000);
    const [userLocation, setUserLocation] = useState(null);
    const [showUser2Details, setShowUser2Details] = useState(false);
    const [wantFood, setWantFood] = useState(false);
    const [haveFood, setHaveFood] = useState(false);
    const [wantFoodText, setWantFoodText] = useState("I Want Food");
    const [haveFoodText, setHaveFoodText] = useState("I Have Food");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error getting user location:", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }

    }, []);
                //    console.log(userLocation.latitude)
                //    console.log(userLocation.longitude)
                //    console.log(userLocation.longitude)

    const handleUser2MarkerClick = () => {
        setShowUser2Details(!showUser2Details); 
    };

    const handleWantFoodToggle = () => {
        setWantFood(!wantFood);
        setHaveFood(false);
        setWantFoodText(wantFood ? "I Want Food" : "Off");
    };

    const handleHaveFoodToggle = () => {
        setHaveFood(!haveFood);
        setWantFood(false);
        setHaveFoodText(haveFood ? "I Have Food" : "Off");
    };

    return(
       <>
       <div>
        
           <Map mapboxAccessToken="pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQxYm1hZDkxN2o0MmxvZThxOXN6bm15In0.yZDQTtojsIj9PNPaumSkrg"
        //    <Map mapboxAccessToken="pk.eyJ1IjoidmlzaG51MTM0NSIsImEiOiJjbHQwMmZkNjMwc2xpMmxvZXBtdzBwM3ppIn0.fUvZwkLLejPGBt_9BwPyZQ"
                style={{ width: "80vw", height: "70vh", position:"relative" , left:"11vw " ,borderRadius:"20px",top:"6vh",border:"2px solid #453c3c"}}
                initialViewState={{
                    longitude: lng,
                    latitude: lat,
                    zoom: 10 
                }}
                mapStyle="mapbox://styles/mapbox/streets-v9"
           >
               {userLocation && (
                   <Marker latitude={userLocation.latitude} longitude={userLocation.longitude}>
                       <div style={{ color: 'red' }}></div>
                       <img src={wantFood ? "/redmark.png" : (haveFood ? "/greenmark.png" : "/blackmark.png")} alt="error" className="marker"/>

                   </Marker>
               )}
             
               <Marker latitude={30.322259} longitude={76.387263}>
                   <div style={{ color: 'blue', cursor: 'pointer' }} onClick={handleUser2MarkerClick}>
                    <img src="/greenmark.png" alt="error" className="marker"/>
                   </div>
               </Marker>

               <Marker latitude={30.33612} longitude={76.390712}>
                   <div style={{ color: 'blue', cursor: 'pointer' }} onClick={handleUser2MarkerClick}>
                    <img src="/blackmark.png" alt="error" className="marker"/>
                   </div>
               </Marker>
               <Marker latitude={30.334103} longitude={76.37682}>
                   <div style={{ color: 'blue', cursor: 'pointer' }} onClick={handleUser2MarkerClick}>
                    <img src="/redmark.png" alt="error" className="marker"/>
                   </div>
               </Marker>
               <Marker latitude={30.357551} longitude={76.376571}>
                   <div style={{ color: 'blue', cursor: 'pointer' }} onClick={handleUser2MarkerClick}>
                    <img src="/greenmark.png" alt="error" className="marker"/>
                   </div>
               </Marker>
               <Marker latitude={30.339385} longitude={76.402686}>
                   <div style={{ color: 'blue', cursor: 'pointer' }} onClick={handleUser2MarkerClick}>
                    <img src="/redmark.png" alt="error" className="marker"/>
                   </div>
               </Marker>

               <div style={{ position: 'absolute', right: 0 }}>
                   <NavigationControl />
               </div>
           </Map>
           
            <div className={`user-details ${showUser2Details ? 'show' : ''}`}>
            <div className="list">
               <p>Name: Vishnu</p>
               <p>Contact : 82644-XXXXX</p>
               <p>Food: Dal Rice</p>
               <p>Quantity: 2 people</p>
            </div>

               </div>
           <div className="toggle-menus">
               <button onClick={handleWantFoodToggle} className={`toggle-button ${wantFood ? 'active' : ''}` } id="want">{wantFoodText}</button>
               <button onClick={handleHaveFoodToggle} className={`toggle-button ${haveFood ? 'active' : ''}`} id="have">{haveFoodText}</button>
           </div>
       </div>
       </>
    );
}

export default Maps;
