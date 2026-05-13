import { Module } from '@nestjs/common';
import { PharmacyService } from './pharmacy.service';
import { PharmacyResolver } from './pharmacy.resolver';

@Module({
  providers: [PharmacyResolver, PharmacyService],
})
export class PharmacyModule {}
