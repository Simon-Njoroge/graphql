import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CriticalCareService } from './critical-care.service';
import { CriticalCare } from './entities/critical-care.entity';
import { CreateCriticalCareInput } from './dto/create-critical-care.input';
import { UpdateCriticalCareInput } from './dto/update-critical-care.input';

@Resolver(() => CriticalCare)
export class CriticalCareResolver {
  constructor(private readonly criticalCareService: CriticalCareService) {}

  @Mutation(() => CriticalCare)
  createCriticalCare(@Args('createCriticalCareInput') createCriticalCareInput: CreateCriticalCareInput) {
    return this.criticalCareService.create(createCriticalCareInput);
  }

  @Query(() => [CriticalCare], { name: 'criticalCare' })
  findAll() {
    return this.criticalCareService.findAll();
  }

  @Query(() => CriticalCare, { name: 'criticalCare' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.criticalCareService.findOne(id);
  }

  @Mutation(() => CriticalCare)
  updateCriticalCare(@Args('updateCriticalCareInput') updateCriticalCareInput: UpdateCriticalCareInput) {
    return this.criticalCareService.update(updateCriticalCareInput.id, updateCriticalCareInput);
  }

  @Mutation(() => CriticalCare)
  removeCriticalCare(@Args('id', { type: () => Int }) id: number) {
    return this.criticalCareService.remove(id);
  }
}
