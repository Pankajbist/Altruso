import { Avatar, Space, Popover } from 'antd';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import CustomLogo from './logo';

function NavBar() {
  const router = useRouter();
  const { isLoggedIn, userDetails } = useSelector(state => state.users);

  const handleLogout = () => {
    router.push('/profile');
  };

  const content = (
    <div>
      <Link href="/profile"legacyBehavior>
        <a>Profile</a>
      </Link>
      <p onClick={handleLogout}>Logout</p>
    </div>
  );

  return (
    <header>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/"legacyBehavior>
              <a>
                <CustomLogo />
              </a>
            </Link>
          </div>

          {isLoggedIn ? (
            <div>
              <Popover
                placement="bottom"
                title={userDetails.fullName}
                content={content}
                trigger="click"
                overlayClassName="avatar-popover" // Apply specific styling for Popover
              >
                <Avatar size="large" className="user-avatar">
                  {userDetails.fullName[0]}
                </Avatar>
              </Popover>
            </div>
          ) : (
            <ul className="nav-menus"legacyBehavior>
              <li>
                <Link href="/login"legacyBehavior>
                  <a>Login</a>
                </Link>
              </li>
              <li>
                <Link href="/register"legacyBehavior>
                  <a className="active">Signup</a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <style jsx>{`
        /* Navbar container */
        .nav-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #f0f0f0;
        }

        /* Logo */
        .logo a {
          text-decoration: none;
          color: #000;
          font-weight: bold;
          font-size: 1.5rem;
        }

        /* Logo image */
        .logo img {
          width: 40px;
          height: 40px;
        }

        /* Nav menus for logged-out users */
        .nav-menus {
          list-style: none;
          display: flex;
        }

        .nav-menus li {
          margin-right: 1rem;
        }

        .nav-menus a {
          text-decoration: none;
          color: #000;
          padding: 0.5rem 1rem;
          border-radius: 5px;
        }

        /* Active menu item */
        .nav-menus a.active {
          background-color: #007bff;
          color: #fff;
        }

        /* User Avatar */
        .user-avatar {
          cursor: pointer;
        }

        /* Popover content */
        .avatar-popover {
          padding: 1rem;
        }

        .avatar-popover a {
          display: block;
          margin-bottom: 0.5rem;
          color: #000;
          text-decoration: none;
        }

        .avatar-popover p {
          cursor: pointer;
          color: #007bff;
          margin: 0;
        }

        /* Responsive design */
        @media (max-width: 768px) {
          .nav-container {
            flex-direction: column;
          }

          .logo {
            margin-bottom: 1rem;
          }

          .nav-menus {
            margin-top: 1rem;
          }

          .nav-menus li {
            margin-right: 0.5rem;
          }

          .user-avatar {
            margin-top: 1rem;
          }
        }
      `}</style>
    </header>
  );
}

export default NavBar;
