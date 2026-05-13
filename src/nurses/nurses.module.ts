import { Module } from '@nestjs/common';
import { NursesService } from './nurses.service';
import { NursesResolver } from './nurses.resolver';

@Module({
  providers: [NursesResolver, NursesService],
})
export class NursesModule {}
