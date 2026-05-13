import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Billing {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
