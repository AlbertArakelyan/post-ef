import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 

// Components
import { Input, Button } from '../components';

// Actions
import { forgotPassword } from '../store/user/user.actions';


const ForgotPassword = () => {
  const dispatch = useDispatch();

  const { loading, forgotPasswordData } = useSelector((state) => state.user);

  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      return alert('Please fill the email correctly.');
    }

    dispatch(forgotPassword({ email }));
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="flex flex-col items-start justify-start p-3  w-full max-w-[412px]" onSubmit={handleSubmit}>
        <h2 className="text-xl mx-auto mb-2 text-primary">
          Forgot Password
        </h2>
        <Input
          name="forgot-password"
          type="email"
          className="mb-2"
          value={email}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between w-full">
          <Button iconClassName="animate-spin" icon={loading && 'tad-pole'} disabled={loading} type="submit">
            Send email
          </Button>
          <Link className="text-sm text-link underline hover:cursor-pointer" to="/">
            Sign In
          </Link>
        </div>
        {forgotPasswordData && (
          <span className="mt-2 text-sm text-center">
            Reset password email has been sent to <span className="text-primary">{forgotPasswordData.email}</span>. Please check your email!
          </span>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;