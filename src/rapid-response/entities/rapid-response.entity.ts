import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RapidResponse {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
