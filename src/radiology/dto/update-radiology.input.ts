import { CreateRadiologyInput } from './create-radiology.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRadiologyInput extends PartialType(CreateRadiologyInput) {
  @Field(() => Int)
  id: number;
}
