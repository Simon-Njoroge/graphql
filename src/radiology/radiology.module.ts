import { Module } from '@nestjs/common';
import { RadiologyService } from './radiology.service';
import { RadiologyResolver } from './radiology.resolver';

@Module({
  providers: [RadiologyResolver, RadiologyService],
})
export class RadiologyModule {}
