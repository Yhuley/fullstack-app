import Profile from 'app/containers/private/profile';
import Login from 'app/containers/public/login';
import Registration from 'app/containers/public/registration';
import { Navigate } from 'react-router-dom';
import { loginPath, profilePath, registrationPath } from './paths';

export const getChildrenPaths = (isLoggedIn: boolean) =>
  isLoggedIn
    ? [
        {
          path: profilePath,
          element: <Profile />,
        },
        {
          path: '*',
          element: <Navigate to={profilePath} replace={true} />,
        },
      ]
    : [
        {
          path: loginPath,
          element: <Login />,
        },
        {
          path: registrationPath,
          element: <Registration />,
        },
        {
          path: '*',
          element: <Navigate to={loginPath} replace={true} />,
        },
      ];
