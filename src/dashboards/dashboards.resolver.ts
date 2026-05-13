import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DashboardsService } from './dashboards.service';
import { Dashboard } from './entities/dashboard.entity';
import { CreateDashboardInput } from './dto/create-dashboard.input';
import { UpdateDashboardInput } from './dto/update-dashboard.input';

@Resolver(() => Dashboard)
export class DashboardsResolver {
  constructor(private readonly dashboardsService: DashboardsService) {}

  @Mutation(() => Dashboard)
  createDashboard(@Args('createDashboardInput') createDashboardInput: CreateDashboardInput) {
    return this.dashboardsService.create(createDashboardInput);
  }

  @Query(() => [Dashboard], { name: 'dashboards' })
  findAll() {
    return this.dashboardsService.findAll();
  }

  @Query(() => Dashboard, { name: 'dashboard' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.dashboardsService.findOne(id);
  }

  @Mutation(() => Dashboard)
  updateDashboard(@Args('updateDashboardInput') updateDashboardInput: UpdateDashboardInput) {
    return this.dashboardsService.update(updateDashboardInput.id, updateDashboardInput);
  }

  @Mutation(() => Dashboard)
  removeDashboard(@Args('id', { type: () => Int }) id: number) {
    return this.dashboardsService.remove(id);
  }
}
