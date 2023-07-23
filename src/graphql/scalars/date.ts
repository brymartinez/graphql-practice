import dayjs from 'dayjs';
import { GraphQLScalarType, Kind } from 'graphql';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.tz.setDefault('utc');

export const date = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (value instanceof Date) {
      return dayjs.tz(value).toISOString();
    }
    throw Error('GraphQL Date Scalar serializer expected a `Date` object');
  },
  parseValue(value) {
    if (typeof value === 'string') {
      return dayjs.tz(value).toDate(); // Convert incoming string to Date
    }
    throw new Error('GraphQL Date Scalar parser expected a `number`');
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      // Convert hard-coded AST string to string and then to Date
      return dayjs.tz(ast.value).toDate();
    }
    // Invalid hard-coded value (not a string)
    return null;
  },
});
