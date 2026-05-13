import { CreateTriageInput } from './create-triage.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTriageInput extends PartialType(CreateTriageInput) {
  @Field(() => Int)
  id: number;
}
