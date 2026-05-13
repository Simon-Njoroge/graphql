import { CreateSurgeryInput } from './create-surgery.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSurgeryInput extends PartialType(CreateSurgeryInput) {
  @Field(() => Int)
  id: number;
}
