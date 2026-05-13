import { CreateMedicalEquipmentInput } from './create-medical-equipment.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMedicalEquipmentInput extends PartialType(CreateMedicalEquipmentInput) {
  @Field(() => Int)
  id: number;
}
