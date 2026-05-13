import { Module } from '@nestjs/common';
import { AllergiesService } from './allergies.service';
import { AllergiesResolver } from './allergies.resolver';

@Module({
  providers: [AllergiesResolver, AllergiesService],
})
export class AllergiesModule {}
