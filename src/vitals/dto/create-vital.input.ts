import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateVitalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
