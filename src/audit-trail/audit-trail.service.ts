import { Injectable } from '@nestjs/common';
import { CreateAuditTrailInput } from './dto/create-audit-trail.input';
import { UpdateAuditTrailInput } from './dto/update-audit-trail.input';

@Injectable()
export class AuditTrailService {
  create(createAuditTrailInput: CreateAuditTrailInput) {
    return 'This action adds a new auditTrail';
  }

  findAll() {
    return `This action returns all auditTrail`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auditTrail`;
  }

  update(id: number, updateAuditTrailInput: UpdateAuditTrailInput) {
    return `This action updates a #${id} auditTrail`;
  }

  remove(id: number) {
    return `This action removes a #${id} auditTrail`;
  }
}
