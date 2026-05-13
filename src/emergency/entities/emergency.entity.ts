import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Emergency {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
