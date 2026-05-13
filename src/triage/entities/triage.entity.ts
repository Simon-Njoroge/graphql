import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Triage {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
