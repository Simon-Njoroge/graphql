import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FinancialReportsService } from './financial-reports.service';
import { FinancialReport } from './entities/financial-report.entity';
import { CreateFinancialReportInput } from './dto/create-financial-report.input';
import { UpdateFinancialReportInput } from './dto/update-financial-report.input';

@Resolver(() => FinancialReport)
export class FinancialReportsResolver {
  constructor(private readonly financialReportsService: FinancialReportsService) {}

  @Mutation(() => FinancialReport)
  createFinancialReport(@Args('createFinancialReportInput') createFinancialReportInput: CreateFinancialReportInput) {
    return this.financialReportsService.create(createFinancialReportInput);
  }

  @Query(() => [FinancialReport], { name: 'financialReports' })
  findAll() {
    return this.financialReportsService.findAll();
  }

  @Query(() => FinancialReport, { name: 'financialReport' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.financialReportsService.findOne(id);
  }

  @Mutation(() => FinancialReport)
  updateFinancialReport(@Args('updateFinancialReportInput') updateFinancialReportInput: UpdateFinancialReportInput) {
    return this.financialReportsService.update(updateFinancialReportInput.id, updateFinancialReportInput);
  }

  @Mutation(() => FinancialReport)
  removeFinancialReport(@Args('id', { type: () => Int }) id: number) {
    return this.financialReportsService.remove(id);
  }
}
