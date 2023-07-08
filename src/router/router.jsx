import { createBrowserRouter } from 'react-router-dom';
import { Animal } from '../pages/Animal';
import { Error } from '../pages/Error';
import { Home } from '../pages/Home';
import { Recipe } from '../pages/Recipe';
import { Temp } from '../pages/Temp';
import { webPaths } from './webPaths';

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
    path: '/recipes/:id',
    element: <Recipe />,
  },

  {
    path: '*',
    element: <Error />,
  },
]);
