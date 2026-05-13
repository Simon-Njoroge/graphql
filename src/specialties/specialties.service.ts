import { Injectable } from '@nestjs/common';
import { CreateSpecialtyInput } from './dto/create-specialty.input';
import { UpdateSpecialtyInput } from './dto/update-specialty.input';

@Injectable()
export class SpecialtiesService {
  create(createSpecialtyInput: CreateSpecialtyInput) {
    return 'This action adds a new specialty';
  }

  findAll() {
    return `This action returns all specialties`;
  }

  findOne(id: number) {
    return `This action returns a #${id} specialty`;
  }

  update(id: number, updateSpecialtyInput: UpdateSpecialtyInput) {
    return `This action updates a #${id} specialty`;
  }

  remove(id: number) {
    return `This action removes a #${id} specialty`;
  }
}
