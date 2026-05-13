import { CreateCarePlanInput } from './create-care-plan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCarePlanInput extends PartialType(CreateCarePlanInput) {
  @Field(() => Int)
  id: number;
}
