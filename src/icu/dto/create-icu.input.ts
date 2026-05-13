import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateIcuInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
