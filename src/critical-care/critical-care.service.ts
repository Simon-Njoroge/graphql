import { Injectable } from '@nestjs/common';
import { CreateCriticalCareInput } from './dto/create-critical-care.input';
import { UpdateCriticalCareInput } from './dto/update-critical-care.input';

@Injectable()
export class CriticalCareService {
  create(createCriticalCareInput: CreateCriticalCareInput) {
    return 'This action adds a new criticalCare';
  }

  findAll() {
    return `This action returns all criticalCare`;
  }

  findOne(id: number) {
    return `This action returns a #${id} criticalCare`;
  }

  update(id: number, updateCriticalCareInput: UpdateCriticalCareInput) {
    return `This action updates a #${id} criticalCare`;
  }

  remove(id: number) {
    return `This action removes a #${id} criticalCare`;
  }
}
