import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

// Components
import { Input, Button } from '../components';
import { useState } from 'react';

// Actions
import { resetPassword } from '../store/user/user.actions';


const ResetPassword = () => {
  const dispatch = useDispatch();
  const { resetToken } = useParams();

  const [values, setValues] = useState({
    password: '',
    confirmPassword: '',
  });

  const { loading } = useSelector((state) => state.user);

  const handleChange = ({target: { name, value }}) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.password || values.password !== values.confirmPassword || !resetToken) {
      return;
    }

    dispatch(resetPassword({
      resetToken,
      password: values.password,
    }));
  };

  return (
    <div>
      <div className="flex items-center justify-center w-full h-screen">
      <form className="flex flex-col items-start justify-start p-3  w-full max-w-[412px]" onSubmit={handleSubmit}>
        <h2 className="text-xl mx-auto mb-2 text-primary">
          Forgot Password
        </h2>
        <Input
          name="password"
          type="password"
          placeholder="Passowrd"
          className="mb-2"
          onChange={handleChange}
          value={values.password}
        />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          className="mb-2"
          onChange={handleChange}
          value={values.confirmPassword}
        />
        <div className="flex items-center justify-between w-full">
          <Button iconClassName="animate-spin" icon={loading && 'tad-pole'} disabled={loading} type="submit">
            Reset Password
          </Button>
          <Link className="text-sm text-link underline hover:cursor-pointer" to="/">
            Sign In
          </Link>
        </div>
        {/* {forgotPasswordData && (
          <span className="mt-2 text-sm text-center">
            Reset password email has been sent to <span className="text-primary">{forgotPasswordData.email}</span>. Please check your email!
          </span>
        )} */}
      </form>
    </div>
    </div>
  );
};

export default ResetPassword;