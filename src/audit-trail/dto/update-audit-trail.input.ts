import { CreateAuditTrailInput } from './create-audit-trail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateAuditTrailInput extends PartialType(CreateAuditTrailInput) {
  @Field(() => Int)
  id: number;
}
