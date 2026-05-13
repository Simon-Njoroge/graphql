import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProgressNotesService } from './progress-notes.service';
import { ProgressNote } from './entities/progress-note.entity';
import { CreateProgressNoteInput } from './dto/create-progress-note.input';
import { UpdateProgressNoteInput } from './dto/update-progress-note.input';

@Resolver(() => ProgressNote)
export class ProgressNotesResolver {
  constructor(private readonly progressNotesService: ProgressNotesService) {}

  @Mutation(() => ProgressNote)
  createProgressNote(@Args('createProgressNoteInput') createProgressNoteInput: CreateProgressNoteInput) {
    return this.progressNotesService.create(createProgressNoteInput);
  }

  @Query(() => [ProgressNote], { name: 'progressNotes' })
  findAll() {
    return this.progressNotesService.findAll();
  }

  @Query(() => ProgressNote, { name: 'progressNote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.progressNotesService.findOne(id);
  }

  @Mutation(() => ProgressNote)
  updateProgressNote(@Args('updateProgressNoteInput') updateProgressNoteInput: UpdateProgressNoteInput) {
    return this.progressNotesService.update(updateProgressNoteInput.id, updateProgressNoteInput);
  }

  @Mutation(() => ProgressNote)
  removeProgressNote(@Args('id', { type: () => Int }) id: number) {
    return this.progressNotesService.remove(id);
  }
}
