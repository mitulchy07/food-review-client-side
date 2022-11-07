import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import Home from '../../Home/Home';
import Main from '../../layout/Main';
import Login from '../../Pages/Shared/Login/Login';
import Register from '../../Pages/Shared/Login/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
