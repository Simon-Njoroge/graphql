import { CreateRefundInput } from './create-refund.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRefundInput extends PartialType(CreateRefundInput) {
  @Field(() => Int)
  id: number;
}
