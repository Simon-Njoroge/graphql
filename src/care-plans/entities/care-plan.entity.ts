import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CarePlan {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
