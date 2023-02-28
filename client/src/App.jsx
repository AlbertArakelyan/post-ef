import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

// Pages
import {
  Auth,
  Verify,
  ForgotPassword,
  ResetPassword,
  CreatePost,
} from './pages';

// Components
import { UserLayout } from './components';

// Hooks
import { useAuth } from './hooks';

const App = () => {
  const { accessToken } = useAuth();

  return (
    <div className="App">
      <Routes>
        {!accessToken ? (
          <>
            <Route path="/" element={<Auth />} />
            <Route path="/verify-email/:token" element={<Verify />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
            <Route path="/*" element={<Auth />} />
          </>
        ) : (
          <Route element={<UserLayout />}>
            <Route path="/" element={<div>Posts</div>} />
            <Route path="/create-post" element={<CreatePost />} />
          </Route>
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
