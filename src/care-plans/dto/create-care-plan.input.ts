import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCarePlanInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
