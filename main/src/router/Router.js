import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from '../app/pages/Login/Login';
import { Register } from '../app/pages/Register/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
