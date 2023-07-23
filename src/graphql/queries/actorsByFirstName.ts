import { initialize } from '../../datasource/datasource';
import { Actor } from '../../entities/actor';

export const actorsByFirstName = async (parent, args) => {
  const result = await Actor.findOneBy({ firstName: args.firstName });

  return result;
};
