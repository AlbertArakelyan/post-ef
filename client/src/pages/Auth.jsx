import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Input, Button } from '../components';

// Actions
import { signUp, signIn } from '../store/user/user.actions';


const initialValues = {
  username: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  email: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  password: {
    value: '',
    isTouched: false,
    isValid: false,
  },
  confirmPassword: {
    value: '',
    isTouched: false,
    isValid: false,
  },
};

const Auth = () => {
  const dispatch = useDispatch();

  const { loading, verificationData } = useSelector((state) => state.user);

  const [isSugnUp, setIsSignUp] = useState(false);
  const [values, setValues] = useState(initialValues);

  const handleChange = ({target: { name, value }}) => {
    setValues((prevValues) => {
      return {
        ...prevValues,
        [name]: {
          ...prevValues[name],
          isTouched: true,
          isValid: !!value, // TODO add validators
          value,
        }
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInvalid = Object.values(values).some((value) => !value.isValid);
    if (isSugnUp && isInvalid) {
      alert('Please fill all fields'); // TODO make pretty alert
      return;
    }

    if (isSugnUp) {
      dispatch(signUp({
        username: values.username.value,
        email: values.email.value,
        password: values.password.value,
      }));
    } else {
      dispatch(signIn({
        email: values.email.value,
        password: values.password.value,
      }));
    }
  };

  const handleChangeAuthMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <form className="flex flex-col items-start justify-start p-3  w-full max-w-[412px]" onSubmit={handleSubmit}>
        <h2 className="text-xl mx-auto mb-2 text-primary">
          Sign {isSugnUp ? 'Up' : 'In'}
        </h2>
        {isSugnUp && (
          <Input
            name="username"
            placeholder="Username"
            className="mb-2"
            onChange={handleChange}
          />
        )}
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          className="mb-2"
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="Password"
          className="mb-2"
          type="password"
          onChange={handleChange}
        />
        {isSugnUp && (
          <Input  
            name="confirmPassword"
            placeholder="Confirm password"
            className="mb-2"
            type="password"
            onChange={handleChange}
          />
        )}
        <div className="flex items-center justify-between w-full">
          <Button iconClassName="animate-spin" icon={loading && 'tad-pole'} disabled={loading} type="submit">
            Sign {isSugnUp ? 'Up' : 'In'}
          </Button>
          <div className="flex flex-col items-end justify-end">
            <span className="text-sm text-link underline hover:cursor-pointer" onClick={handleChangeAuthMode}>
              {isSugnUp ? 'Already have an acoount? Sign In' : 'Don\'t have an account? Sign Up'}
            </span>
            <span className="text-sm text-link underline hover:cursor-pointer">
              Forgot password?
            </span>
          </div>
        </div>
        {verificationData && (
          <span className="mt-2 text-sm text-center">
            Verification email has been send to <span className="text-primary">{verificationData.email}</span>. Please check you email!
          </span>
        )}
      </form>
    </div>
  );
};

export default Auth;