import { InputType, Field } from "type-graphql";
import { IsEmail, Length } from "class-validator";

@InputType()
export class CreateRestaurantInput {
  @Field({ nullable: false })
  @Length(1, 255)
  name: string;

  @Field({ nullable: false })
  address: string;

  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  phone: string;
}
