import { ActorInfo } from '../../entities/actorInfo';

export const getActorInfo = async (parent, args) => {
  return ActorInfo.findOneBy({ id: args.id });
};
