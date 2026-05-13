import { Module } from '@nestjs/common';
import { NursingNotesService } from './nursing-notes.service';
import { NursingNotesResolver } from './nursing-notes.resolver';

@Module({
  providers: [NursingNotesResolver, NursingNotesService],
})
export class NursingNotesModule {}
