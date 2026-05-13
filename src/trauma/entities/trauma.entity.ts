import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Trauma {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
