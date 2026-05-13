import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Whitelist {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
