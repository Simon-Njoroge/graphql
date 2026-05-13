import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ApiKey {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
