import { City } from '../../entities/city';

export const getCity = async (parent, args) => {
  return City.findOne({
    where: { id: args.id },
    relations: ['country'],
  });
};

export const getCities = async () => {
  return City.find({ relations: ['country'] });
};
