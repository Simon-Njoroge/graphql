import { Module } from '@nestjs/common';
import { AmbulanceService } from './ambulance.service';
import { AmbulanceResolver } from './ambulance.resolver';

@Module({
  providers: [AmbulanceResolver, AmbulanceService],
})
export class AmbulanceModule {}
