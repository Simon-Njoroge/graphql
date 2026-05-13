import { CreateAdmissionInput } from './create-admission.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAdmissionInput extends PartialType(CreateAdmissionInput) {
  @Field(() => Int)
  id: number;
}
