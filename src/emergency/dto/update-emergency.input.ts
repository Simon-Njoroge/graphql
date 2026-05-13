import { CreateEmergencyInput } from './create-emergency.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmergencyInput extends PartialType(CreateEmergencyInput) {
  @Field(() => Int)
  id: number;
}
