import { createBrowserRouter } from 'react-router-dom';
import Blog from '../../Blog/Blog';
import AllFoods from '../../Home/Foods/AllFoods/AllFoods';
import FoodDetails from '../../Home/Foods/FoodDetails/FoodDetails';
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
      {
        path: '/allfoods',
        element: <AllFoods></AllFoods>,
      },
      {
        path: '/allfoods/:id',
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`https://server-side-opal-nu.vercel.app/allfoods/${params.id}`),
      },
    ],
  },
]);

export default router;
