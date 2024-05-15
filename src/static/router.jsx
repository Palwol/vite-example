import HomePage from '@/pages/home';

export const router = [
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
