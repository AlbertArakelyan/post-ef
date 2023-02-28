import { Outlet, Link } from 'react-router-dom';

// Components
import { Button } from '../index';


const UserLayout = () => {
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