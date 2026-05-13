import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Allergy {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
