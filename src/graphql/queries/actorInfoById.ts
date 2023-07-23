import { ActorInfo } from '../../entities/actorInfo';

export const actorInfoById = async (parent, args) => {
  const result = await ActorInfo.findOne(args.id);

  return result;
};
