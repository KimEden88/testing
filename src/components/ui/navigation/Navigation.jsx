import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { getRecipes } from "../../../contentful/recipes";
import { webPaths } from "../../../router/webPaths";
import "./Navigation.css";

export const Navigation = () => {
  const { data } = useQuery("recipes", getRecipes);

  console.log('data:', data)

  return (
    <nav className="navigation">
      <NavLink
        to={webPaths.home}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={webPaths.temp}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Temp
      </NavLink>
      {data && data.items.map((recipe) => (
        <NavLink
          key={recipe.sys.id}
          to={`/recipes/${recipe.sys.id}`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {recipe.fields.title}
        </NavLink>
      ))}
    </nav>
  );
};
