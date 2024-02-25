import React from 'react';
import './Login.css'; // Import the CSS file for styling

function Login() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="">
        <input type="text" name="username" placeholder="Username" />
        <input type="password" name="password" placeholder="Password" />
        <input type="text" name="text" placeholder="Individual/Restaurant" />
        <input type="submit" value="Login" />
      </form>
      <div className="register-link">
        Don't have an account? <a href="/About">Register</a>
      </div>
    </div>
  );
}

export default Login;