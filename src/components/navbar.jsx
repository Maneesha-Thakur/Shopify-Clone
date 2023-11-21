import React, { useState } from 'react';
import './Navbar.css'; 
import { Link } from 'react-router-dom';


function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
   
    if (username !== '' && password !== '') {
      setLoggedIn(true);
      setShowLogin(false);
   window.location.href = "https://accounts.shopify.com/lookup?rid=8f57a0fa-e828-49d9-a1d2-48166d2bdac7";
    } else {
      alert('Please enter a valid username and password.');
    }
  };
  

  const handleLogout = () => {
   
    setLoggedIn(false);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const openLoginModal = () => {
    setShowLogin(true);
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <nav className="navbar">
       <img src="data:image/png;base64,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" alt="logo" height={"40px"}style={{borderRadius:"50px"}} />   <p style={{display:"inline",fontSize:"28px",margin:"0px 12px 20px 12px"}}>    </p>
      <div className="logo">
      
        <p style={{ display: "inline", fontSize: "28px", margin: "0px 12px 20px 12px" }}>shopify </p>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="https://www.shopify.com/start"> Solution
          </Link>
        
        </li>
        <li>
         <Link to="https://www.shopify.com/pricing">Pricing</Link>
        </li>
        <li>
         <Link to="https://help.shopify.com/en/">Resources</Link>
        </li>
        <li>
         <Link to="https://www.shopify.com/?utm_source=ExpiredDomainLink&utm_medium=textlink&utm_campaign=breadcrumb">What's new</Link>
        </li>
        <li>
          <a href="#" onClick={openLoginModal}>
            Login
          </a>
        </li>
        <li>
          <a href="https://accounts.shopify.com/store-create?language=en&locale=en&signup_page=https%3A%2F%2Fwww.shopify.com%2F&signup_types%5B%5D=paid_trial_experience&_y=ba9f72f9-c516-419d-a58a-2f28196ae929&_s=98111032-1ac9-4329-bb30-4413a91b406a&_p=118421a4-7ae7-4bae-9a8c-b6f6e91c7745">Start free Trial</a>
        </li>
      </ul>

      {showLogin && (
        <div className="login-modal">
          <div className="login-content">
            <span className="close" onClick={closeLoginModal}>&times;</span>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;