import HomePage from '@/pages/home';
import {createBrowserRouter} from 'react-router-dom';

const routerList = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/notice',
    element: <div>Notice</div>,
  },
  {
    path: '/mypage',
    element: <div>MY Page</div>,
  },
  {
    path: '/login',
    element: <div>Login</div>,
  },
  {
    path: '/cart',
    element: <div>Cart</div>,
  },
];

export const router = createBrowserRouter(routerList);
