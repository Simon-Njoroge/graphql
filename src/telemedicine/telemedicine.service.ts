import { Injectable } from '@nestjs/common';
import { CreateTelemedicineInput } from './dto/create-telemedicine.input';
import { UpdateTelemedicineInput } from './dto/update-telemedicine.input';

@Injectable()
export class TelemedicineService {
  create(createTelemedicineInput: CreateTelemedicineInput) {
    return 'This action adds a new telemedicine';
  }

  findAll() {
    return `This action returns all telemedicine`;
  }

  findOne(id: number) {
    return `This action returns a #${id} telemedicine`;
  }

  update(id: number, updateTelemedicineInput: UpdateTelemedicineInput) {
    return `This action updates a #${id} telemedicine`;
  }

  remove(id: number) {
    return `This action removes a #${id} telemedicine`;
  }
}
