import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuditTrailService } from './audit-trail.service';
import { AuditTrail } from './entities/audit-trail.entity';
import { CreateAuditTrailInput } from './dto/create-audit-trail.input';
import { UpdateAuditTrailInput } from './dto/update-audit-trail.input';

@Resolver(() => AuditTrail)
export class AuditTrailResolver {
  constructor(private readonly auditTrailService: AuditTrailService) {}

  @Mutation(() => AuditTrail)
  createAuditTrail(@Args('createAuditTrailInput') createAuditTrailInput: CreateAuditTrailInput) {
    return this.auditTrailService.create(createAuditTrailInput);
  }

  @Query(() => [AuditTrail], { name: 'auditTrail' })
  findAll() {
    return this.auditTrailService.findAll();
  }

  @Query(() => AuditTrail, { name: 'auditTrail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.auditTrailService.findOne(id);
  }

  @Mutation(() => AuditTrail)
  updateAuditTrail(@Args('updateAuditTrailInput') updateAuditTrailInput: UpdateAuditTrailInput) {
    return this.auditTrailService.update(updateAuditTrailInput.id, updateAuditTrailInput);
  }

  @Mutation(() => AuditTrail)
  removeAuditTrail(@Args('id', { type: () => Int }) id: number) {
    return this.auditTrailService.remove(id);
  }
}
