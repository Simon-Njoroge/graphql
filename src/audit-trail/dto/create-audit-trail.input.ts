import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuditTrailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
