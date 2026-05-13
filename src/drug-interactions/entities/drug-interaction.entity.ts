import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class DrugInteraction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
