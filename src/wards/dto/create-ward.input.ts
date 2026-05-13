import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWardInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
