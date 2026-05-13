import { CreateFinancialReportInput } from './create-financial-report.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFinancialReportInput extends PartialType(CreateFinancialReportInput) {
  @Field(() => Int)
  id: number;
}
