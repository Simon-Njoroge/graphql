import { Module } from '@nestjs/common';
import { CarePlansService } from './care-plans.service';
import { CarePlansResolver } from './care-plans.resolver';

@Module({
  providers: [CarePlansResolver, CarePlansService],
})
export class CarePlansModule {}
