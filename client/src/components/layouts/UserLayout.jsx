import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import store from 'store';

// Components
import { Button, DropDown } from '../index';

// Actions
import { logOut } from '../../store/user/user.actions';


const UserLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    store.remove('user');
    store.remove('access_token');
    dispatch(logOut());
  };

  const dropDownContent = (
    <ul className="text-gray-900 normal-case shadow py-2 rounded bg-white w-[200px] hover:cursor-default">
      <li className="mb-2 hover:bg-gray-100 hover:cursor-pointer transition-colors ease-in-out">
        <Link className="px-4 w-full" to="/my-posts">
          My Posts
        </Link>
      </li>
      <li
        className="hover:bg-gray-100 px-4 hover:cursor-pointer transition-colors ease-in-out"
        onClick={handleLogout}
      >
        Log Out
      </li>
    </ul>
  );

  return (
    <>
      <header className="py-4 border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <Link to="/">Post-EF</Link>
            <div className="flex items-center justify-end">
              <Link to="/create-post">
                <Button>
                  Create
                </Button>
              </Link>
              <DropDown
                className="w-[40px] h-[40px] ml-2 bg-secondary rounded-full inline-flex items-center justify-center text-white uppercase hover:cursor-pointer"
                element={dropDownContent}
                positionX="right"
              >
                {user.username.slice(0,1)}
              </DropDown>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-gray-200 py-8 min-h-[calc(100vh-73px)]">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default UserLayout;
