/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../types/index.d.ts" />.
import legit from 'legit';
import { Arg, Query, Resolver } from 'type-graphql';

@Resolver()
export class EmailCheckResolver {
  @Query(() => Boolean, {
    name: 'emailCheck',
    description: 'Check if the given email is valid',
    nullable: true,
  })
  async emailCheck(@Arg('email', () => String) email: string) {
    try {
      const { isValid } = await legit(email);
      return isValid;
    } catch (error) {
      const err = <Error>error;
      console.error(
        '🚀 ~ file: email-check-resolver.ts ~ line 16 ~ EmailCheckResolver ~ emailCheck ~ err',
        err.message
      );
      return false;
    }
  }
}
