import { Module } from '@nestjs/common';
import { SurgeryService } from './surgery.service';
import { SurgeryResolver } from './surgery.resolver';

@Module({
  providers: [SurgeryResolver, SurgeryService],
})
export class SurgeryModule {}
