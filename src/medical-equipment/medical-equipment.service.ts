import { Injectable } from '@nestjs/common';
import { CreateMedicalEquipmentInput } from './dto/create-medical-equipment.input';
import { UpdateMedicalEquipmentInput } from './dto/update-medical-equipment.input';

@Injectable()
export class MedicalEquipmentService {
  create(createMedicalEquipmentInput: CreateMedicalEquipmentInput) {
    return 'This action adds a new medicalEquipment';
  }

  findAll() {
    return `This action returns all medicalEquipment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} medicalEquipment`;
  }

  update(id: number, updateMedicalEquipmentInput: UpdateMedicalEquipmentInput) {
    return `This action updates a #${id} medicalEquipment`;
  }

  remove(id: number) {
    return `This action removes a #${id} medicalEquipment`;
  }
}
