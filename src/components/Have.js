import React from "react";
import './App.css'
import Maps from "./components/Map";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";
// import Test from "./components/test/test";
// import Test from "./components/test";
// import Vishnu from "./components/Vishnu";
function Have(){
  return(
    <>
    <div className="main">
    {/* <Login/> */}
    {/* <h1 className="heading">hello</h1> */}
    <Navbar/>
    {/* <Test/> */}
    {/* <Vishnu/> */}
      <Maps/>
    </div>
    </>
  )
}

export default Have