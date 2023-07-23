import { Actor } from '../../entities/actor';

export const getActors = async () => {
  const result = await Actor.find();

  return result;
};
