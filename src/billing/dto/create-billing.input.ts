import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBillingInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
