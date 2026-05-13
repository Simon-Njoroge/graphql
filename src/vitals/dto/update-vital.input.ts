import { CreateVitalInput } from './create-vital.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVitalInput extends PartialType(CreateVitalInput) {
  @Field(() => Int)
  id: number;
}
