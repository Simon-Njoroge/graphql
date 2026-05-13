import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePurchaseOrderInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
