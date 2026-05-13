import { Injectable } from '@nestjs/common';
import { CreateFinancialReportInput } from './dto/create-financial-report.input';
import { UpdateFinancialReportInput } from './dto/update-financial-report.input';

@Injectable()
export class FinancialReportsService {
  create(createFinancialReportInput: CreateFinancialReportInput) {
    return 'This action adds a new financialReport';
  }

  findAll() {
    return `This action returns all financialReports`;
  }

  findOne(id: number) {
    return `This action returns a #${id} financialReport`;
  }

  update(id: number, updateFinancialReportInput: UpdateFinancialReportInput) {
    return `This action updates a #${id} financialReport`;
  }

  remove(id: number) {
    return `This action removes a #${id} financialReport`;
  }
}
