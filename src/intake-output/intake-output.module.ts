import { Module } from '@nestjs/common';
import { IntakeOutputService } from './intake-output.service';
import { IntakeOutputResolver } from './intake-output.resolver';

@Module({
  providers: [IntakeOutputResolver, IntakeOutputService],
})
export class IntakeOutputModule {}
