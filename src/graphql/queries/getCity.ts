import { City } from '../../entities/city';

export const getCity = async (parent, args) => {
  const result = await City.findOne({
    where: { id: args.id },
    relations: ['country'],
  });

  return result;
};
