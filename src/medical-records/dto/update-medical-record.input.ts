import { CreateMedicalRecordInput } from './create-medical-record.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicalRecordInput extends PartialType(CreateMedicalRecordInput) {
  @Field(() => Int)
  id: number;
}
