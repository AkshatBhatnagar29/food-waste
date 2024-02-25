import React from 'react';
// import './Login.css'; // Import the CSS file for styling
import "./NGO.css"

function NGO() {
  return (
    <div className="login-container">
      <h2>Connect with NGO</h2>
      <form action="">
        {/* <input type="text" name="username" placeholder="Username" /> */}
        {/* <input type="password" name="password" placeholder="Password" /> */}
        <input type="text" name="Name" placeholder="Name" />
        <input type="text" name="number" placeholder="ph. no." />
        <input type="text" name="Email" placeholder="Email" />
        <input type="text" name="Adress" placeholder="Adress" />
        <input type="submit" value="Register" />
      </form>
      {/* <div className="register-link">
        Don't have an account? <a href="/About">Register</a>
      </div> */}
    </div>
  );
}

export default NGO;