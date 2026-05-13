import { CreateWardInput } from './create-ward.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWardInput extends PartialType(CreateWardInput) {
  @Field(() => Int)
  id: number;
}
