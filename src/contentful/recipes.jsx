import { client } from './client';

export const getRecipes = async () => {
  return await client.getEntries({content_type: 'recipe'});
};

export const getRecipe = async (id) => {
  return await client.getEntry(`${id}`);
}
