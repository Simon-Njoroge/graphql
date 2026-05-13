import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateDrugInteractionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
