import { actorById } from './queries/actorById';
import { actorInfoById } from './queries/actorInfoById';
import { actorsByFirstName } from './queries/actorsByFirstName';
import { actorsByLastName } from './queries/actorsByLastName';
import { getActors } from './queries/getActors';
import { date } from './scalars/date';

export const resolvers = {
  Query: {
    actorsByFirstName,
    actorsByLastName,
    actorById,
    getActors,
    actorInfoById,
  },

  Date: date,
};
