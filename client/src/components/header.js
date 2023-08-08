import React, { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Avatar, Drawer, Button } from 'antd';
import { 
  LogoutOutlined, 
  UserOutlined,
   SettingOutlined, 
   QuestionCircleOutlined,
    MessageOutlined,
     DesktopOutlined
     } from '@ant-design/icons'; // Import icons
import { CustomLogo } from './logo';
import Image from 'next/image';
import {handleLogout} from '../redux/reducerSlice/users'
import Logo from '../../public/Altruso-logo.png';


export default function Header() {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const router =useRouter()
  const dispatch = useDispatch()
  const userLogout =()=>{
    dispatch(handleLogout())
  }
  const {isLoggedIn, userDetails} = useSelector(state=>state.users)
  const content = (
    <div>
         
      <p onClick={userLogout}>Logout</p>
    </div>
  );

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
          <a onMouseEnter={showDrawer}>
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

          <Drawer
            title={<b style={{  color: 'aqua',fontSize: '1.5rem' }}>{` ${userDetails.fullName}`}</b>}
            placement="right"
            closable={true}
            onClose={hideDrawer}
            visible={isDrawerVisible}
            width={300}
          >
            <b style={{ fontSize: '1.5rem' }}>Your Profile</b>
            <Link href="/settings">
  <p style={{color: "black"}}>
    <SettingOutlined /> <b>Settings & Privacy</b>
  </p>
</Link>
<Link href="/helpSupport">
            <p><QuestionCircleOutlined /> <b>Help & Support</b></p></Link>
            <p><MessageOutlined /> <b>Give Feedback</b></p>
            <p><DesktopOutlined /> <b>Display & Accessibility</b></p>
            <p onClick={userLogout}style={{ color: 'red' }}><LogoutOutlined /> <b>Logout</b></p>
          </Drawer>
       
            </div>  ) : (
        
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
