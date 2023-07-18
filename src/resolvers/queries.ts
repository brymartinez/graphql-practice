import { DataService } from "../datasource/datasource";
import { Actor } from "../entities/actor";

const ds = new DataService().dataSource;


export const resolvers = {
  Query: {
    actorByFirstName: async (parent, args) => {
      console.log('Created');
      await ds.initialize();
      
      const repository = ds.manager.getRepository(Actor);

      console.log('Repository created');

      console.log(ds.entityMetadatas);

      const result = await repository.findOneBy({ firstName: args.firstName });

      console.log('Results found');

      return result;
    }
  }
}
