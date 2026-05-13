import { Injectable } from '@nestjs/common';
import { CreateSurgeryInput } from './dto/create-surgery.input';
import { UpdateSurgeryInput } from './dto/update-surgery.input';

@Injectable()
export class SurgeryService {
  create(createSurgeryInput: CreateSurgeryInput) {
    return 'This action adds a new surgery';
  }

  findAll() {
    return `This action returns all surgery`;
  }

  findOne(id: number) {
    return `This action returns a #${id} surgery`;
  }

  update(id: number, updateSurgeryInput: UpdateSurgeryInput) {
    return `This action updates a #${id} surgery`;
  }

  remove(id: number) {
    return `This action removes a #${id} surgery`;
  }
}
