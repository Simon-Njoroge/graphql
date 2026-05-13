import { Module } from '@nestjs/common';
import { ClinicalNotesService } from './clinical-notes.service';
import { ClinicalNotesResolver } from './clinical-notes.resolver';

@Module({
  providers: [ClinicalNotesResolver, ClinicalNotesService],
})
export class ClinicalNotesModule {}
