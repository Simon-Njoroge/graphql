import { Module } from '@nestjs/common';
import { TriageService } from './triage.service';
import { TriageResolver } from './triage.resolver';

@Module({
  providers: [TriageResolver, TriageService],
})
export class TriageModule {}
