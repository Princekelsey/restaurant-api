import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@Entity("restaurants")
@ObjectType()
export class Restaurant extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: string;

  @Field(() => String)
  @Column({
    nullable: false,
  })
  name: string;

  @Field(() => String)
  @Column({
    nullable: false,
  })
  address: string;

  @Field(() => String)
  @Column({
    nullable: false,
  })
  email: string;

  @Field(() => String)
  @Column({
    nullable: false,
  })
  phone: string;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt: Date;
}

@ObjectType()
export class RestaurantPaginatationResponse {
  @Field(() => [Restaurant])
  restaurants: Restaurant[];

  @Field(() => Number)
  totalCount: number;

  @Field(() => Number)
  page: number;

  @Field(() => Number)
  pageSize: number;
}
