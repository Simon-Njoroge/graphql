import { CreateLabTestInput } from './create-lab-test.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLabTestInput extends PartialType(CreateLabTestInput) {
  @Field(() => Int)
  id: number;
}
