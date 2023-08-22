import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HellowWorldResolver {
  @Query(() => String)
  hellowWorl(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, { name: 'randonNumber' })
  getRandonNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randonFromZeroTo',
    description: 'From zero to argument TO (default 6)',
  })
  // request with argument
  getRandonNumberFromZeroTo(
    @Args('to', { nullable: true, type: () => Int }) to: number = 6,
  ): number {
    return Math.floor(Math.random() * to);
  }
}
