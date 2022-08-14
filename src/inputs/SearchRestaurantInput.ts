import { InputType, Field } from "type-graphql";
import { PaginationInput } from "./PaginationInput";

@InputType()
export class SearchRestaurantInput extends PaginationInput {
  @Field({ nullable: false })
  searchTerm: string;
}
