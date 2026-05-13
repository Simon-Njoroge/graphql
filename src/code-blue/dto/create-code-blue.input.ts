import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCodeBlueInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
