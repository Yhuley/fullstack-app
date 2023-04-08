import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getChildrenPaths } from 'app/utils';
import Root from 'app/components/core/root';
import ErrorPage from 'app/components/core/error-page';
import { useAppSelector, selectors, useAppDispatch } from 'data';
import { useEffect } from 'react';
import { loginThunk } from 'data/reducers/auth.reducer';

const App = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectors.auth.getIsLoggedIn);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: getChildrenPaths(isLoggedIn),
    },
  ]);

  useEffect(() => {
    dispatch(loginThunk());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
