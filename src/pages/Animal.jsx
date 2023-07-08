import { useParams } from 'react-router-dom';
import { animals } from '../data/animals';
import { DefaultLayout } from '../components/layouts/DefaultLayout';

export const Animal = () => {
  let { animalSlug } = useParams();
  const animal = animals.find((animal) => animal.slug === animalSlug);
  console.log();
  return <DefaultLayout>{<h1>{animal.title}</h1>}</DefaultLayout>;
};
