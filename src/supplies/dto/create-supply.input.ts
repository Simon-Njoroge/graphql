import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSupplyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
