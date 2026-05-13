import { Module } from '@nestjs/common';
import { DiagnosisService } from './diagnosis.service';
import { DiagnosisResolver } from './diagnosis.resolver';

@Module({
  providers: [DiagnosisResolver, DiagnosisService],
})
export class DiagnosisModule {}
