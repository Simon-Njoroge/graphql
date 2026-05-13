import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProgressNoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
