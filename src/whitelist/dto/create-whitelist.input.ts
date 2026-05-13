import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateWhitelistInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
