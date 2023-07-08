import { useQuery } from 'react-query';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { getRecipes } from '../contentful/recipes';
import { client } from '../contentful/client';

export const Home = () => {
  const { isLoading, isError, data, error } = useQuery('recipes', getRecipes);
  console.log(data);
  const data2 = client.getEntry('1uV8E2qdY836gMltUwCF5n');
  console.log('me!', data2);
  return (
    <DefaultLayout>
      <h1>Home</h1>
    </DefaultLayout>
  );
};
