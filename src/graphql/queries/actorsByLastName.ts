import { Actor } from '../../entities/actor';

export const actorsByLastName = async (parent, args) => {
  const result = await Actor.findOneBy({ lastName: args.lastName });

  return result;
};
