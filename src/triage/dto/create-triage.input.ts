import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTriageInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
