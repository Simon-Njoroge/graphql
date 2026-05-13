import { CreateResuscitationInput } from './create-resuscitation.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateResuscitationInput extends PartialType(CreateResuscitationInput) {
  @Field(() => Int)
  id: number;
}
