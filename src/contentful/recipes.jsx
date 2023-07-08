import { client } from './client';

export const getRecipes = async () => {
  await client.getEntry('1uV8E2qdY836gMltUwCF5n');
};
