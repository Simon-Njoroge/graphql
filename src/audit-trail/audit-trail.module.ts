import { Module } from '@nestjs/common';
import { AuditTrailService } from './audit-trail.service';
import { AuditTrailResolver } from './audit-trail.resolver';

@Module({
  providers: [AuditTrailResolver, AuditTrailService],
})
export class AuditTrailModule {}
