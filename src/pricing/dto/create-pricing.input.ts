import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePricingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
