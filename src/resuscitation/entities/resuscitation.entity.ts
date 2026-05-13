import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Resuscitation {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
