import { Injectable } from '@nestjs/common';
import { CreateTriageInput } from './dto/create-triage.input';
import { UpdateTriageInput } from './dto/update-triage.input';

@Injectable()
export class TriageService {
  create(createTriageInput: CreateTriageInput) {
    return 'This action adds a new triage';
  }

  findAll() {
    return `This action returns all triage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} triage`;
  }

  update(id: number, updateTriageInput: UpdateTriageInput) {
    return `This action updates a #${id} triage`;
  }

  remove(id: number) {
    return `This action removes a #${id} triage`;
  }
}
