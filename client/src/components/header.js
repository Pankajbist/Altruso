import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Avatar, Drawer, Button } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'; // Import icons
import { CustomLogo } from './logo';
import Image from 'next/image';
import Logo from '../../public/Altruso-logo.png';

export default function Header() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Get the value of isLoggedIn from useSelector
    const { isLoggedIn } = useSelector((state) => state.users);

    // If the user is logged in, redirect to "http://localhost:3000/profile"
    if (isLoggedIn) {
      router.push('http://localhost:3000/profile');
    }

    // Perform any necessary logout actions here, such as clearing authentication tokens or user data from the state.
  };

  const { isLoggedIn, userDetails } = useSelector((state) => state.users);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const hideDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <nav className="navbar">
      <a className="text-xl font-semibold" href="/">
        <Image src={Logo} alt="Logo" width={200} height={100} />
      </a>

      {isLoggedIn ? (
        <div>
          <a  onMouseEnter={showDrawer} >
            <Avatar
              size="large"
              style={{
                backgroundColor: 'aqua',
                color: '#f56a00',
                marginTop: '3px',
                fontSize: '1.5rem',
                marginRight: '-5px',
                textAlign: 'center',
              }}
            >
              {userDetails.fullName[0]}
            </Avatar>
          </a>

          <Drawer      title=
      
          <b style={{  fontSize: '1.5rem' }}>{"Edit_Your_Profile"}</b>

            placement="right"
            closable={true}
            onClose={hideDrawer}
            visible={isDrawerVisible}
            width={300}
          >
           <b style={{ color: 'aqua', fontSize: '1.5rem' }}>{` ${userDetails.fullName}`}</b>
            <p><b>Settings & Privacy</b></p>
        <p><b>Help & Support</b></p>
        <p><b> Give Feedback</b></p>
        <p><b> Display & Accessibility</b></p>
        <p><b> LogOut</b></p>
          </Drawer>
        </div>
      ) : (
        <ul className="nav-menus">
          <li>
            <a href="/login" className="active">Login</a>
          </li>
          <li>
            <a href="/register" className="active">
              Signup
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
