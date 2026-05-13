import { Injectable } from '@nestjs/common';
import { CreateNurseInput } from './dto/create-nurse.input';
import { UpdateNurseInput } from './dto/update-nurse.input';

@Injectable()
export class NursesService {
  create(createNurseInput: CreateNurseInput) {
    return 'This action adds a new nurse';
  }

  findAll() {
    return `This action returns all nurses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nurse`;
  }

  update(id: number, updateNurseInput: UpdateNurseInput) {
    return `This action updates a #${id} nurse`;
  }

  remove(id: number) {
    return `This action removes a #${id} nurse`;
  }
}
