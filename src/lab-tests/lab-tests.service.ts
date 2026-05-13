import { Injectable } from '@nestjs/common';
import { CreateLabTestInput } from './dto/create-lab-test.input';
import { UpdateLabTestInput } from './dto/update-lab-test.input';

@Injectable()
export class LabTestsService {
  create(createLabTestInput: CreateLabTestInput) {
    return 'This action adds a new labTest';
  }

  findAll() {
    return `This action returns all labTests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} labTest`;
  }

  update(id: number, updateLabTestInput: UpdateLabTestInput) {
    return `This action updates a #${id} labTest`;
  }

  remove(id: number) {
    return `This action removes a #${id} labTest`;
  }
}
