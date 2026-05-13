import { CreateIcuInput } from './create-icu.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateIcuInput extends PartialType(CreateIcuInput) {
  @Field(() => Int)
  id: number;
}
