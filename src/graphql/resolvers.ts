import {
  getActor,
  actorsByFirstName,
  actorsByLastName,
  getActors,
} from './queries/actor';
import { getActorInfo } from './queries/actorInfo';
import { getCities, getCity } from './queries/city';
import { getCountries, getCountry } from './queries/country';
import { date } from './scalars/date';

export const resolvers = {
  Query: {
    actorsByFirstName,
    actorsByLastName,
    getActors,
    getActor,
    getActorInfo,
    getCity,
    getCities,
    getCountry,
    getCountries,
  },

  Date: date,
};
