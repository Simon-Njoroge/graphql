import { Module } from '@nestjs/common';
import { MedicalRecordsService } from './medical-records.service';
import { MedicalRecordsResolver } from './medical-records.resolver';

@Module({
  providers: [MedicalRecordsResolver, MedicalRecordsService],
})
export class MedicalRecordsModule {}
