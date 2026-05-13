import { Module } from '@nestjs/common';
import { InsuranceService } from './insurance.service';
import { InsuranceResolver } from './insurance.resolver';

@Module({
  providers: [InsuranceResolver, InsuranceService],
})
export class InsuranceModule {}
