import { Module } from '@nestjs/common';
import { ProgressNotesService } from './progress-notes.service';
import { ProgressNotesResolver } from './progress-notes.resolver';

@Module({
  providers: [ProgressNotesResolver, ProgressNotesService],
})
export class ProgressNotesModule {}
