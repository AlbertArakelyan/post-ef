import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { verifyEmail } from '../store/user/user.actions';

const Verify = () => {
  const dispatch = useDispatch();
  const { token } = useParams();

  const { isVerificationPassed } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(verifyEmail(token));
  }, []);

  if (isVerificationPassed === null) {
    return (
      <div>
        Verifying...
      </div>
    );
  }

  return (
    <div className="w-full h-full mt-4 flex flex-col items-center justify-center">
      <h2 className={`text-2xl text-${isVerificationPassed === false ? 'primary' : 'danger'}`}>
        {isVerificationPassed === false ? 'Email verification is failed.' : 'Your email is successfully verified.'}
      </h2>
      <Link className="text-sm text-link underline hover:cursor-pointer" to="/">
        Sign In
      </Link>
    </div>
  );
};

export default Verify;