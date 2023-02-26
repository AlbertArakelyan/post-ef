import { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';

const useAuth = () => {
  const { accessToken, user } = useSelector((state) => state.user);

  useLayoutEffect(() => {
    if (accessToken && !user) {
      // Todo get user when opened after being signed in
    }
  }, []);


  return { accessToken, user };
};

export default useAuth;