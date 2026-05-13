import { CreatePatientSatisfactionInput } from './create-patient-satisfaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePatientSatisfactionInput extends PartialType(CreatePatientSatisfactionInput) {
  @Field(() => Int)
  id: number;
}
