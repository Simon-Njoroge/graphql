import { Module } from '@nestjs/common';
import { VitalsService } from './vitals.service';
import { VitalsResolver } from './vitals.resolver';

@Module({
  providers: [VitalsResolver, VitalsService],
})
export class VitalsModule {}
