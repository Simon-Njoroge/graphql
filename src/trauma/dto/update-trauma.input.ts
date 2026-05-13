import { CreateTraumaInput } from './create-trauma.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTraumaInput extends PartialType(CreateTraumaInput) {
  @Field(() => Int)
  id: number;
}
