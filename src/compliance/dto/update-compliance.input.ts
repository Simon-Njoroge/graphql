import { CreateComplianceInput } from './create-compliance.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateComplianceInput extends PartialType(CreateComplianceInput) {
  @Field(() => Int)
  id: number;
}
