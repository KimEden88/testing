import { useQuery } from 'react-query';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { getRecipes } from '../contentful/recipes';

export const Home = () => {
  const { data } = useQuery("recipes", getRecipes);

  return (
    <DefaultLayout>
      <h1>Home</h1>
      {data && data.items.map((recipe) => (
        <h2 key={recipe.sys.id}>{recipe.fields.title}</h2>
      ))}
    </DefaultLayout>
  );
};
