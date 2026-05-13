import { Module } from '@nestjs/common';
import { AdmissionsService } from './admissions.service';
import { AdmissionsResolver } from './admissions.resolver';

@Module({
  providers: [AdmissionsResolver, AdmissionsService],
})
export class AdmissionsModule {}
