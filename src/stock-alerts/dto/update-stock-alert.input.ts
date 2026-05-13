import { CreateStockAlertInput } from './create-stock-alert.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateStockAlertInput extends PartialType(CreateStockAlertInput) {
  @Field(() => Int)
  id: number;
}
