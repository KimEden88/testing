import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { DefaultLayout } from '../components/layouts/DefaultLayout';
import { getRecipe } from '../contentful/recipes';

export const Recipe = () => {
  const { id } = useParams();

  const {data} = useQuery(['recipe', id], async () => {
    const data = await getRecipe(id)
    return data
  });

  console.log('data:', data)

  return (
    <DefaultLayout>
      <h1>Recipe</h1>
      {data && (
        <h2>{data.fields.title}</h2>
      )}
    </DefaultLayout>
  );
};
