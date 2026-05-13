import { CreateBloodBankInput } from './create-blood-bank.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBloodBankInput extends PartialType(CreateBloodBankInput) {
  @Field(() => Int)
  id: number;
}
