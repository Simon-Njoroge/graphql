import { CreateKpiInput } from './create-kpi.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateKpiInput extends PartialType(CreateKpiInput) {
  @Field(() => Int)
  id: number;
}
