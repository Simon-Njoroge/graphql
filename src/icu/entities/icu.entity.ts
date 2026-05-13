import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Icu {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
