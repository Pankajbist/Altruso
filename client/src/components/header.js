import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '../../public/Altruso-logo.png';
import Link from 'next/link';

export default function Header() {
  // Assuming you have a way to manage user authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  // Function to handle user login (you can implement your own login mechanism)
  const handleLogin = () => {
    // Assuming the user is successfully logged in and you have their name
    setUserName('John Doe'); // Replace 'John Doe' with the user's name
    setIsAuthenticated(true);
  };

  // Function to handle user logout (you can implement your own logout mechanism)
  const handleLogout = () => {
    // Perform logout process and reset the user's name and authentication status
    setUserName('');
    setIsAuthenticated(false);
  };

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo">
            <Link href="/">
             
                <Image src={Logo} alt="Altruso Logo" />
          
            </Link>
          </div>
          <ul className="nav-menus">
            <li>
              <Link href="/About">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/contact">
                CONTACTUS
              </Link>
            </li>
            {isAuthenticated ? (
              // If the user is authenticated, show the user avatar and logout option
              <>
                <li>
                  <div className="avatar" style={{ marginRight: '10px' }}>
                    {userName.charAt(0)}
                  </div>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              // If the user is not authenticated, show the login and signup links
              <>
                <li>
                  <Link href="/login">
                    LOGIN
                  </Link>
                </li>
                <li>
                  <Link href="/register">
                    SIGNUP
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
