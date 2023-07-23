import { Actor } from '../../entities/actor';

export const actorById = async (parent, args) => {
  const result = await Actor.findOne(args.id);

  return result;
};
