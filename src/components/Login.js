// import React, { useState } from 'react';
// import './Login.css';
// // import { Link } from 'react-router-dom';
// function Login() {
//   // State variables for username and password
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   // Function to handle login button click
//   const handleLogin = () => {
//     // console.log('Login clicked');
//     // <Link to="/Have.js"></Link>

//     // Add your login logic here
//   };

//   // Function to handle signup button click
//   const handleSignup = () => {
//     console.log('Signup clicked');
//     // Add your signup logic here
//   };

//   return (
//     <div className="login-container">
//       <h2>Register</h2>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Name:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Contact:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Email:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="button" onClick={handleLogin}>I want Food</button>
//         <button type="button" onClick={handleSignup}>I have Food</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React from 'react';
import { useHistory } from 'react-router-dom';
import './Login.css';

function Login() {
  const history = useHistory();

  const handleLogin = () => {
    // Redirect to the "I want food" page
    history.push('/want-food');
  };

  const handleSignup = () => {
    // Redirect to the "I have food" page
    history.push('/have-food');
  };

  return (
    <div className="login-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Name:</label>
          <input type="text" id="username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contact:</label>
          <input type="password" id="password" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <button type="button" onClick={handleLogin}>I want Food</button>
        <button type="button" onClick={handleSignup}>I have Food</button>
      </form>
    </div>
  );
}

export default Login;
