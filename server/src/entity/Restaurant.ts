import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import { ObjectType, Field, ID } from "type-graphql";

@Entity("restaurants")
@ObjectType()
export class Restaurant extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({
    nullable: false,
  })
  @Length(1, 255)
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
  @IsEmail()
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
