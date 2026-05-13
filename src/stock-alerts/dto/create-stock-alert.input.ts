import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateStockAlertInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
