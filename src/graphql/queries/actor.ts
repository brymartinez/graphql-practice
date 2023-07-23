import { Actor } from '../../entities/actor';

export const actorsByFirstName = async (parent, args) => {
  return Actor.findOneBy({ firstName: args.firstName });
};

export const actorsByLastName = async (parent, args) => {
  return Actor.findOneBy({ lastName: args.lastName });
};

export const getActor = async (parent, args) => {
  return Actor.findOneBy({ id: args.id });
};

export const getActors = async () => {
  return Actor.find();
};
