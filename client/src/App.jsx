import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

// Pages
import {
  Auth,
  Verify,
  ForgotPassword,
  ResetPassword,
  CreateEditPost,
  Posts,
  Post,
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
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/my-posts" element={<Posts isUser />} />
            <Route path="/create-post" element={<CreateEditPost />} />
            <Route path="/edit-post" element={<CreateEditPost isEdit />} />
          </Route>
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
