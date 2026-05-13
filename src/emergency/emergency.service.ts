import { Injectable } from '@nestjs/common';
import { CreateEmergencyInput } from './dto/create-emergency.input';
import { UpdateEmergencyInput } from './dto/update-emergency.input';

@Injectable()
export class EmergencyService {
  create(createEmergencyInput: CreateEmergencyInput) {
    return 'This action adds a new emergency';
  }

  findAll() {
    return `This action returns all emergency`;
  }

  findOne(id: number) {
    return `This action returns a #${id} emergency`;
  }

  update(id: number, updateEmergencyInput: UpdateEmergencyInput) {
    return `This action updates a #${id} emergency`;
  }

  remove(id: number) {
    return `This action removes a #${id} emergency`;
  }
}
