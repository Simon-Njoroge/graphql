import { Module } from '@nestjs/common';
import { PainAssessmentService } from './pain-assessment.service';
import { PainAssessmentResolver } from './pain-assessment.resolver';

@Module({
  providers: [PainAssessmentResolver, PainAssessmentService],
})
export class PainAssessmentModule {}
