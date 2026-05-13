import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class QualityMetric {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
