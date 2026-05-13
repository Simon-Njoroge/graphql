import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRapidResponseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
