import { Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'

// Pages
import {
  Auth,
  Verify,
  ForgotPassword,
  ResetPassword
} from './pages';

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
          <Route path="/" element={<div>logged in</div>} />
        )}
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
