import { Injectable } from '@nestjs/common';
import { CreateImmunizationInput } from './dto/create-immunization.input';
import { UpdateImmunizationInput } from './dto/update-immunization.input';

@Injectable()
export class ImmunizationsService {
  create(createImmunizationInput: CreateImmunizationInput) {
    return 'This action adds a new immunization';
  }

  findAll() {
    return `This action returns all immunizations`;
  }

  findOne(id: number) {
    return `This action returns a #${id} immunization`;
  }

  update(id: number, updateImmunizationInput: UpdateImmunizationInput) {
    return `This action updates a #${id} immunization`;
  }

  remove(id: number) {
    return `This action removes a #${id} immunization`;
  }
}
