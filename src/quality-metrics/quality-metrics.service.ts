import { Injectable } from '@nestjs/common';
import { CreateQualityMetricInput } from './dto/create-quality-metric.input';
import { UpdateQualityMetricInput } from './dto/update-quality-metric.input';

@Injectable()
export class QualityMetricsService {
  create(createQualityMetricInput: CreateQualityMetricInput) {
    return 'This action adds a new qualityMetric';
  }

  findAll() {
    return `This action returns all qualityMetrics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} qualityMetric`;
  }

  update(id: number, updateQualityMetricInput: UpdateQualityMetricInput) {
    return `This action updates a #${id} qualityMetric`;
  }

  remove(id: number) {
    return `This action removes a #${id} qualityMetric`;
  }
}
