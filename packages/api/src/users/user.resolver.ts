import { Arg, Query, Resolver } from 'type-graphql';

import { UserType } from './user-entity';
import { UserService } from './user-service';

const userService = new UserService();

@Resolver(() => UserType)
export class UserResolver {
  @Query(()=> UserType)
  async user(@Arg('id', () => String, { nullable: false }) id: string) {
    const user = await userService.getUser(id);
    return user;
  }
}
