import { CreateNursingNoteInput } from './create-nursing-note.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateNursingNoteInput extends PartialType(CreateNursingNoteInput) {
  @Field(() => Int)
  id: number;
}
