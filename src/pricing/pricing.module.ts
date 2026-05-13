import { Module } from '@nestjs/common';
import { PricingService } from './pricing.service';
import { PricingResolver } from './pricing.resolver';

@Module({
  providers: [PricingResolver, PricingService],
})
export class PricingModule {}
