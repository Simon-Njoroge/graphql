import { Module } from '@nestjs/common';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesResolver } from './specialties.resolver';

@Module({
  providers: [SpecialtiesResolver, SpecialtiesService],
})
export class SpecialtiesModule {}
