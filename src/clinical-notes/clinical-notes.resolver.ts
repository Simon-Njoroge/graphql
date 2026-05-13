import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClinicalNotesService } from './clinical-notes.service';
import { ClinicalNote } from './entities/clinical-note.entity';
import { CreateClinicalNoteInput } from './dto/create-clinical-note.input';
import { UpdateClinicalNoteInput } from './dto/update-clinical-note.input';

@Resolver(() => ClinicalNote)
export class ClinicalNotesResolver {
  constructor(private readonly clinicalNotesService: ClinicalNotesService) {}

  @Mutation(() => ClinicalNote)
  createClinicalNote(@Args('createClinicalNoteInput') createClinicalNoteInput: CreateClinicalNoteInput) {
    return this.clinicalNotesService.create(createClinicalNoteInput);
  }

  @Query(() => [ClinicalNote], { name: 'clinicalNotes' })
  findAll() {
    return this.clinicalNotesService.findAll();
  }

  @Query(() => ClinicalNote, { name: 'clinicalNote' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clinicalNotesService.findOne(id);
  }

  @Mutation(() => ClinicalNote)
  updateClinicalNote(@Args('updateClinicalNoteInput') updateClinicalNoteInput: UpdateClinicalNoteInput) {
    return this.clinicalNotesService.update(updateClinicalNoteInput.id, updateClinicalNoteInput);
  }

  @Mutation(() => ClinicalNote)
  removeClinicalNote(@Args('id', { type: () => Int }) id: number) {
    return this.clinicalNotesService.remove(id);
  }
}
