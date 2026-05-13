import { Injectable } from '@nestjs/common';
import { CreateProgressNoteInput } from './dto/create-progress-note.input';
import { UpdateProgressNoteInput } from './dto/update-progress-note.input';

@Injectable()
export class ProgressNotesService {
  create(createProgressNoteInput: CreateProgressNoteInput) {
    return 'This action adds a new progressNote';
  }

  findAll() {
    return `This action returns all progressNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} progressNote`;
  }

  update(id: number, updateProgressNoteInput: UpdateProgressNoteInput) {
    return `This action updates a #${id} progressNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} progressNote`;
  }
}
