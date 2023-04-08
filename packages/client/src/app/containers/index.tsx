import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getChildrenPaths } from 'app/utils';
import Root from 'app/components/core/root';
import ErrorPage from 'app/components/core/error-page';
import { useAppSelector, selectors } from 'data';
import { useEffect } from 'react';

const App = () => {
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
    fetch('http://localhost:4000');
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
