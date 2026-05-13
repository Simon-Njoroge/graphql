import { CreateRateLimitingInput } from './create-rate-limiting.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRateLimitingInput extends PartialType(CreateRateLimitingInput) {
  @Field(() => Int)
  id: number;
}
