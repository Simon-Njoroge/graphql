import { Injectable } from '@nestjs/common';
import { CreateComplianceInput } from './dto/create-compliance.input';
import { UpdateComplianceInput } from './dto/update-compliance.input';

@Injectable()
export class ComplianceService {
  create(createComplianceInput: CreateComplianceInput) {
    return 'This action adds a new compliance';
  }

  findAll() {
    return `This action returns all compliance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} compliance`;
  }

  update(id: number, updateComplianceInput: UpdateComplianceInput) {
    return `This action updates a #${id} compliance`;
  }

  remove(id: number) {
    return `This action removes a #${id} compliance`;
  }
}
