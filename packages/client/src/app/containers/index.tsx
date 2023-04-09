import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { getChildrenPaths } from 'app/utils';
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
      children: getChildrenPaths(isLoggedIn),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
