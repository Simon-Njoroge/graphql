import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRateLimitingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
