import { Module } from '@nestjs/common';
import { LabTestsService } from './lab-tests.service';
import { LabTestsResolver } from './lab-tests.resolver';

@Module({
  providers: [LabTestsResolver, LabTestsService],
})
export class LabTestsModule {}
