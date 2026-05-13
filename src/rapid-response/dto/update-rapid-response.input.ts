import { CreateRapidResponseInput } from './create-rapid-response.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRapidResponseInput extends PartialType(CreateRapidResponseInput) {
  @Field(() => Int)
  id: number;
}
