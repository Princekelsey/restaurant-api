import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import { RestaurantResolver } from "./resolvers/RestaurantResolver";

async function main() {
  try {
    await AppDataSource.initialize();
    const schema = await buildSchema({ resolvers: [RestaurantResolver] });
    const server = new ApolloServer({ schema });
    await server.listen(5000);
    console.log("Server has started!");
  } catch (error) {
    console.log(error);
  }
}

main();
