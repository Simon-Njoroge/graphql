import { Module } from '@nestjs/common';
import { PrescriptionsService } from './prescriptions.service';
import { PrescriptionsResolver } from './prescriptions.resolver';

@Module({
  providers: [PrescriptionsResolver, PrescriptionsService],
})
export class PrescriptionsModule {}
