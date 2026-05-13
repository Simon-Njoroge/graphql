import { Module } from '@nestjs/common';
import { MedicalEquipmentService } from './medical-equipment.service';
import { MedicalEquipmentResolver } from './medical-equipment.resolver';

@Module({
  providers: [MedicalEquipmentResolver, MedicalEquipmentService],
})
export class MedicalEquipmentModule {}
