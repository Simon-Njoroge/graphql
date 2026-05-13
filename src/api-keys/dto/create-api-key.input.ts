import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateApiKeyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
