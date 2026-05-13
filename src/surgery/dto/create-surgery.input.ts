import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSurgeryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
