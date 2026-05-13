import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePatientSatisfactionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
