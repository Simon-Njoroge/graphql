import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class NursingNote {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
