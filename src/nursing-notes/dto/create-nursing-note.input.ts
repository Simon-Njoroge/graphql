import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNursingNoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
