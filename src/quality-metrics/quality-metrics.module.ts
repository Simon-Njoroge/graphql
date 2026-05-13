import { Module } from '@nestjs/common';
import { QualityMetricsService } from './quality-metrics.service';
import { QualityMetricsResolver } from './quality-metrics.resolver';

@Module({
  providers: [QualityMetricsResolver, QualityMetricsService],
})
export class QualityMetricsModule {}
