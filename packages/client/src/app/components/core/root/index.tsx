import { profilePath, loginPath } from 'app/utils';
import { selectors, useAppSelector } from 'data';
import { useEffect } from 'react';
import { Outlet, useNavigate, useMatch } from 'react-router-dom';

const Root = () => {
  const navigate = useNavigate();
  const isRootPath = useMatch('/');
  const isLoggedIn = useAppSelector(selectors.auth.getIsLoggedIn);

  useEffect(() => {
    if (isRootPath) {
      if (isLoggedIn) {
        navigate(profilePath);
      } else {
        navigate(loginPath);
      }
    }
  }, [isLoggedIn, isRootPath]);

  return <Outlet />;
};

export default Root;
