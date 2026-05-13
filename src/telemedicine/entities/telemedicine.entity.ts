import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Telemedicine {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
