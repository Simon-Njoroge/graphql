import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Radiology {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
