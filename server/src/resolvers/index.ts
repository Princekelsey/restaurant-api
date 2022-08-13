import { NonEmptyArray } from "type-graphql";
import { RestaurantResolver } from "./RestaurantResolver";

const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  RestaurantResolver,
];

export default resolvers;
