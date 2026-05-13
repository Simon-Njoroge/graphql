import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuditLogsService } from './audit-logs.service';
import { AuditLog } from './entities/audit-log.entity';
import { CreateAuditLogInput } from './dto/create-audit-log.input';
import { UpdateAuditLogInput } from './dto/update-audit-log.input';

@Resolver(() => AuditLog)
export class AuditLogsResolver {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Mutation(() => AuditLog)
  createAuditLog(@Args('createAuditLogInput') createAuditLogInput: CreateAuditLogInput) {
    return this.auditLogsService.create(createAuditLogInput);
  }

  @Query(() => [AuditLog], { name: 'auditLogs' })
  findAll() {
    return this.auditLogsService.findAll();
  }

  @Query(() => AuditLog, { name: 'auditLog' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.auditLogsService.findOne(id);
  }

  @Mutation(() => AuditLog)
  updateAuditLog(@Args('updateAuditLogInput') updateAuditLogInput: UpdateAuditLogInput) {
    return this.auditLogsService.update(updateAuditLogInput.id, updateAuditLogInput);
  }

  @Mutation(() => AuditLog)
  removeAuditLog(@Args('id', { type: () => Int }) id: number) {
    return this.auditLogsService.remove(id);
  }
}
