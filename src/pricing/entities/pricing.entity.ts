import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pricing {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
