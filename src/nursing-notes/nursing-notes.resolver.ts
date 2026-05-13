import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { NursingNotesService } from './nursing-notes.service';
import { NursingNote } from './entities/nursing-note.entity';
import { CreateNursingNoteInput } from './dto/create-nursing-note.input';
import { UpdateNursingNoteInput } from './dto/update-nursing-note.input';

@Resolver(() => NursingNote)
export class NursingNotesResolver {
  constructor(private readonly nursingNotesService: NursingNotesService) {}

  @Mutation(() => NursingNote)
  createNursingNote(@Args('createNursingNoteInput') createNursingNoteInput: CreateNursingNoteInput) {
    return this.nursingNotesService.create(createNursingNoteInput);
  }

  @Query(() => [NursingNote], { name: 'nursingNotes' })
  findAll() {
    return this.nursingNotesService.findAll();
  }

  @Query(() => NursingNote, { name: 'nursingNote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.nursingNotesService.findOne(id);
  }

  @Mutation(() => NursingNote)
  updateNursingNote(@Args('updateNursingNoteInput') updateNursingNoteInput: UpdateNursingNoteInput) {
    return this.nursingNotesService.update(updateNursingNoteInput.id, updateNursingNoteInput);
  }

  @Mutation(() => NursingNote)
  removeNursingNote(@Args('id', { type: () => Int }) id: number) {
    return this.nursingNotesService.remove(id);
  }
}
