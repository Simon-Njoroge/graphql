import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Immunization {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
