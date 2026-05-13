import { CreateIntakeOutputInput } from './create-intake-output.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIntakeOutputInput extends PartialType(CreateIntakeOutputInput) {
  @Field(() => Int)
  id: number;
}
