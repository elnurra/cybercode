import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../app/pages/Login/Login';
import { Register } from '../app/pages/Register/Register';
import Statistic from '../app/pages/Statistic/Statistic';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/statistic',
    element: <Statistic />,
  },
]);

export default router;
