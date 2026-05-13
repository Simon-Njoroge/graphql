import { CreateTelemedicineInput } from './create-telemedicine.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTelemedicineInput extends PartialType(CreateTelemedicineInput) {
  @Field(() => Int)
  id: number;
}
