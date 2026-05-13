import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Specialty {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
