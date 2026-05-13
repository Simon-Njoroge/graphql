import { CreateVaccineInput } from './create-vaccine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateVaccineInput extends PartialType(CreateVaccineInput) {
  @Field(() => Int)
  id: number;
}
