/* eslint-disable indent */
import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class UserType {
  @Field(() => String, { name: 'id', nullable: false }) id!: string;
  @Field(() => String, { name: 'firstName', nullable: false })
  firstName!: string;
  @Field(() => String, { name: 'lastName', nullable: false }) lastName!: string;
  @Field(() => String, { name: 'username', nullable: false }) username!: string;
  @Field(() => String, { name: 'email', nullable: false }) email!: string;
  @Field(() => String, { name: 'imageUrl', nullable: true }) imageUrl!: string;
}
