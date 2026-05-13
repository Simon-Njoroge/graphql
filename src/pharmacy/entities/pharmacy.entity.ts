import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Pharmacy {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
