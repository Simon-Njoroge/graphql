import { Module } from '@nestjs/common';
import { FinancialReportsService } from './financial-reports.service';
import { FinancialReportsResolver } from './financial-reports.resolver';

@Module({
  providers: [FinancialReportsResolver, FinancialReportsService],
})
export class FinancialReportsModule {}
