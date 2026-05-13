import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ComplianceService } from './compliance.service';
import { Compliance } from './entities/compliance.entity';
import { CreateComplianceInput } from './dto/create-compliance.input';
import { UpdateComplianceInput } from './dto/update-compliance.input';

@Resolver(() => Compliance)
export class ComplianceResolver {
  constructor(private readonly complianceService: ComplianceService) {}

  @Mutation(() => Compliance)
  createCompliance(@Args('createComplianceInput') createComplianceInput: CreateComplianceInput) {
    return this.complianceService.create(createComplianceInput);
  }

  @Query(() => [Compliance], { name: 'compliance' })
  findAll() {
    return this.complianceService.findAll();
  }

  @Query(() => Compliance, { name: 'compliance' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.complianceService.findOne(id);
  }

  @Mutation(() => Compliance)
  updateCompliance(@Args('updateComplianceInput') updateComplianceInput: UpdateComplianceInput) {
    return this.complianceService.update(updateComplianceInput.id, updateComplianceInput);
  }

  @Mutation(() => Compliance)
  removeCompliance(@Args('id', { type: () => Int }) id: number) {
    return this.complianceService.remove(id);
  }
}
