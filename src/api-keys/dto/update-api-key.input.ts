import { CreateApiKeyInput } from './create-api-key.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateApiKeyInput extends PartialType(CreateApiKeyInput) {
  @Field(() => Int)
  id: number;
}
