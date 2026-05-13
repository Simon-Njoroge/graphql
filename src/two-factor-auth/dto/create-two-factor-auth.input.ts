import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTwoFactorAuthInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
