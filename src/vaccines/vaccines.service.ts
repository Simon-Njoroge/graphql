import { Injectable } from '@nestjs/common';
import { CreateVaccineInput } from './dto/create-vaccine.input';
import { UpdateVaccineInput } from './dto/update-vaccine.input';

@Injectable()
export class VaccinesService {
  create(createVaccineInput: CreateVaccineInput) {
    return 'This action adds a new vaccine';
  }

  findAll() {
    return `This action returns all vaccines`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vaccine`;
  }

  update(id: number, updateVaccineInput: UpdateVaccineInput) {
    return `This action updates a #${id} vaccine`;
  }

  remove(id: number) {
    return `This action removes a #${id} vaccine`;
  }
}
