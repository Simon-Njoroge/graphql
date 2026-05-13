import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVaccineInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
