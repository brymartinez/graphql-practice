import { Country } from '../../entities/country';

export const getCountry = async (parent, args) => {
  return Country.findOne({
    where: { id: args.id },
    relations: ['cities'],
  });
};

export const getCountries = async () => {
  return Country.find({ relations: ['cities'] });
};
