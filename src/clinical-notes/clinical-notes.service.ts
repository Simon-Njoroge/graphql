import { Injectable } from '@nestjs/common';
import { CreateClinicalNoteInput } from './dto/create-clinical-note.input';
import { UpdateClinicalNoteInput } from './dto/update-clinical-note.input';

@Injectable()
export class ClinicalNotesService {
  create(createClinicalNoteInput: CreateClinicalNoteInput) {
    return 'This action adds a new clinicalNote';
  }

  findAll() {
    return `This action returns all clinicalNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clinicalNote`;
  }

  update(id: number, updateClinicalNoteInput: UpdateClinicalNoteInput) {
    return `This action updates a #${id} clinicalNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicalNote`;
  }
}
