import { Module } from '@nestjs/common';
import { EmergencyService } from './emergency.service';
import { EmergencyResolver } from './emergency.resolver';

@Module({
  providers: [EmergencyResolver, EmergencyService],
})
export class EmergencyModule {}
