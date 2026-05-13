import { CreateMessagingInput } from './create-messaging.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMessagingInput extends PartialType(CreateMessagingInput) {
  @Field(() => Int)
  id: number;
}
