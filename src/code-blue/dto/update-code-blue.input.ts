import { CreateCodeBlueInput } from './create-code-blue.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCodeBlueInput extends PartialType(CreateCodeBlueInput) {
  @Field(() => Int)
  id: number;
}
