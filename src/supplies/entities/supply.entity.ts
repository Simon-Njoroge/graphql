import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Supply {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
