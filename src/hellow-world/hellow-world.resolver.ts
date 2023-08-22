import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HellowWorldResolver {

    @Query(()=> String)
    hellowWorl(): string {
        return 'Hola mundo';
    }
}
