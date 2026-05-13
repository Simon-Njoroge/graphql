import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Vital {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
