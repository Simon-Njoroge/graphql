import { Injectable } from '@nestjs/common';
import { CreateRadiologyInput } from './dto/create-radiology.input';
import { UpdateRadiologyInput } from './dto/update-radiology.input';

@Injectable()
export class RadiologyService {
  create(createRadiologyInput: CreateRadiologyInput) {
    return 'This action adds a new radiology';
  }

  findAll() {
    return `This action returns all radiology`;
  }

  findOne(id: number) {
    return `This action returns a #${id} radiology`;
  }

  update(id: number, updateRadiologyInput: UpdateRadiologyInput) {
    return `This action updates a #${id} radiology`;
  }

  remove(id: number) {
    return `This action removes a #${id} radiology`;
  }
}
