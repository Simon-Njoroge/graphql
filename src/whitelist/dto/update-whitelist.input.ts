import { CreateWhitelistInput } from './create-whitelist.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateWhitelistInput extends PartialType(CreateWhitelistInput) {
  @Field(() => Int)
  id: number;
}
