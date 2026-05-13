import { Module } from '@nestjs/common';
import { TelemedicineService } from './telemedicine.service';
import { TelemedicineResolver } from './telemedicine.resolver';

@Module({
  providers: [TelemedicineResolver, TelemedicineService],
})
export class TelemedicineModule {}
