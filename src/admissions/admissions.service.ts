import { Injectable } from '@nestjs/common';
import { CreateAdmissionInput } from './dto/create-admission.input';
import { UpdateAdmissionInput } from './dto/update-admission.input';

@Injectable()
export class AdmissionsService {
  create(createAdmissionInput: CreateAdmissionInput) {
    return 'This action adds a new admission';
  }

  findAll() {
    return `This action returns all admissions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admission`;
  }

  update(id: number, updateAdmissionInput: UpdateAdmissionInput) {
    return `This action updates a #${id} admission`;
  }

  remove(id: number) {
    return `This action removes a #${id} admission`;
  }
}
