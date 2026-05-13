import { Injectable } from '@nestjs/common';
import { CreateIntakeOutputInput } from './dto/create-intake-output.input';
import { UpdateIntakeOutputInput } from './dto/update-intake-output.input';

@Injectable()
export class IntakeOutputService {
  create(createIntakeOutputInput: CreateIntakeOutputInput) {
    return 'This action adds a new intakeOutput';
  }

  findAll() {
    return `This action returns all intakeOutput`;
  }

  findOne(id: number) {
    return `This action returns a #${id} intakeOutput`;
  }

  update(id: number, updateIntakeOutputInput: UpdateIntakeOutputInput) {
    return `This action updates a #${id} intakeOutput`;
  }

  remove(id: number) {
    return `This action removes a #${id} intakeOutput`;
  }
}
