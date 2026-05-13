import { CreateImmunizationInput } from './create-immunization.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateImmunizationInput extends PartialType(CreateImmunizationInput) {
  @Field(() => Int)
  id: number;
}
