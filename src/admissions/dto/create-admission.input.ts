import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAdmissionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
