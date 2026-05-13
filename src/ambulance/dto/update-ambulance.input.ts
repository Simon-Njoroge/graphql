import { CreateAmbulanceInput } from './create-ambulance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAmbulanceInput extends PartialType(CreateAmbulanceInput) {
  @Field(() => Int)
  id: number;
}
