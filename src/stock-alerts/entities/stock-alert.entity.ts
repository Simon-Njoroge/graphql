import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class StockAlert {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
