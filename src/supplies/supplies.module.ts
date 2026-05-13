import { Module } from '@nestjs/common';
import { SuppliesService } from './supplies.service';
import { SuppliesResolver } from './supplies.resolver';

@Module({
  providers: [SuppliesResolver, SuppliesService],
})
export class SuppliesModule {}
