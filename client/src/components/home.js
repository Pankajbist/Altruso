import React from 'react';
import Image from 'next/image';
import Logo from '../../public/Altruso-logo.png';
import Link from 'next/link';
import { Avatar } from 'antd';
import { useSelector } from 'react-redux';

const NavMenu = () => {
  const navLinkStyles = {
    marginLeft: '16px',
    textDecoration: 'none',
    color: 'aqua',
  };

  return (
    <ul className="nav-menus">
      <li>
        <Link href="/Contact"legacyBehavior>
          <a style={navLinkStyles}>Contact-Us</a>
        </Link>
      </li>
      <li>
        <Link href="/About"legacyBehavior>
          <a style={navLinkStyles}>What We Do</a>
        </Link>
      </li>
      {/* Add more navigation links as needed */}
    </ul>
  );
};

const Header = () => {
  const { fullName } = useSelector((state) => state.users);

  

  return (
    <header>
      <div className="container">
        <nav>
          <div className="logo" style={logoStyles}>
            <Link href="/"legacyBehavior>
              <a style={logoLinkStyles} >
                <Image src={Logo} alt="Altruso Logo" />
              </a>
            </Link>
          </div>
          {/* Include the NavMenu component */}
          <NavMenu />
          <div className="user-avatar">
            <Avatar  size="small">
              {fullName ? fullName.charAt(0) : 'U'}
            </Avatar>
            <span style={{ marginLeft: '8px', color: 'aqua' }}>{fullName}</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
