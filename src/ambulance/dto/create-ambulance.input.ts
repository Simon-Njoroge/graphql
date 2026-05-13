import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAmbulanceInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
