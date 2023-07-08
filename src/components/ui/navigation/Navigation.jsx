import { NavLink } from 'react-router-dom';
import './Navigation.css';
import { webPaths } from '../../../router/webPaths';
import { animals } from '../../../data/animals';

export const Navigation = () => {
  return (
    <>
      <NavLink
        to={webPaths.home}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Home
      </NavLink>
      <NavLink
        to={webPaths.temp}
        className={({ isActive, isPending }) =>
          isPending ? 'pending' : isActive ? 'active' : ''
        }
      >
        Temp
      </NavLink>
      {animals.map((animal) => (
        <NavLink
          key={animal.id}
          to={`/animals/${animal.slug}`}
          className={({ isActive, isPending }) =>
            isPending ? 'pending' : isActive ? 'active' : ''
          }
        >
          {animal.slug}
        </NavLink>
      ))}
    </>
  );
};
