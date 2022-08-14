import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import resolvers from "./resolvers";

async function main() {
  try {
    await AppDataSource.initialize();
    const schema = await buildSchema({ resolvers });
    const server = new ApolloServer({ schema });
    await server.listen(4000);
    console.log("Database connected!");
    console.log("Server has started!");
  } catch (error) {
    console.log(error);
  }
}

main();
