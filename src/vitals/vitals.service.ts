import { Injectable } from '@nestjs/common';
import { CreateVitalInput } from './dto/create-vital.input';
import { UpdateVitalInput } from './dto/update-vital.input';

@Injectable()
export class VitalsService {
  create(createVitalInput: CreateVitalInput) {
    return 'This action adds a new vital';
  }

  findAll() {
    return `This action returns all vitals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vital`;
  }

  update(id: number, updateVitalInput: UpdateVitalInput) {
    return `This action updates a #${id} vital`;
  }

  remove(id: number) {
    return `This action removes a #${id} vital`;
  }
}
