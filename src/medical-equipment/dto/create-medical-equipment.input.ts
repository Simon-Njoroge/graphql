import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMedicalEquipmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
