import { Module } from '@nestjs/common';
import { KpiService } from './kpi.service';
import { KpiResolver } from './kpi.resolver';

@Module({
  providers: [KpiResolver, KpiService],
})
export class KpiModule {}
