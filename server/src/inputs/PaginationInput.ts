import { InputType, Field } from "type-graphql";

@InputType()
export class PaginationInput {
  @Field({ nullable: false })
  page: number;

  @Field({ nullable: false })
  pageSize: number;
}
