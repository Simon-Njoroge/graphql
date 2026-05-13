import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TwoFactorAuth {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
