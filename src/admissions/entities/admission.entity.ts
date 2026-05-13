import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Admission {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
