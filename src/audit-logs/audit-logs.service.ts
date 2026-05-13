import { Injectable } from '@nestjs/common';
import { CreateAuditLogInput } from './dto/create-audit-log.input';
import { UpdateAuditLogInput } from './dto/update-audit-log.input';

@Injectable()
export class AuditLogsService {
  create(createAuditLogInput: CreateAuditLogInput) {
    return 'This action adds a new auditLog';
  }

  findAll() {
    return `This action returns all auditLogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditLog`;
  }

  update(id: number, updateAuditLogInput: UpdateAuditLogInput) {
    return `This action updates a #${id} auditLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditLog`;
  }
}
