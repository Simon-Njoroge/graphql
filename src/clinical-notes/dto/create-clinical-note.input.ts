import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClinicalNoteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
