import { Injectable } from '@nestjs/common';
import { CreatePatientSatisfactionInput } from './dto/create-patient-satisfaction.input';
import { UpdatePatientSatisfactionInput } from './dto/update-patient-satisfaction.input';

@Injectable()
export class PatientSatisfactionService {
  create(createPatientSatisfactionInput: CreatePatientSatisfactionInput) {
    return 'This action adds a new patientSatisfaction';
  }

  findAll() {
    return `This action returns all patientSatisfaction`;
  }

  findOne(id: number) {
    return `This action returns a #${id} patientSatisfaction`;
  }

  update(id: number, updatePatientSatisfactionInput: UpdatePatientSatisfactionInput) {
    return `This action updates a #${id} patientSatisfaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} patientSatisfaction`;
  }
}
