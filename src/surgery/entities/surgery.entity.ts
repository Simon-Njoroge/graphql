import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Surgery {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
