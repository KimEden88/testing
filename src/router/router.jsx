import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Temp } from '../pages/Temp';
import { webPaths } from './webPaths';
import { Error } from '../pages/Error';
import { Animal } from '../pages/Animal';

export const router = createBrowserRouter([
  {
    path: webPaths.home,
    element: <Home />,
  },
  {
    path: webPaths.temp,
    element: <Temp />,
  },
  {
    path: '/animals/:animalSlug',
    element: <Animal />,
  },

  {
    path: '*',
    element: <Error />,
  },
]);
