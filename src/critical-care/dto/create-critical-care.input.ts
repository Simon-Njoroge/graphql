import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCriticalCareInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
