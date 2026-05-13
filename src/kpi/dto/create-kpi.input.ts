import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateKpiInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
