import About from '@/pages/About';
import Home from '@/pages/Home';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/cityguide',
    element: <About />,  // Replace with CityGuide component when ready
  },
  {
    path: '/business',
    element: <About />,  // Replace with Business component when ready
  },
  {
    path: '/about',
    element: <About />,
  },
]); 