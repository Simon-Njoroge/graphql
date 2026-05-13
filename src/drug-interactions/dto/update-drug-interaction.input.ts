import { CreateDrugInteractionInput } from './create-drug-interaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateDrugInteractionInput extends PartialType(CreateDrugInteractionInput) {
  @Field(() => Int)
  id: number;
}
