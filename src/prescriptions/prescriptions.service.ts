import { Injectable } from '@nestjs/common';
import { CreatePrescriptionInput } from './dto/create-prescription.input';
import { UpdatePrescriptionInput } from './dto/update-prescription.input';

@Injectable()
export class PrescriptionsService {
  create(createPrescriptionInput: CreatePrescriptionInput) {
    return 'This action adds a new prescription';
  }

  findAll() {
    return `This action returns all prescriptions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} prescription`;
  }

  update(id: number, updatePrescriptionInput: UpdatePrescriptionInput) {
    return `This action updates a #${id} prescription`;
  }

  remove(id: number) {
    return `This action removes a #${id} prescription`;
  }
}
