import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { profilePath, loginPath, signUpPath } from 'app/utils';
import Profile from './private/profile';
import Login from './public/login';
import SignUp from './public/sign-up';
import Root from 'app/components/core/root';
import ErrorPage from 'app/components/core/error-page';
import { useAppSelector, selectors } from 'data';

const App = () => {
  const isLoggedIn = useAppSelector(selectors.auth.getIsLoggedIn);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: isLoggedIn
        ? [
            {
              path: profilePath,
              element: <Profile />,
            },
          ]
        : [
            {
              path: loginPath,
              element: <Login />,
            },
            {
              path: signUpPath,
              element: <SignUp />,
            },
          ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
