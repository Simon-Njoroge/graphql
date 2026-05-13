import { Injectable } from '@nestjs/common';
import { CreateCarePlanInput } from './dto/create-care-plan.input';
import { UpdateCarePlanInput } from './dto/update-care-plan.input';

@Injectable()
export class CarePlansService {
  create(createCarePlanInput: CreateCarePlanInput) {
    return 'This action adds a new carePlan';
  }

  findAll() {
    return `This action returns all carePlans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} carePlan`;
  }

  update(id: number, updateCarePlanInput: UpdateCarePlanInput) {
    return `This action updates a #${id} carePlan`;
  }

  remove(id: number) {
    return `This action removes a #${id} carePlan`;
  }
}
