import { Module } from '@nestjs/common';
import { DashboardsService } from './dashboards.service';
import { DashboardsResolver } from './dashboards.resolver';

@Module({
  providers: [DashboardsResolver, DashboardsService],
})
export class DashboardsModule {}
