import { Module } from '@nestjs/common';
import { CriticalCareService } from './critical-care.service';
import { CriticalCareResolver } from './critical-care.resolver';

@Module({
  providers: [CriticalCareResolver, CriticalCareService],
})
export class CriticalCareModule {}
