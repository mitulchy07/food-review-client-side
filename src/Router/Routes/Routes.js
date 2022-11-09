import { createBrowserRouter } from 'react-router-dom';
import AddItem from '../../AddItem/AddItem';
import Blog from '../../Blog/Blog';
import AllFoods from '../../Home/Foods/AllFoods/AllFoods';
import FoodDetails from '../../Home/Foods/FoodDetails/FoodDetails';
import Home from '../../Home/Home';
import Main from '../../layout/Main';
import MyReviews from '../../MyReviews/MyReviews';
import UpdateReview from '../../MyReviews/UpdateReview';
import Login from '../../Pages/Shared/Login/Login';
import Register from '../../Pages/Shared/Login/Register';
import NoData from '../../Pages/Shared/NoData/NoData';
import ReviewWritting from '../../Reviews/ReviewWritting/ReviewWritting';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

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
      {
        path: '/myreviews/:id',
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://server-side-opal-nu.vercel.app/allreviews/${params.id}`
          ),
      },
      {
        path: '/allfoods/:id/reviewwrite',
        element: (
          <PrivateRoute>
            <ReviewWritting></ReviewWritting>
          </PrivateRoute>
        ),
      },
      {
        path: '/additem',
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
      {
        path: '/myreviews',
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NoData></NoData>,
  },
]);

export default router;
