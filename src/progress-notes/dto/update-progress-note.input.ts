import { CreateProgressNoteInput } from './create-progress-note.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProgressNoteInput extends PartialType(CreateProgressNoteInput) {
  @Field(() => Int)
  id: number;
}
