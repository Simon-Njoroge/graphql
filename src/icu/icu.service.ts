import { Injectable } from '@nestjs/common';
import { CreateIcuInput } from './dto/create-icu.input';
import { UpdateIcuInput } from './dto/update-icu.input';

@Injectable()
export class IcuService {
  create(createIcuInput: CreateIcuInput) {
    return 'This action adds a new icu';
  }

  findAll() {
    return `This action returns all icu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} icu`;
  }

  update(id: number, updateIcuInput: UpdateIcuInput) {
    return `This action updates a #${id} icu`;
  }

  remove(id: number) {
    return `This action removes a #${id} icu`;
  }
}
