import { Module } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { ComplianceResolver } from './compliance.resolver';

@Module({
  providers: [ComplianceResolver, ComplianceService],
})
export class ComplianceModule {}
