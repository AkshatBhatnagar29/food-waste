import React from "react";
import './App.css'
import Maps from "./components/Map";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import NGO from "./components/NGO";
// import Test from "./components/test/test";
// import Test from "./components/test";
// import Vishnu from "./components/Vishnu";
function App(){
  return(
    <>
    <div className="main">
    {/* <h1 className="heading">hello</h1> */}
    <Navbar/>
    <div className="content">
    <h1>Welcome to Meal Mapper</h1>
    <p><span>Meal Mappers is a platform designed to bridge the gap between those with surplus food and those in need of food. The website utilizes maps and markers to visually represent users and their respective statuses regarding food availability. Below are the guidelines for using the Meal Mappers website effectively:</span>
</p>
<ul>
  <li><span>User Registration:</span>
Users must register with Meal Mappers to access the platform's features</li>
  <li><span>Map Interface:</span>
Red for users in need of food, Green for users with surplus food, and grey for other users.
</li>
  <li><span>Marker Functionality:</span>
On clicking a marker, information about the user, including their name, contact details, and available food items (for donors) or food requirements (for recipients) along with Distance and time from the user will be displayed to show how far they are</li>
  <li><span> Posting Surplus Food:</span>
Donors can post details about surplus food they have available, including type, quantity, expiration date, and pickup/delivery preferences.
Posted surplus food items should be represented by green markers on the map.
</li>
  <li><span>Requesting Food Assistance:</span>
Recipients can submit requests for food assistance, specifying their dietary needs, quantity required, and any other relevant details.
Requests for food assistance should be represented by red markers on the map</li>
  <li><span>Communication Features:</span>
Meal Mappers should facilitate communication between donors and recipients through messaging or contact information provided on user profiles.</li>
</ul>
    </div>
    <div className="forms">

    <Login/>
    <NGO/>
    </div>
    {/* <Test/> */}
    {/* <Vishnu/> */}
      <Maps/>
    </div>
    </>
  )
}

export default App
