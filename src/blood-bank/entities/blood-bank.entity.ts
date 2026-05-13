import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class BloodBank {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
