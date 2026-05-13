import { CreateSupplyInput } from './create-supply.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSupplyInput extends PartialType(CreateSupplyInput) {
  @Field(() => Int)
  id: number;
}
