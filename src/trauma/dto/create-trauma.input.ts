import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTraumaInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
