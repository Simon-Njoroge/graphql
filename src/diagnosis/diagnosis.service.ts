import { Injectable } from '@nestjs/common';
import { CreateDiagnosisInput } from './dto/create-diagnosis.input';
import { UpdateDiagnosisInput } from './dto/update-diagnosis.input';

@Injectable()
export class DiagnosisService {
  create(createDiagnosisInput: CreateDiagnosisInput) {
    return 'This action adds a new diagnosis';
  }

  findAll() {
    return `This action returns all diagnosis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} diagnosis`;
  }

  update(id: number, updateDiagnosisInput: UpdateDiagnosisInput) {
    return `This action updates a #${id} diagnosis`;
  }

  remove(id: number) {
    return `This action removes a #${id} diagnosis`;
  }
}
