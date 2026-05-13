import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateImmunizationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
