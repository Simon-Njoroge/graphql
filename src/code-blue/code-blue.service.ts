import { Injectable } from '@nestjs/common';
import { CreateCodeBlueInput } from './dto/create-code-blue.input';
import { UpdateCodeBlueInput } from './dto/update-code-blue.input';

@Injectable()
export class CodeBlueService {
  create(createCodeBlueInput: CreateCodeBlueInput) {
    return 'This action adds a new codeBlue';
  }

  findAll() {
    return `This action returns all codeBlue`;
  }

  findOne(id: number) {
    return `This action returns a #${id} codeBlue`;
  }

  update(id: number, updateCodeBlueInput: UpdateCodeBlueInput) {
    return `This action updates a #${id} codeBlue`;
  }

  remove(id: number) {
    return `This action removes a #${id} codeBlue`;
  }
}
