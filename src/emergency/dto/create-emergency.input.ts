import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmergencyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
