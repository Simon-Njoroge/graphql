import { Module } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';
import { AuditLogsResolver } from './audit-logs.resolver';

@Module({
  providers: [AuditLogsResolver, AuditLogsService],
})
export class AuditLogsModule {}
