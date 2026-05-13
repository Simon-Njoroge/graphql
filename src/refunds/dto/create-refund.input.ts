import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRefundInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
