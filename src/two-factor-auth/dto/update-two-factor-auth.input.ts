import { CreateTwoFactorAuthInput } from './create-two-factor-auth.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTwoFactorAuthInput extends PartialType(CreateTwoFactorAuthInput) {
  @Field(() => Int)
  id: number;
}
