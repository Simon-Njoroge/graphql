import { CreateQualityMetricInput } from './create-quality-metric.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateQualityMetricInput extends PartialType(CreateQualityMetricInput) {
  @Field(() => Int)
  id: number;
}
