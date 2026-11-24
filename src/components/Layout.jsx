import {NavLink, Link, Outlet} from 'react-router';
import {useUserContext} from '../hooks/contextHooks';
import {useEffect} from 'react';

const Layout = () => {
  const {user, handleAutoLogin} = useUserContext();

  useEffect(() => {
    handleAutoLogin();
  }, []);

  return (
    <>
      <header>
        <h1>My Media App</h1>
        <nav>
          <ul className="m-0 p-0 list-none bg-gray-800 flex justify-end overflow-hidden">
            <li>
              <NavLink
                to="/"
                className="block text-white text-center p-2 hover:bg-gray-700"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/demo"
                className="block text-white text-center p-2 hover:bg-gray-700"
              >
                Demo
              </NavLink>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink
                    to="/profile"
                    className="block text-white text-center p-2 hover:bg-gray-700"
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/upload"
                    className="block text-white text-center p-2 hover:bg-gray-700"
                  >
                    Upload
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <NavLink
                  to="/login "
                  className="block text-white text-center p-2 hover:bg-gray-700"
                >
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>&copy; student 2026</p>
      </footer>
    </>
  );
};

export default Layout;
