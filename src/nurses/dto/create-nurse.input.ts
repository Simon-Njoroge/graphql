import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateNurseInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
