import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { KpiService } from './kpi.service';
import { Kpi } from './entities/kpi.entity';
import { CreateKpiInput } from './dto/create-kpi.input';
import { UpdateKpiInput } from './dto/update-kpi.input';

@Resolver(() => Kpi)
export class KpiResolver {
  constructor(private readonly kpiService: KpiService) {}

  @Mutation(() => Kpi)
  createKpi(@Args('createKpiInput') createKpiInput: CreateKpiInput) {
    return this.kpiService.create(createKpiInput);
  }

  @Query(() => [Kpi], { name: 'kpi' })
  findAll() {
    return this.kpiService.findAll();
  }

  @Query(() => Kpi, { name: 'kpi' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.kpiService.findOne(id);
  }

  @Mutation(() => Kpi)
  updateKpi(@Args('updateKpiInput') updateKpiInput: UpdateKpiInput) {
    return this.kpiService.update(updateKpiInput.id, updateKpiInput);
  }

  @Mutation(() => Kpi)
  removeKpi(@Args('id', { type: () => Int }) id: number) {
    return this.kpiService.remove(id);
  }
}
