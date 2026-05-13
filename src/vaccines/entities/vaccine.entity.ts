import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Vaccine {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
