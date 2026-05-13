import { Module } from '@nestjs/common';
import { MedicationsService } from './medications.service';
import { MedicationsResolver } from './medications.resolver';

@Module({
  providers: [MedicationsResolver, MedicationsService],
})
export class MedicationsModule {}
