import { CreateCriticalCareInput } from './create-critical-care.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCriticalCareInput extends PartialType(CreateCriticalCareInput) {
  @Field(() => Int)
  id: number;
}
