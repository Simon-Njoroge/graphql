import { Injectable } from '@nestjs/common';
import { CreateWardInput } from './dto/create-ward.input';
import { UpdateWardInput } from './dto/update-ward.input';

@Injectable()
export class WardsService {
  create(createWardInput: CreateWardInput) {
    return 'This action adds a new ward';
  }

  findAll() {
    return `This action returns all wards`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ward`;
  }

  update(id: number, updateWardInput: UpdateWardInput) {
    return `This action updates a #${id} ward`;
  }

  remove(id: number) {
    return `This action removes a #${id} ward`;
  }
}
