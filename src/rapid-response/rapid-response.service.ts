import { Injectable } from '@nestjs/common';
import { CreateRapidResponseInput } from './dto/create-rapid-response.input';
import { UpdateRapidResponseInput } from './dto/update-rapid-response.input';

@Injectable()
export class RapidResponseService {
  create(createRapidResponseInput: CreateRapidResponseInput) {
    return 'This action adds a new rapidResponse';
  }

  findAll() {
    return `This action returns all rapidResponse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} rapidResponse`;
  }

  update(id: number, updateRapidResponseInput: UpdateRapidResponseInput) {
    return `This action updates a #${id} rapidResponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} rapidResponse`;
  }
}
