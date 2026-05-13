import { Injectable } from '@nestjs/common';
import { CreateNursingNoteInput } from './dto/create-nursing-note.input';
import { UpdateNursingNoteInput } from './dto/update-nursing-note.input';

@Injectable()
export class NursingNotesService {
  create(createNursingNoteInput: CreateNursingNoteInput) {
    return 'This action adds a new nursingNote';
  }

  findAll() {
    return `This action returns all nursingNotes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nursingNote`;
  }

  update(id: number, updateNursingNoteInput: UpdateNursingNoteInput) {
    return `This action updates a #${id} nursingNote`;
  }

  remove(id: number) {
    return `This action removes a #${id} nursingNote`;
  }
}
