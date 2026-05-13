import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FinancialReport {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
