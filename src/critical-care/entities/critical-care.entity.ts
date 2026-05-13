import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CriticalCare {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
