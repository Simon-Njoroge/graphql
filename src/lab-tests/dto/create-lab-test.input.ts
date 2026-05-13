import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLabTestInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
