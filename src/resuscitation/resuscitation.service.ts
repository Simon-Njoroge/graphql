import { Injectable } from '@nestjs/common';
import { CreateResuscitationInput } from './dto/create-resuscitation.input';
import { UpdateResuscitationInput } from './dto/update-resuscitation.input';

@Injectable()
export class ResuscitationService {
  create(createResuscitationInput: CreateResuscitationInput) {
    return 'This action adds a new resuscitation';
  }

  findAll() {
    return `This action returns all resuscitation`;
  }

  findOne(id: number) {
    return `This action returns a #${id} resuscitation`;
  }

  update(id: number, updateResuscitationInput: UpdateResuscitationInput) {
    return `This action updates a #${id} resuscitation`;
  }

  remove(id: number) {
    return `This action removes a #${id} resuscitation`;
  }
}
