import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePainAssessmentInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
