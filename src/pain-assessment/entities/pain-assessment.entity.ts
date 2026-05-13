import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PainAssessment {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
