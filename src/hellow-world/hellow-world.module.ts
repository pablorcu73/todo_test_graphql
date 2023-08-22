import { Module } from '@nestjs/common';
import { HellowWorldResolver } from './hellow-world.resolver';

@Module({
  providers: [HellowWorldResolver]
})
export class HellowWorldModule {}
