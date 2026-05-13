import { CreateClinicalNoteInput } from './create-clinical-note.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClinicalNoteInput extends PartialType(CreateClinicalNoteInput) {
  @Field(() => Int)
  id: number;
}
