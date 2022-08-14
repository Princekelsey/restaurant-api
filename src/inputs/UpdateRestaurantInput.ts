import { InputType, Field } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@InputType()
export class UpdateRestaurantInput {
  @Field({ nullable: true })
  @Length(1, 255)
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  @IsEmail()
  email?: string;

  @Field({ nullable: true })
  phone?: string;
}
