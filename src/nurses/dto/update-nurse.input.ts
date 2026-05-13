import { CreateNurseInput } from './create-nurse.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNurseInput extends PartialType(CreateNurseInput) {
  @Field(() => Int)
  id: number;
}
