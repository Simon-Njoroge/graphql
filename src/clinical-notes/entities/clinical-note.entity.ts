import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ClinicalNote {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
