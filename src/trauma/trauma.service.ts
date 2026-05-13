import { Injectable } from '@nestjs/common';
import { CreateTraumaInput } from './dto/create-trauma.input';
import { UpdateTraumaInput } from './dto/update-trauma.input';

@Injectable()
export class TraumaService {
  create(createTraumaInput: CreateTraumaInput) {
    return 'This action adds a new trauma';
  }

  findAll() {
    return `This action returns all trauma`;
  }

  findOne(id: number) {
    return `This action returns a #${id} trauma`;
  }

  update(id: number, updateTraumaInput: UpdateTraumaInput) {
    return `This action updates a #${id} trauma`;
  }

  remove(id: number) {
    return `This action removes a #${id} trauma`;
  }
}
