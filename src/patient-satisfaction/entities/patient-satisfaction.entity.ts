import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PatientSatisfaction {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
