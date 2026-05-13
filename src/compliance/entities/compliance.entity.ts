import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Compliance {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
