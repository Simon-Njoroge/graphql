import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { QualityMetricsService } from './quality-metrics.service';
import { QualityMetric } from './entities/quality-metric.entity';
import { CreateQualityMetricInput } from './dto/create-quality-metric.input';
import { UpdateQualityMetricInput } from './dto/update-quality-metric.input';

@Resolver(() => QualityMetric)
export class QualityMetricsResolver {
  constructor(private readonly qualityMetricsService: QualityMetricsService) {}

  @Mutation(() => QualityMetric)
  createQualityMetric(@Args('createQualityMetricInput') createQualityMetricInput: CreateQualityMetricInput) {
    return this.qualityMetricsService.create(createQualityMetricInput);
  }

  @Query(() => [QualityMetric], { name: 'qualityMetrics' })
  findAll() {
    return this.qualityMetricsService.findAll();
  }

  @Query(() => QualityMetric, { name: 'qualityMetric' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.qualityMetricsService.findOne(id);
  }

  @Mutation(() => QualityMetric)
  updateQualityMetric(@Args('updateQualityMetricInput') updateQualityMetricInput: UpdateQualityMetricInput) {
    return this.qualityMetricsService.update(updateQualityMetricInput.id, updateQualityMetricInput);
  }

  @Mutation(() => QualityMetric)
  removeQualityMetric(@Args('id', { type: () => Int }) id: number) {
    return this.qualityMetricsService.remove(id);
  }
}
