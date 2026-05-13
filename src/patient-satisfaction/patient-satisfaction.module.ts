import { Module } from '@nestjs/common';
import { PatientSatisfactionService } from './patient-satisfaction.service';
import { PatientSatisfactionResolver } from './patient-satisfaction.resolver';

@Module({
  providers: [PatientSatisfactionResolver, PatientSatisfactionService],
})
export class PatientSatisfactionModule {}
